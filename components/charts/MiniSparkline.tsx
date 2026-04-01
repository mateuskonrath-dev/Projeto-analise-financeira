'use client'

import { LineChart, Line, ResponsiveContainer } from 'recharts'

interface MiniSparklineProps {
  data: { value: number }[]
  color?: string
}

export default function MiniSparkline({ data, color = '#2563eb' }: MiniSparklineProps) {
  return (
    <div className="w-full h-[40px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
