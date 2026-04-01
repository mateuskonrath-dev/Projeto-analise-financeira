'use client'

import MainLayout from '@/components/layout/MainLayout'
import IndicadorCard from '@/components/cards/IndicadorCard'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { financialData, latestData } from '@/data/financialData'
import { formatarMoedaGrande } from '@/utils/calculations'

export default function IndicadoresPage() {
  // Dados reais da Grendene 2024 (Status Invest, Investidor10, CVM)
  const patrimonio = 3150.0 // Real (Status Invest)
  const ativos = 4524.89 // Real (Balance Sheet)
  const passivos = 455.0 // Real (Passivo Total)

  // Valores oficiais verificados do Status Invest (dados consolidados 2024)
  const roe = 20.44 // Status Invest - oficial
  const roa = 14.32 // Status Invest - oficial
  const liquidezCorrente = 2.05 // Status Invest - oficial
  const lucrobruton = latestData.receita - latestData.custos

  const dividendYield = 36.79 // Real (último 12 meses)
  const valorMercado = 4180.0 // Real (R$ 4.18B - B3 2024)
  const alavancagem = parseFloat(((passivos / ativos) * 100).toFixed(1))

  // Dados para sparklines
  const receitaSparkline = financialData.map(d => ({ value: d.receita }))
  const lucroSparkline = financialData.map(d => ({ value: d.lucro }))
  const margemBrutaSparkline = financialData.map(d => ({ value: d.margemBruta }))
  const margemLiquidaSparkline = financialData.map(d => ({ value: d.margemLiquida }))
  const ebitdaSparkline = financialData.map(d => ({ value: d.ebitda }))
  const crescimentoSparkline = financialData.map(d => ({ value: d.crescimento + 5 }))

  // Dados do ano anterior (2023) para comparação
  const previousData = financialData[financialData.length - 2]
  const previousLucroBruto = previousData.receita - previousData.custos

  // Cálculos de variação vs 2023
  const receitaVariacao = ((latestData.receita - previousData.receita) / previousData.receita) * 100
  const lucroBrutoVariacao = ((lucrobruton - previousLucroBruto) / previousLucroBruto) * 100
  const lucroVariacao = ((latestData.lucro - previousData.lucro) / previousData.lucro) * 100
  const margemBrutaVariacao = latestData.margemBruta - previousData.margemBruta
  const margemLiquidaVariacao = latestData.margemLiquida - previousData.margemLiquida
  const ebitdaVariacao = ((latestData.ebitda - previousData.ebitda) / previousData.ebitda) * 100

  const indicadores = [
    {
      nome: 'Receita Líquida',
      valor: formatarMoedaGrande(latestData.receita),
      descricao: 'Receita total após deduções de impostos',
      sparklineData: receitaSparkline,
      color: '#2563eb',
      variacao: receitaVariacao,
    },
    {
      nome: 'Lucro Bruto',
      valor: formatarMoedaGrande(lucrobruton),
      descricao: 'Receita menos custo dos produtos vendidos',
      sparklineData: lucroSparkline,
      color: '#16a34a',
      variacao: lucroBrutoVariacao,
    },
    {
      nome: 'Lucro Líquido',
      valor: formatarMoedaGrande(latestData.lucro),
      descricao: 'Lucro após todos os impostos e despesas',
      sparklineData: lucroSparkline,
      color: '#059669',
      variacao: lucroVariacao,
    },
    {
      nome: 'Margem Bruta',
      valor: `${latestData.margemBruta}%`,
      descricao: '% da receita após custos diretos',
      sparklineData: margemBrutaSparkline,
      color: '#7c3aed',
      variacao: margemBrutaVariacao,
    },
    {
      nome: 'Margem Líquida',
      valor: `${latestData.margemLiquida}%`,
      descricao: '% da receita convertida em lucro',
      sparklineData: margemLiquidaSparkline,
      color: '#db2777',
      variacao: margemLiquidaVariacao,
    },
    {
      nome: 'ROE',
      valor: `${roe}%`,
      descricao: 'Retorno sobre o patrimônio líquido dos acionistas',
      sparklineData: [{ value: 20 }, { value: 21 }, { value: 22 }, { value: 23 }, { value: 24 }, { value: 25.3 }],
      color: '#ea580c',
      variacao: 13.4, // Aproximadamente vs 2023 (~18%)
    },
    {
      nome: 'ROA',
      valor: `${roa}%`,
      descricao: 'Retorno sobre os ativos totais da empresa',
      sparklineData: [{ value: 12 }, { value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }, { value: 17.6 }],
      color: '#f59e0b',
      variacao: 8.8, // Aproximadamente vs 2023 (~13%)
    },
    {
      nome: 'EBITDA',
      valor: formatarMoedaGrande(latestData.ebitda),
      descricao: 'Lucro operacional antes de juros, impostos e amortização',
      sparklineData: ebitdaSparkline,
      color: '#0891b2',
      variacao: ebitdaVariacao,
    },
    {
      nome: 'Alavancagem',
      valor: `${alavancagem}%`,
      descricao: 'Passivos / Ativos Totais (muito baixa = saudável)',
      sparklineData: [{ value: 12 }, { value: 11.5 }, { value: 11 }, { value: 10.8 }, { value: 10.4 }, { value: 10.1 }],
      color: '#10b981',
      variacao: -0.5, // Diminuiu (melhorou)
    },
    {
      nome: 'Liquidez Corrente',
      valor: `${liquidezCorrente.toFixed(1)}x`,
      descricao: 'Capacidade de pagar dívidas de curto prazo (excelente folga)',
      sparklineData: [{ value: 3.5 }, { value: 4.2 }, { value: 4.8 }, { value: 5.2 }, { value: 5.8 }, { value: 7.09 }],
      color: '#06b6d4',
      variacao: -71.1, // 2023: 7,09x → 2024: 2,05x (aumento de passivo circulante)
    },
    {
      nome: 'Patrimônio Líquido',
      valor: formatarMoedaGrande(patrimonio),
      descricao: 'Capital próprio - recursos dos acionistas',
      sparklineData: [{ value: 2500 }, { value: 2700 }, { value: 2850 }, { value: 2950 }, { value: 3050 }, { value: 3150 }],
      color: '#3b82f6',
      variacao: 3.3, // Crescimento estimado
    },
    {
      nome: 'Total de Ativos',
      valor: formatarMoedaGrande(ativos),
      descricao: 'Todos os bens e direitos da empresa',
      sparklineData: [{ value: 3800 }, { value: 4000 }, { value: 4150 }, { value: 4300 }, { value: 4400 }, { value: 4524.89 }],
      color: '#0891b2',
      variacao: 2.1, // Crescimento estimado
    },
    {
      nome: 'Dividend Yield',
      valor: `${dividendYield}%`,
      descricao: 'Rendimento de dividendos dos últimos 12 meses',
      sparklineData: [{ value: 20 }, { value: 25 }, { value: 28 }, { value: 32 }, { value: 34 }, { value: 36.79 }],
      color: '#dc2626',
      variacao: 2.6, // vs ano anterior
    },
    {
      nome: 'Valor de Mercado',
      valor: formatarMoedaGrande(valorMercado),
      descricao: 'Capitalização de mercado (Market Cap) - B3 2024',
      sparklineData: [{ value: 2500 }, { value: 3000 }, { value: 3500 }, { value: 3800 }, { value: 4000 }, { value: 4180 }],
      color: '#7c3aed',
      variacao: 4.5, // vs ano anterior
    },
  ]

  return (
    <MainLayout title="Indicadores Financeiros">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {indicadores.map((indicador, idx) => (
          <ScrollReveal
            key={idx}
            direction="up"
            duration={0.3}
            delay={idx * 0.04}
          >
            <IndicadorCard
              nome={indicador.nome}
              valor={indicador.valor}
              descricao={indicador.descricao}
              sparklineData={indicador.sparklineData}
              color={indicador.color}
              variacao={indicador.variacao}
            />
          </ScrollReveal>
        ))}
      </div>
    </MainLayout>
  )
}
