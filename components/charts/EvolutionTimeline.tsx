'use client'

import { useState } from 'react'

interface TimelineItem {
  ano: number
  valor: number
  variacao: number
  label: string
}

interface EvolutionTimelineProps {
  data: TimelineItem[]
  title: string
  unit: string
}

export default function EvolutionTimeline({
  data,
  title,
  unit,
}: EvolutionTimelineProps) {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null)

  // Encontrar min e max para normalizar
  const values = data.map(d => d.valor)
  const minVal = Math.min(...values)
  const maxVal = Math.max(...values)
  const range = maxVal - minVal

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>

      <div className="space-y-8">
        {/* Timeline visual */}
        <div className="relative px-4 py-8">
          {/* Linha conectora */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-600 transform -translate-y-1/2"></div>

          {/* Pontos na timeline */}
          <div className="relative flex justify-between items-center">
            {data.map((item, idx) => {
              const isPositive = item.variacao >= 0
              const normalizedHeight = range > 0 ? (item.valor - minVal) / range : 0.5

              return (
                <div
                  key={item.ano}
                  className="flex flex-col items-center relative group cursor-pointer"
                  onMouseEnter={() => setHoveredYear(item.ano)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  {/* Ponto principal */}
                  <div
                    className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      hoveredYear === item.ano
                        ? 'scale-125 shadow-lg'
                        : 'scale-100'
                    } ${
                      isPositive
                        ? 'bg-green-500 border-green-300'
                        : 'bg-red-500 border-red-300'
                    }`}
                  />

                  {/* Tooltip ao hover */}
                  {hoveredYear === item.ano && (
                    <div className="absolute bottom-full mb-4 bg-gray-900 text-white text-xs rounded-lg p-3 whitespace-nowrap z-20 shadow-lg">
                      <div className="font-semibold">{item.ano}</div>
                      <div className="text-sm">
                        {item.valor.toLocaleString('pt-BR', {
                          maximumFractionDigits: 1,
                        })}{' '}
                        {unit}
                      </div>
                      <div
                        className={`text-xs font-semibold ${
                          isPositive ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {isPositive ? '⬆️ ' : '⬇️ '}
                        {Math.abs(item.variacao)}%
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                    </div>
                  )}

                  {/* Ano embaixo */}
                  <div className="mt-4 text-center">
                    <div className="font-semibold text-gray-900 text-sm">
                      {item.ano}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {item.valor.toLocaleString('pt-BR', {
                        maximumFractionDigits: 1,
                      })}{' '}
                      {unit}
                    </div>
                  </div>

                  {/* Rótulo de contexto */}
                  <div className="text-xs text-gray-600 mt-2 text-center max-w-[80px]">
                    {item.label}
                  </div>

                  {/* Badge de variação */}
                  <div
                    className={`mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
                      isPositive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {isPositive ? '⬆️ ' : '⬇️ '}
                    {Math.abs(item.variacao).toFixed(1)}%
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Legenda */}
        <div className="flex gap-6 justify-center text-xs text-gray-600 pt-4 border-t">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            Crescimento
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            Queda
          </div>
        </div>
      </div>
    </div>
  )
}
