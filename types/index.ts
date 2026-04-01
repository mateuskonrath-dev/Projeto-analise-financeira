export interface AnoFinanceiro {
  ano: number
  receita: number        // em milhões R$
  custos: number
  lucro: number
  ebitda: number
  margemLiquida: number  // calculada: lucro/receita * 100
  margemBruta: number    // calculada: (receita - custos) / receita * 100
  crescimento: number    // calculada: variação % vs ano anterior
}

export interface SimulacaoInput {
  aumentoReceita: number    // %
  aumentoCustos: number     // %
  reducaoDespesas: number   // %
  novoInvestimento: number  // R$ milhões
}

export interface SimulacaoResultado {
  novaReceita: number
  novoCustos: number
  novoLucro: number
  novaMargem: number
  impacto: number           // diferença vs atual
}

export interface InvestimentoInput {
  valorInvestimento: number
  retornoEsperado: number   // % ao ano
  prazo: number             // anos
}

export interface InvestimentoResultado {
  roi: number
  payback: number           // em anos
  valorFinal: number
  serieHistorica: { ano: number; valor: number }[]
}

export interface NavItem {
  label: string
  href: string
  icon: string  // nome do ícone lucide
}
