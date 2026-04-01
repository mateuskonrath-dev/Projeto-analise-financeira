import MiniSparkline from '@/components/charts/MiniSparkline'

interface IndicadorCardProps {
  nome: string
  valor: string
  descricao: string
  sparklineData: { value: number }[]
  color?: string
  unidade?: string
  variacao?: number
}

export default function IndicadorCard({
  nome,
  valor,
  descricao,
  sparklineData,
  color = '#2563eb',
  unidade,
  variacao,
}: IndicadorCardProps) {
  const isPositive = (variacao ?? 0) >= 0

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-gray-900 font-semibold text-sm">{nome}</h4>
          <p className="text-gray-500 text-xs mt-1">{unidade}</p>
        </div>
        {variacao !== undefined && (
          <div
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              isPositive
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {isPositive ? '⬆️ ' : '⬇️ '}
            {Math.abs(variacao).toFixed(1)}%
          </div>
        )}
      </div>

      <p className="text-2xl font-bold text-gray-900 mb-4">{valor}</p>

      <div className="mb-3">
        <p className="text-xs text-gray-600 mb-2">Histórico:</p>
        <MiniSparkline data={sparklineData} color={color} />
      </div>

      <p className="text-xs text-gray-500 italic border-t pt-3">{descricao}</p>
    </div>
  )
}
