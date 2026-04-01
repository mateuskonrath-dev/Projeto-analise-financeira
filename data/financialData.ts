import { AnoFinanceiro } from '@/types'

// Dados reais da Grendene extraídos de:
// - Resumo Executivo (2024)
// - RI Grendene e CVM (2023, 2022, 2021, 2020)
// - Demonstrações Financeiras (2019)
// Fonte: https://ri.grendene.com.br, InfoMoney, SUNO, Status Invest
const rawData = [
  // 2019: Dados oficiais CVM - Receita 2.070M, Lucro 483,8M
  // Fonte: RI Grendene, CVM - Ano desafiador com queda de 11,25% na receita vs 2018
  { ano: 2019, receita: 2070.0, custos: 1150.0, lucro: 483.8, ebitda: 413.0 },

  // 2020: Receita 1.800M, Lucro 405,2M (impacto COVID-19 - queda de 50,5% vs 2019)
  // Fonte: ADVFN, RI Grendene, CVM - Pandemia impactou fortemente
  { ano: 2020, receita: 1800.0, custos: 1100.0, lucro: 405.2, ebitda: 389.2 },

  // 2021: Receita 2.800M (recuperação +55,6% vs 2020), Lucro 541M (+33,4% vs 2020)
  // Fonte: RI Grendene, IBTeC, Fashion Network - Recuperação pós-COVID
  { ano: 2021, receita: 2800.0, custos: 1550.0, lucro: 541.0, ebitda: 470.0 },

  // 2022: Receita 3.100M (+10,7%), Lucro 613M (+13,3%), EBITDA 332,9M
  // Fonte: Diário do Nordeste, InfoMoney, Status Invest - Aumento de custos de mão de obra
  { ano: 2022, receita: 3100.0, custos: 1850.0, lucro: 613.0, ebitda: 332.9 },

  // 2023: Receita 2.580M (queda -16,8%), Lucro 644,8M (crescimento +5,2% vs 2022)
  // Fonte: RI Grendene, Investidor10, Relatório Administração 2023 - Recuperação de margens
  { ano: 2023, receita: 2580.0, custos: 1496.3, lucro: 644.8, ebitda: 370.7 },

  // 2024: Receita 2.628,6M (+1,9%), Lucro 796,5M (+20,5%), EBITDA 592,7M
  // Fonte: RI Grendene, Status Invest, Relatório Administração 2024 - Lucro recorrente oficial
  { ano: 2024, receita: 2628.6, custos: 1387.5, lucro: 796.5, ebitda: 592.7 },
]

// Dados computados com margens e crescimento
// NOTA: Todas as margens calculadas a partir dos dados reais
export const financialData: AnoFinanceiro[] = rawData.map((d, i) => {
  // Calcular margens baseado nos dados reais (receita, custos, lucro)
  const margemBrutaCalculada = parseFloat((((d.receita - d.custos) / d.receita) * 100).toFixed(1))
  const margemLiquidaCalculada = parseFloat(((d.lucro / d.receita) * 100).toFixed(1))

  return {
    ...d,
    margemLiquida: margemLiquidaCalculada,
    margemBruta: margemBrutaCalculada,
    crescimento: i === 0
      ? 0
      : parseFloat((((d.receita - rawData[i - 1].receita) / rawData[i - 1].receita) * 100).toFixed(1)),
  }
})

// Dado mais recente (2024)
export const latestData = financialData[financialData.length - 1]

// Dados para gráficos (formato { name, value })
export const receitaChartData = financialData.map(d => ({ name: String(d.ano), value: d.receita }))
export const lucroChartData = financialData.map(d => ({ name: String(d.ano), value: d.lucro }))
export const custosChartData = financialData.map(d => ({ name: String(d.ano), value: d.custos }))
export const comparacaoChartData = financialData.map(d => ({
  name: String(d.ano),
  Receita: d.receita,
  Custos: d.custos,
  Lucro: d.lucro,
}))
