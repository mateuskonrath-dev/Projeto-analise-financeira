import { ArrowUp, ArrowDown } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  icon: React.ReactNode
  trend?: number        // variação % vs ano anterior
  color?: 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'teal'
}

const colorClasses = {
  blue: 'border-t-blue-500',
  green: 'border-t-green-500',
  red: 'border-t-red-500',
  purple: 'border-t-purple-500',
  orange: 'border-t-orange-500',
  teal: 'border-t-teal-500',
}

const iconColorClasses = {
  blue: 'text-blue-500',
  green: 'text-green-500',
  red: 'text-red-500',
  purple: 'text-purple-500',
  orange: 'text-orange-500',
  teal: 'text-teal-500',
}

export default function MetricCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = 'blue',
}: MetricCardProps) {
  const borderClass = colorClasses[color]
  const iconClass = iconColorClasses[color]
  const isTrendPositive = (trend ?? 0) >= 0

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border-t-4 ${borderClass}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
          {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`${iconClass} opacity-80`}>{icon}</div>
      </div>

      {trend !== undefined && (
        <div className="mt-4 flex items-center gap-1">
          {isTrendPositive ? (
            <>
              <ArrowUp size={16} className="text-green-600" />
              <span className="text-green-600 text-sm font-semibold">{trend}%</span>
            </>
          ) : (
            <>
              <ArrowDown size={16} className="text-red-600" />
              <span className="text-red-600 text-sm font-semibold">{Math.abs(trend)}%</span>
            </>
          )}
          <span className="text-gray-500 text-xs ml-1">vs. ano anterior</span>
        </div>
      )}
    </div>
  )
}
