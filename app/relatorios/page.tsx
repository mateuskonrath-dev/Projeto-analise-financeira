'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { financialData } from '@/data/financialData'
import { formatarMoedaGrande, formatarPorcentagem } from '@/utils/calculations'

export default function RelatoriosPage() {
  const [filtroAnoMin, setFiltroAnoMin] = useState(financialData[0].ano)
  const [filtroAnoMax, setFiltroAnoMax] = useState(financialData[financialData.length - 1].ano)

  const dadosFiltrados = financialData.filter(
    d => d.ano >= filtroAnoMin && d.ano <= filtroAnoMax
  )

  return (
    <MainLayout title="Relatórios Financeiros">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ano Inicial
            </label>
            <select
              value={filtroAnoMin}
              onChange={e => setFiltroAnoMin(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
            >
              {financialData.map(d => (
                <option key={d.ano} value={d.ano}>
                  {d.ano}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ano Final
            </label>
            <select
              value={filtroAnoMax}
              onChange={e => setFiltroAnoMax(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
            >
              {financialData.map(d => (
                <option key={d.ano} value={d.ano}>
                  {d.ano}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-900 text-white">
                <th className="text-left py-4 px-6 font-semibold">Ano</th>
                <th className="text-right py-4 px-6 font-semibold">Receita</th>
                <th className="text-right py-4 px-6 font-semibold">Custos</th>
                <th className="text-right py-4 px-6 font-semibold">Lucro</th>
                <th className="text-right py-4 px-6 font-semibold">EBITDA</th>
                <th className="text-right py-4 px-6 font-semibold">Margem Bruta</th>
                <th className="text-right py-4 px-6 font-semibold">Margem Líquida</th>
                <th className="text-right py-4 px-6 font-semibold">Crescimento</th>
              </tr>
            </thead>
            <tbody>
              {dadosFiltrados.map((item, idx) => {
                // Verificar se lucro diminuiu em relação ao ano anterior
                const previousItem = financialData.find(d => d.ano === item.ano - 1)
                const lucroDecresceu = previousItem && item.lucro < previousItem.lucro

                return (
                  <tr
                    key={item.ano}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{item.ano}</td>
                    <td className="text-right py-4 px-6 text-gray-900">
                      {formatarMoedaGrande(item.receita)}
                    </td>
                    <td className="text-right py-4 px-6 text-gray-900">
                      {formatarMoedaGrande(item.custos)}
                    </td>
                    <td className={`text-right py-4 px-6 font-semibold ${lucroDecresceu ? 'text-red-600' : 'text-green-600'}`}>
                      {formatarMoedaGrande(item.lucro)}
                    </td>
                    <td className="text-right py-4 px-6 text-gray-900">
                      {formatarMoedaGrande(item.ebitda)}
                    </td>
                    <td className="text-right py-4 px-6 text-gray-900">
                      {formatarPorcentagem(item.margemBruta)}
                    </td>
                    <td className="text-right py-4 px-6 text-gray-900">
                      {formatarPorcentagem(item.margemLiquida)}
                    </td>
                    <td className="text-right py-4 px-6">
                      <span
                        className={
                          item.crescimento >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'
                        }
                      >
                        {item.crescimento > 0 ? '+' : ''}{formatarPorcentagem(item.crescimento)}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-700">
            <strong>Nota:</strong> Valores em bilhões (B) para valores ≥ R$ 1 bilhão, e em milhões (M) para valores menores. As margens são calculadas com base nas demonstrações financeiras consolidadas da Grendene.
          </p>
        </div>
        </div>
      </ScrollReveal>
    </MainLayout>
  )
}
