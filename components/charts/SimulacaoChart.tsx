'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface SimulacaoChartProps {
  atual: { receita: number; custos: number; lucro: number }
  simulado: { receita: number; custos: number; lucro: number }
}

export default function SimulacaoChart({ atual, simulado }: SimulacaoChartProps) {
  const data = [
    { name: 'Receita', Atual: atual.receita, Simulado: simulado.receita },
    { name: 'Custos', Atual: atual.custos, Simulado: simulado.custos },
    { name: 'Lucro', Atual: atual.lucro, Simulado: simulado.lucro },
  ]

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
            formatter={(value) => `R$ ${value}M`}
          />
          <Legend />
          <Bar dataKey="Atual" fill="#94a3b8" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Simulado" fill="#2563eb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
