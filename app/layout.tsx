import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grendene - Análise Financeira',
  description: 'Dashboard de análise financeira da Grendene S.A.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
