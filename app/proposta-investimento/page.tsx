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

        {/* Diagnóstico Estratégico */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Diagnóstico Estratégico - Por que Investir?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Forças e Oportunidades</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Grendene é líder em calçados no Brasil e América Latina</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Capacidade de produção atual: 250M pares/ano (utiliza ~55%)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Receita líquida 2024: R$ 2.628,6M com margem de 30,3%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tecnologia de visão computacional já consolidada no mercado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tendência de automação no setor têxtil e calçadista</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-700 mb-3">Desafios e Riscos</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">⚠</span>
                  <span>Custos de qualidade atuais estimados em 3-5% do CPV</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">⚠</span>
                  <span>Competição global pressiona margens de lucratividade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">⚠</span>
                  <span>Retrabalho e devoluções reduzem eficiência operacional</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">⚠</span>
                  <span>Necessidade de treinamento contínuo da equipe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Análise Setorial */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Análise Setorial - Contexto do Mercado</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Mercado de Calçados</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Setor representa 2-3% do PIB brasileiro</li>
                <li>• Principais players: Grendene, Havaianas, Alpargatas</li>
                <li>• Produção nacional: ~300M pares/ano</li>
                <li>• Exportação importante (América Latina, EUA)</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Tendências do Setor</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Automação e indústria 4.0 em expansão</li>
                <li>• Qualidade como diferencial competitivo</li>
                <li>• Sustentabilidade e responsabilidade social</li>
                <li>• Inovação em materiais e design</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Posição da Grendene</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Maior produtora de calçados da América Latina</li>
                <li>• Presença em 130+ países</li>
                <li>• Portfólio de marcas forte (Havaianas, Ipanema)</li>
                <li>• Margem operacional saudável (19,3% EBIT 2024)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Análise de Riscos */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Análise de Riscos e Mitigações</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-gray-200">
              <thead className="bg-red-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Risco</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Nível</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Mitigação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Falha técnica das máquinas</td>
                  <td className="text-center py-3 px-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MÉDIO</span></td>
                  <td className="py-3 px-4 text-gray-700">Garantia de 3 anos + contrato de manutenção com fornecedor</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Resistência da equipe à mudança</td>
                  <td className="text-center py-3 px-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MÉDIO</span></td>
                  <td className="py-3 px-4 text-gray-700">Programa robusto de treinamento + comunicação clara dos benefícios</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Custos de integração maiores que previsto</td>
                  <td className="text-center py-3 px-4"><span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">BAIXO</span></td>
                  <td className="py-3 px-4 text-gray-700">Reserva de contingência de 10% + expertise interna em sistemas</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Redução de produção durante implementação</td>
                  <td className="text-center py-3 px-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MÉDIO</span></td>
                  <td className="py-3 px-4 text-gray-700">Implementação em fases por linha de produção</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Não atingimento dos benefícios estimados</td>
                  <td className="text-center py-3 px-4"><span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">BAIXO</span></td>
                  <td className="py-3 px-4 text-gray-700">Estimativas conservadoras (50% ramp-up Ano 1) + monitoramento contínuo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Premissas do Modelo */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Premissas do Modelo Financeiro</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Premissas Operacionais</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Capacidade Ano 1:</strong> 50% (ramp-up conservador)</li>
                <li><strong>Capacidade Ano 2+:</strong> 100% (operação plena)</li>
                <li><strong>Vida útil das máquinas:</strong> 10 anos (análise 5 anos)</li>
                <li><strong>Depreciação:</strong> Linear em 10 anos</li>
                <li><strong>Manutenção anual:</strong> ~5% do valor investido</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Premissas Financeiras</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Taxa de desconto (WACC):</strong> 10% a.a.</li>
                <li><strong>Alíquota de IR:</strong> 34%</li>
                <li><strong>Inflação:</strong> Não considerada (valores reais)</li>
                <li><strong>Crescimento de benefícios:</strong> 2-3% a.a. após Ano 2</li>
                <li><strong>Horizonte de análise:</strong> 5 anos (com potencial de extensão)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="mt-6 pt-6 border-t border-brand-200">
          <h3 className="font-semibold text-gray-900 mb-4">Próximos Passos e Recomendações</h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">1. Aprovação Executiva</h4>
              <p className="text-sm text-blue-800">Submeter proposta para análise e aprovação do conselho de administração e diretoria financeira</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">2. RFP e Seleção de Fornecedor</h4>
              <p className="text-sm text-blue-800">Emitir Request for Proposal (RFP) para fornecedores de máquinas de visão (Cognex, SICK, Keyence) e integração ERP</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">3. Planejamento Detalhado</h4>
              <p className="text-sm text-blue-800">Desenvolver plano de implementação com cronograma, orçamento detalhado e estrutura de governança</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">4. Comunicação Interna</h4>
              <p className="text-sm text-blue-800">Engajar stakeholders (produção, qualidade, TI, RH) com programa de comunicação e treinamento</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">5. Implementação e Monitoramento</h4>
              <p className="text-sm text-blue-800">Executar em fases com KPIs de acompanhamento (custo, prazo, benefícios) e ajustes conforme necessário</p>
            </div>
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
