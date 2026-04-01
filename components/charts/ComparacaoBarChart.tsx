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

interface ComparacaoBarChartProps {
  data: { name: string; Receita: number; Custos: number; Lucro: number }[]
}

export default function ComparacaoBarChart({ data }: ComparacaoBarChartProps) {
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
          <Bar dataKey="Receita" fill="#2563eb" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Custos" fill="#dc2626" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Lucro" fill="#16a34a" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
