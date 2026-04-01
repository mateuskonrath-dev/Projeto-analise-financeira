'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import InvestimentoChart from '@/components/charts/InvestimentoChart'
import MetricCard from '@/components/cards/MetricCard'
import { calcularInvestimento } from '@/utils/calculations'
import { InvestimentoInput, InvestimentoResultado } from '@/types'
import { DollarSign, TrendingUp, Clock } from 'lucide-react'

export default function InvestimentosPage() {
  const [input, setInput] = useState<InvestimentoInput>({
    valorInvestimento: 100,
    retornoEsperado: 10,
    prazo: 5,
  })

  const [resultado, setResultado] = useState<InvestimentoResultado | null>(null)

  const handleInputChange = (field: keyof InvestimentoInput, value: number) => {
    setInput(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCalcular = () => {
    const result = calcularInvestimento(input)
    setResultado(result)
  }

  return (
    <MainLayout title="Análise de Investimentos">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Parâmetros do Investimento</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valor do Investimento (R$ Milhões)
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={input.valorInvestimento}
                  onChange={e => handleInputChange('valorInvestimento', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Retorno Esperado (% ao ano)
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={input.retornoEsperado}
                  onChange={e => handleInputChange('retornoEsperado', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prazo (Anos)
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={input.prazo}
                  onChange={e => handleInputChange('prazo', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                />
              </div>

              <button
                onClick={handleCalcular}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <TrendingUp size={20} />
                Calcular
              </button>
            </div>

            {/* Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Notas</h4>
              <p className="text-xs text-blue-700">
                Este cálculo estima o crescimento do investimento com base no retorno esperado anual, assumindo composição contínua.
              </p>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-2">
          {resultado ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <MetricCard
                  title="ROI Estimado"
                  value={`${resultado.roi.toFixed(1)}%`}
                  subtitle={`em ${input.prazo} anos`}
                  icon={<TrendingUp size={28} />}
                  color="blue"
                />
                <MetricCard
                  title="Payback Period"
                  value={`${resultado.payback.toFixed(1)} anos`}
                  subtitle="Tempo para dobrar capital"
                  icon={<Clock size={28} />}
                  color="purple"
                />
                <MetricCard
                  title="Valor Final"
                  value={`R$ ${resultado.valorFinal.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}M`}
                  icon={<DollarSign size={28} />}
                  color="green"
                />
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Projeção de Crescimento
                </h3>
                <InvestimentoChart data={resultado.serieHistorica} />
              </div>

              {/* Tabela de valores */}
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Série Histórica</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Ano</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Valor (R$M)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultado.serieHistorica.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-3 px-4 text-gray-700">{item.ano}</td>
                          <td className="text-right py-3 px-4 font-semibold text-gray-900">
                            R$ {item.valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <p className="text-gray-600 text-lg">
                Preencha os parâmetros e clique em &quot;Calcular&quot; para ver a análise
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
