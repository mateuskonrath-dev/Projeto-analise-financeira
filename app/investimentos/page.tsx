'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import InvestimentoChart from '@/components/charts/InvestimentoChart'
import MetricCard from '@/components/cards/MetricCard'
import { calcularInvestimento } from '@/utils/calculations'
import { InvestimentoInput, InvestimentoResultado } from '@/types'
import { DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react'

export default function InvestimentosPage() {
  const [input, setInput] = useState<InvestimentoInput>({
    valorInvestimento: 100,
    retornoEsperado: 10,
    prazo: 5,
  })

  const [resultado, setResultado] = useState<InvestimentoResultado | null>(null)
  const [mostraPropostaGrendene, setMostraPropostaGrendene] = useState(true)

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
      {/* Seção Proposta Grendene */}
      {mostraPropostaGrendene && (
        <div className="mb-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-sm p-6 border border-brand-200">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Proposta de Investimento - Grendene</h2>
            <button
              onClick={() => setMostraPropostaGrendene(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Resumo da Proposta */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Proposta Faseada</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Fase 1 (2026):</span>
                  <span className="font-semibold text-brand-600">R$ 30M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Fase 2 (2027):</span>
                  <span className="font-semibold text-brand-600">R$ 20M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-brand-50 rounded-lg border border-brand-200">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-brand-700 text-lg">R$ 50M</span>
                </div>
              </div>
            </div>

            {/* Métricas da Proposta */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Indicadores de Viabilidade</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">Payback Simples:</span>
                  <span className="font-semibold text-green-600">3,07 anos</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">VPL (10%):</span>
                  <span className="font-semibold text-green-600">R$ 30,75M</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">TIR:</span>
                  <span className="font-semibold text-green-600">~26-27% a.a.</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-700">EVA Incremental:</span>
                  <span className="font-semibold text-green-600">R$ 9,92M/ano</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fluxo de Caixa Projetado */}
          <div className="mt-6 pt-6 border-t border-brand-200">
            <h3 className="font-semibold text-gray-900 mb-4">Fluxo de Caixa Incremental (5 anos)</h3>
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-600 text-xs mb-1">Ano 1</p>
                <p className="font-semibold text-gray-900">R$ 8M</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-600 text-xs mb-1">Ano 2</p>
                <p className="font-semibold text-gray-900">R$ 16M</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-600 text-xs mb-1">Ano 3</p>
                <p className="font-semibold text-gray-900">R$ 24M</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-600 text-xs mb-1">Ano 4</p>
                <p className="font-semibold text-gray-900">R$ 30M</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-600 text-xs mb-1">Ano 5</p>
                <p className="font-semibold text-gray-900">R$ 35M</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border border-green-200 flex items-start gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-gray-700">
              <strong>Conclusão:</strong> A proposta de R$50M faseado é viável e altamente atrativa, com retorno esperado de 26-27% ao ano e VPL positivo de R$30,75M a uma taxa de desconto de 10%.
            </p>
          </div>
        </div>
      )}

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
