'use client'

import MainLayout from '@/components/layout/MainLayout'
import { CheckCircle } from 'lucide-react'

export default function PropostaInvestimentoPage() {
  return (
    <MainLayout title="Proposta de Investimento - Grendene">
      <div className="mb-8 bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl shadow-sm p-6 border border-brand-200">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Proposta de Investimento - Grendene</h2>
          <p className="text-gray-700">Controle de Qualidade Automatizado com Visão Computacional</p>
        </div>

        <div className="mb-6 p-4 bg-white rounded-lg border-l-4 border-brand-600">
          <h3 className="font-semibold text-brand-900 mb-2">Controle de Qualidade Automatizado</h3>
          <p className="text-sm text-gray-700">Implantação de 6 máquinas de inspeção com visão computacional para redução de defeitos, retrabalho e devoluções</p>
        </div>

        {/* Composição do Investimento */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Composição Detalhada do Investimento</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-gray-200">
              <thead className="bg-brand-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Item</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Quantidade</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Valor Unitário</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Máquinas de Inspeção (Visão Computacional)</td>
                  <td className="text-center py-3 px-4 text-gray-700">6</td>
                  <td className="text-right py-3 px-4 text-gray-700">R$ 600 mil</td>
                  <td className="text-right py-3 px-4 font-semibold text-gray-900">R$ 3.600 mil</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Instalação e Calibração</td>
                  <td className="text-center py-3 px-4 text-gray-700">1</td>
                  <td className="text-right py-3 px-4 text-gray-700">R$ 100 mil</td>
                  <td className="text-right py-3 px-4 font-semibold text-gray-900">R$ 100 mil</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Integração ERP e Sistemas</td>
                  <td className="text-center py-3 px-4 text-gray-700">1</td>
                  <td className="text-right py-3 px-4 text-gray-700">R$ 100 mil</td>
                  <td className="text-right py-3 px-4 font-semibold text-gray-900">R$ 100 mil</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Treinamento de Equipes</td>
                  <td className="text-center py-3 px-4 text-gray-700">1</td>
                  <td className="text-right py-3 px-4 text-gray-700">R$ 100 mil</td>
                  <td className="text-right py-3 px-4 font-semibold text-gray-900">R$ 100 mil</td>
                </tr>
                <tr className="border-t border-gray-200 border-b-2 border-brand-600 bg-brand-50">
                  <td colSpan={3} className="py-3 px-4 font-semibold text-gray-900">TOTAL DO INVESTIMENTO</td>
                  <td className="text-right py-3 px-4 font-bold text-brand-700 text-lg">R$ 4.000 mil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Indicadores de Viabilidade */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Indicadores de Viabilidade</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">Payback Simples:</span>
                <span className="font-semibold text-green-600">1,10 anos</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">Payback Descontado:</span>
                <span className="font-semibold text-green-600">1,20 anos</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">VPL (WACC 10%):</span>
                <span className="font-semibold text-green-600">R$ 16,86M</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">TIR:</span>
                <span className="font-semibold text-green-600">~78-80% a.a.</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">EVA Incremental:</span>
                <span className="font-semibold text-green-600">R$ 3,35M/ano</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">TMR (Taxa Média Retorno):</span>
                <span className="font-semibold text-green-600">142% a.a.</span>
              </div>
            </div>
          </div>

          {/* Benefícios Estimados */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Benefícios Estimados (Anuais)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">Redução de Defeitos (2-4%):</span>
                <span className="font-semibold text-blue-600">R$ 2,0M - R$ 2,8M</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">Redução de Retrabalho:</span>
                <span className="font-semibold text-blue-600">R$ 1,0M - R$ 1,5M</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">Redução de Devoluções (1-2%):</span>
                <span className="font-semibold text-blue-600">R$ 0,5M - R$ 1,0M</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-gray-700">Economia Operacional:</span>
                <span className="font-semibold text-blue-600">R$ 1,9M - R$ 2,0M</span>
              </div>
              <div className="flex justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-semibold text-gray-900">Total Anual (Estável):</span>
                <span className="font-bold text-blue-700">R$ 5,4M - R$ 7,3M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fluxo de Caixa Projetado */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Fluxo de Caixa Anual (5 anos)</h3>
          <div className="grid grid-cols-5 gap-2 text-center text-sm">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 text-xs mb-1">Ano 1 (2026)</p>
              <p className="font-semibold text-gray-900">R$ 3,5M</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 text-xs mb-1">Ano 2 (2027)</p>
              <p className="font-semibold text-gray-900">R$ 5,0M</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 text-xs mb-1">Ano 3 (2028)</p>
              <p className="font-semibold text-gray-900">R$ 6,0M</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 text-xs mb-1">Ano 4 (2029)</p>
              <p className="font-semibold text-gray-900">R$ 6,5M</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 text-xs mb-1">Ano 5 (2030)</p>
              <p className="font-semibold text-gray-900">R$ 7,4M</p>
            </div>
          </div>
        </div>

        {/* Timeline de Implementação */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Cronograma de Implementação (2025-2030)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-gray-200">
              <thead className="bg-brand-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Período</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Fase</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Atividades Principais</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">2025/26</td>
                  <td className="py-3 px-4 text-gray-700">Investimento Inicial</td>
                  <td className="py-3 px-4 text-gray-700">Aquisição de equipamentos, instalação, treinamento</td>
                  <td className="text-center py-3 px-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Planejado</span></td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-700">2026</td>
                  <td className="py-3 px-4 text-gray-700">Ramp-up (50%)</td>
                  <td className="py-3 px-4 text-gray-700">Operação com 50% de capacidade, ajustes, testes</td>
                  <td className="text-center py-3 px-4"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Benefício: R$ 3,5M</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">2027</td>
                  <td className="py-3 px-4 text-gray-700">100% Capacidade</td>
                  <td className="py-3 px-4 text-gray-700">Operação plena, otimização de processos</td>
                  <td className="text-center py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Benefício: R$ 5,0M</span></td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-700">2028</td>
                  <td className="py-3 px-4 text-gray-700">Otimização</td>
                  <td className="py-3 px-4 text-gray-700">Melhoria contínua, expansão opcional</td>
                  <td className="text-center py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Benefício: R$ 6,0M</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">2029</td>
                  <td className="py-3 px-4 text-gray-700">Melhoria Contínua</td>
                  <td className="py-3 px-4 text-gray-700">Refinamento de processos, análise de ROI</td>
                  <td className="text-center py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Benefício: R$ 6,5M</span></td>
                </tr>
                <tr className="border-t border-gray-200 border-b-2 border-brand-600 bg-brand-50">
                  <td className="py-3 px-4 font-semibold text-gray-700">2030</td>
                  <td className="py-3 px-4 text-gray-700">Operação Estável</td>
                  <td className="py-3 px-4 text-gray-700">Operação em regime, coleta de dados, relatórios</td>
                  <td className="text-center py-3 px-4"><span className="bg-brand-100 text-brand-800 text-xs px-2 py-1 rounded">Benefício: R$ 7,4M</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-green-200 flex items-start gap-3">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-gray-700">
            <strong>Conclusão:</strong> Investimento de R$4M em controle de qualidade é viável e altamente atrativo, com TIR excepcional de 78-80% a.a., VPL positivo de R$16,86M, payback de apenas 1,1 anos e EVA incremental de R$3,35M/ano.
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
