import {
  SimulacaoInput,
  SimulacaoResultado,
  InvestimentoInput,
  InvestimentoResultado,
  AnoFinanceiro,
} from '@/types'

export function calcularSimulacao(base: AnoFinanceiro, input: SimulacaoInput): SimulacaoResultado {
  // Estrutura Real da Grendene 2024:
  // Receita: 2.628,6M
  // - Custos: 1.387,5M
  // = Lucro Bruto: 1.241,1M
  // - Despesas Op (SG&A): 444,6M
  // = Lucro Líquido: 796,5M

  // Taxa de despesas operacionais em relação à RECEITA (não ao lucro!)
  // Para Grendene 2024: 444,6 / 2.628,6 = 16,91%
  const despesasOperacionaisAtual = base.receita - base.custos - base.lucro
  const taxaDespesasOperacionaisPercentReceita = despesasOperacionaisAtual / base.receita

  // ===== CÁLCULO 1: Aumento de Receita =====
  const novaReceita = base.receita * (1 + input.aumentoReceita / 100)

  // ===== CÁLCULO 2: Novo Custos =====
  const novoCustos = base.custos * (1 + input.aumentoCustos / 100) * (1 - input.reducaoDespesas / 100)

  // ===== CÁLCULO 3: Despesas Operacionais =====
  // As despesas operacionais também são reduzidas pelo parâmetro "reducaoDespesas"
  const novasDespesasOperacionais = novaReceita * taxaDespesasOperacionaisPercentReceita * (1 - input.reducaoDespesas / 100)

  // ===== CÁLCULO 4: Impacto do Novo Investimento =====
  // Investimento funciona em dois eixos:
  // 70% do efeito: Aumenta receita (expansão de capacidade produtiva)
  // 30% do efeito: Reduz despesas operacionais (automação, eficiência)

  // Retorno em RECEITA: Para cada 100M investido, gera ~15M de receita adicional/ano
  const receitaAdicionalDoInvestimento = input.novoInvestimento * 0.15

  // Retorno em DESPESAS: Para cada 100M investido, reduz ~10M em despesas operacionais/ano
  const despesasReduzidas = input.novoInvestimento * 0.10

  // ===== CÁLCULO 5: Receita Final =====
  const receitaFinalComInvestimento = novaReceita + receitaAdicionalDoInvestimento

  // ===== CÁLCULO 6: Despesas Finais =====
  const despesasFinaisComInvestimento = Math.max(novasDespesasOperacionais - despesasReduzidas, 0)

  // ===== CÁLCULO 7: Lucro Final =====
  // Lucro = Receita - Custos - Despesas Operacionais
  const novoLucro = receitaFinalComInvestimento - novoCustos - despesasFinaisComInvestimento

  return {
    novaReceita: parseFloat(receitaFinalComInvestimento.toFixed(1)),
    novoCustos: parseFloat(novoCustos.toFixed(1)),
    novoLucro: parseFloat(novoLucro.toFixed(1)),
    novaMargem: parseFloat(((novoLucro / receitaFinalComInvestimento) * 100).toFixed(1)),
    impacto: parseFloat((novoLucro - base.lucro).toFixed(1)),
  }
}

export function calcularInvestimento(input: InvestimentoInput): InvestimentoResultado {
  const { valorInvestimento, retornoEsperado, prazo } = input
  const taxa = retornoEsperado / 100
  const valorFinal = valorInvestimento * Math.pow(1 + taxa, prazo)
  const roi = ((valorFinal - valorInvestimento) / valorInvestimento) * 100
  const payback = Math.log(2) / Math.log(1 + taxa) // dobrar o capital

  const serieHistorica = Array.from({ length: prazo + 1 }, (_, i) => ({
    ano: i,
    valor: parseFloat((valorInvestimento * Math.pow(1 + taxa, i)).toFixed(2)),
  }))

  return {
    roi: parseFloat(roi.toFixed(2)),
    payback: parseFloat(payback.toFixed(2)),
    valorFinal: parseFloat(valorFinal.toFixed(1)),
    serieHistorica,
  }
}

export function formatarMoeda(valor: number): string {
  return `R$ ${valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}M`
}

export function formatarMoedaGrande(valor: number): string {
  // Se o valor é >= 1000M, converter para B (bilhões)
  if (valor >= 1000) {
    const bilhoes = valor / 1000
    return `R$ ${bilhoes.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}B`
  }
  return `R$ ${valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}M`
}

export function formatarPorcentagem(valor: number): string {
  return `${valor.toFixed(1)}%`
}
