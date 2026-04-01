'use client'

import MainLayout from '@/components/layout/MainLayout'
import MetricCard from '@/components/cards/MetricCard'
import RevenueLineChart from '@/components/charts/RevenueLineChart'
import LucroLineChart from '@/components/charts/LucroLineChart'
import CustosLineChart from '@/components/charts/CustosLineChart'
import ComparacaoBarChart from '@/components/charts/ComparacaoBarChart'
import EvolutionTimeline from '@/components/charts/EvolutionTimeline'
import CounterNumber from '@/components/animations/CounterNumber'
import ScrollReveal from '@/components/animations/ScrollReveal'
import {
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Percent,
  Zap,
  Activity,
} from 'lucide-react'
import {
  financialData,
  latestData,
  receitaChartData,
  lucroChartData,
  custosChartData,
  comparacaoChartData,
} from '@/data/financialData'
import { formatarMoedaGrande } from '@/utils/calculations'

export default function DashboardPage() {
  const previous = financialData[financialData.length - 2]
  const crescimento = latestData.crescimento
  const lucroTrendPercent = ((latestData.lucro - previous.lucro) / previous.lucro) * 100
  const custosTrendPercent = ((latestData.custos - previous.custos) / previous.custos) * 100

  // Timeline data
  const timelineData = financialData.map((item, idx) => {
    const label =
      idx === 0 ? 'Início' :
      idx === 1 ? 'COVID-19' :
      idx === 2 ? 'Recuperação' :
      idx === 3 ? 'Pico' :
      idx === 4 ? 'Ajuste' :
      'Crescimento'

    return {
      ano: item.ano,
      valor: item.receita,
      variacao: item.crescimento,
      label
    }
  })

  return (
    <MainLayout title="Dashboard">
      {/* TOP MÉTRICAS - Seção em Destaque */}
      <ScrollReveal direction="down" duration={0.8}>
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">⭐ TOP MÉTRICAS 2024</h2>
            <p className="text-gray-600 text-sm mt-2">Os 3 indicadores mais importantes do ano</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Receita */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-8 border-2 border-blue-300 hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-blue-600" size={32} />
              <h3 className="text-lg font-bold text-blue-900">Receita Líquida</h3>
            </div>
            <div className="text-4xl font-bold text-blue-900 mb-2">
              R$ <CounterNumber value={latestData.receita} duration={1.5} decimals={2} suffix="B" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                ⬆️ +{crescimento}%
              </span>
              <span className="text-blue-700">vs. 2023</span>
            </div>
            <div className="mt-3 text-xs text-blue-600">Receita total após deduções</div>
          </div>

          {/* Card 2: Lucro */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-8 border-2 border-green-300 hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-green-600" size={32} />
              <h3 className="text-lg font-bold text-green-900">Lucro Líquido</h3>
            </div>
            <div className="text-4xl font-bold text-green-900 mb-2">
              R$ <CounterNumber value={latestData.lucro} duration={1.5} decimals={1} suffix="M" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                ⬆️ +{lucroTrendPercent.toFixed(1)}%
              </span>
              <span className="text-green-700">vs. 2023</span>
            </div>
            <div className="mt-3 text-xs text-green-600">Lucro após todos os impostos</div>
          </div>

          {/* Card 3: Crescimento */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md p-8 border-2 border-purple-300 hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-purple-600" size={32} />
              <h3 className="text-lg font-bold text-purple-900">Crescimento</h3>
            </div>
            <div className="text-4xl font-bold text-purple-900 mb-2">
              <CounterNumber value={crescimento} duration={1.5} decimals={1} suffix="%" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                ⬆️ Positivo
              </span>
              <span className="text-purple-700">vs. 2023</span>
            </div>
            <div className="mt-3 text-xs text-purple-600">Crescimento anual da receita</div>
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* Cards Normais (Secundários) */}
      <ScrollReveal direction="up" duration={0.8} delay={0.2}>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas Complementares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            title="Custos Totais"
            value={formatarMoedaGrande(latestData.custos)}
            icon={<ShoppingCart size={28} />}
            trend={custosTrendPercent}
            color="red"
          />
          <MetricCard
            title="Margem de Lucro"
            value={`${latestData.margemLiquida}%`}
            icon={<Percent size={28} />}
            color="purple"
          />
          <MetricCard
            title="EBITDA"
            value={formatarMoedaGrande(latestData.ebitda)}
            icon={<Zap size={28} />}
            color="orange"
          />
        </div>
      </div>
      </ScrollReveal>

      {/* Timeline de Evolução */}
      <ScrollReveal direction="up" duration={0.8} delay={0.3}>
        <div className="mb-12">
          <EvolutionTimeline
          data={timelineData}
          title="📈 Evolução da Receita (2019-2024)"
          unit="B"
        />
        </div>
      </ScrollReveal>

      {/* Gráficos */}
      <ScrollReveal direction="up" duration={0.8} delay={0.4}>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Análise Detalhada</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Receita por Ano</h3>
            <RevenueLineChart data={receitaChartData} />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lucro por Ano</h3>
            <LucroLineChart data={lucroChartData} />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Custos por Ano</h3>
            <CustosLineChart data={custosChartData} />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Comparação Anual</h3>
            <ComparacaoBarChart data={comparacaoChartData} />
          </div>
        </div>
        </div>
      </ScrollReveal>
    </MainLayout>
  )
}
