'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import SimulacaoChart from '@/components/charts/SimulacaoChart'
import MetricCard from '@/components/cards/MetricCard'
import { latestData } from '@/data/financialData'
import { calcularSimulacao, formatarMoeda, formatarPorcentagem } from '@/utils/calculations'
import { SimulacaoInput, SimulacaoResultado } from '@/types'
import { TrendingUp, ArrowRight } from 'lucide-react'

export default function SimulacaoPage() {
  const [input, setInput] = useState<SimulacaoInput>({
    aumentoReceita: 0,
    aumentoCustos: 0,
    reducaoDespesas: 0,
    novoInvestimento: 0,
  })

  const [resultado, setResultado] = useState<SimulacaoResultado | null>(null)

  const handleInputChange = (field: keyof SimulacaoInput, value: number) => {
    setInput(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSimular = () => {
    const result = calcularSimulacao(latestData, input)
    setResultado(result)
  }

  return (
    <MainLayout title="Simulação Financeira">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Parâmetros</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aumento de Receita (%)
                </label>
                <input
                  type="number"
                  min="-100"
                  max="100"
                  value={input.aumentoReceita}
                  onChange={e => handleInputChange('aumentoReceita', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aumento de Custos (%)
                </label>
                <input
                  type="number"
                  min="-100"
                  max="100"
                  value={input.aumentoCustos}
                  onChange={e => handleInputChange('aumentoCustos', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Redução de Despesas (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={input.reducaoDespesas}
                  onChange={e => handleInputChange('reducaoDespesas', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Novo Investimento (R$ Milhões)
                </label>
                <input
                  type="number"
                  min="0"
                  max="1000"
                  value={input.novoInvestimento}
                  onChange={e => handleInputChange('novoInvestimento', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                  placeholder="0"
                />
              </div>

              <button
                onClick={handleSimular}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <TrendingUp size={20} />
                Simular
              </button>
            </div>

            {/* Dados Atuais */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Situação Atual (2024)</h4>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-gray-600">Receita:</span>
                  <span className="font-semibold">{formatarMoeda(latestData.receita)}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Custos:</span>
                  <span className="font-semibold">{formatarMoeda(latestData.custos)}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Lucro:</span>
                  <span className="font-semibold text-green-600">{formatarMoeda(latestData.lucro)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-2">
          {resultado ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <MetricCard
                  title="Nova Receita"
                  value={`R$ ${resultado.novaReceita.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}M`}
                  icon={<TrendingUp size={28} />}
                  color="blue"
                />
                <MetricCard
                  title="Novo Lucro"
                  value={`R$ ${resultado.novoLucro.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}M`}
                  icon={<TrendingUp size={28} />}
                  color="green"
                />
                <MetricCard
                  title="Nova Margem"
                  value={`${resultado.novaMargem.toFixed(1)}%`}
                  icon={<ArrowRight size={28} />}
                  color="purple"
                />
                <MetricCard
                  title="Impacto"
                  value={`${resultado.impacto > 0 ? '+' : ''}R$ ${resultado.impacto.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}M`}
                  icon={<TrendingUp size={28} />}
                  color={resultado.impacto >= 0 ? 'green' : 'red'}
                />
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Comparação: Atual vs Simulado
                </h3>
                <SimulacaoChart
                  atual={{
                    receita: latestData.receita,
                    custos: latestData.custos,
                    lucro: latestData.lucro,
                  }}
                  simulado={{
                    receita: resultado.novaReceita,
                    custos: resultado.novoCustos,
                    lucro: resultado.novoLucro,
                  }}
                />
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <p className="text-gray-600 text-lg">
                Preencha os parâmetros e clique em &quot;Simular&quot; para ver os resultados
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
