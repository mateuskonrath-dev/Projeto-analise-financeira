'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BarChart2,
  FlaskConical,
  TrendingUp,
  FileText,
  Info,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Indicadores', href: '/indicadores', icon: BarChart2 },
  { label: 'Simulação', href: '/simulacao', icon: FlaskConical },
  { label: 'Investimentos', href: '/investimentos', icon: TrendingUp },
  { label: 'Proposta de Investimento', href: '/proposta-investimento', icon: FileText },
  { label: 'Relatórios', href: '/relatorios', icon: FileText },
  { label: 'Sobre', href: '/sobre', icon: Info },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-brand-900 text-white flex flex-col h-screen shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-brand-800">
        <h1 className="text-2xl font-bold">Grendene</h1>
        <p className="text-sm text-brand-200 mt-1">Análise Financeira</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-brand-700 text-white'
                  : 'text-brand-100 hover:bg-brand-800'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-brand-800 text-xs text-brand-200">
        <p>© 2026 Grendene S.A.</p>
        <p className="mt-2">Projeto Acadêmico - Unisinos</p>
      </div>
    </aside>
  )
}
