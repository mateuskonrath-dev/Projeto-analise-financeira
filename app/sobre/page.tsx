import MainLayout from '@/components/layout/MainLayout'
import CounterNumber from '@/components/animations/CounterNumber'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { Users, Globe, Briefcase, TrendingUp } from 'lucide-react'
import { formatarMoedaGrande } from '@/utils/calculations'

export default function SobrePage() {
  return (
    <MainLayout title="Sobre a Grendene">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 text-white rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Grendene S.A.</h2>
          <p className="text-xl opacity-90">
            Líder em inovação e design de calçados casual para o mercado global
          </p>
        </div>

        {/* Números Principais - Estrutura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <TrendingUp className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">1971</h3>
            <p className="text-gray-600 text-sm mt-2">Ano de Fundação</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Globe className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600 text-sm mt-2">Países de Atuação</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Users className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">~18k</h3>
            <p className="text-gray-600 text-sm mt-2">Funcionários (2024)</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Briefcase className="text-brand-600 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">11</h3>
            <p className="text-gray-600 text-sm mt-2">Fábricas de Produção</p>
          </div>
        </div>

        {/* Números Principais - Financeiro 2024 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm p-6 text-center border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900">R$ 2,63B</h3>
            <p className="text-blue-700 text-sm mt-2 font-semibold">Receita Líquida 2024</p>
            <p className="text-xs text-blue-600 mt-1">↑ 1,9% vs 2023</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm p-6 text-center border border-green-200">
            <h3 className="text-2xl font-bold text-green-900">R$ 0,80B</h3>
            <p className="text-green-700 text-sm mt-2 font-semibold">Lucro Líquido 2024</p>
            <p className="text-xs text-green-600 mt-1">30,3% de margem líquida</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm p-6 text-center border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-900">R$ 3,15B</h3>
            <p className="text-purple-700 text-sm mt-2 font-semibold">Patrimônio Líquido</p>
            <p className="text-xs text-purple-600 mt-1">ROE: 25,3%</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl shadow-sm p-6 text-center border border-cyan-200">
            <h3 className="text-2xl font-bold text-cyan-900">R$ 4,18B</h3>
            <p className="text-cyan-700 text-sm mt-2 font-semibold">Valor de Mercado</p>
            <p className="text-xs text-cyan-600 mt-1">Capitalização B3</p>
          </div>
        </div>

        {/* História */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">História</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Fundada em <strong>1971</strong> em Farroupilha, Rio Grande do Sul, a Grendene iniciou suas operações como uma pequena fábrica de calçados de plástico injetado. Com inovação contínua e design criativo, a empresa cresceu rapidamente e se consolidou como uma das maiores do setor calçadista brasileiro.
            </p>
            <p>
              A abertura de capital ocorreu em <strong>2004</strong>, com listagem na B3 sob o ticker <strong>GRND3</strong>. Desde então, a Grendene tem se mantido entre as maiores exportadoras de calçados do país, com presença em mais de 100 países.
            </p>
            <p>
              A empresa é controlada pela <strong>família Grendene</strong>, garantindo estabilidade e visão de longo prazo. Sua estrutura operacional se estende por três estados brasileiros principais: Ceará, Rio Grande do Sul e São Paulo.
            </p>
          </div>
        </div>

        {/* Marcas */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Principais Marcas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-pink-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">👯</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Melissa</h4>
              <p className="text-sm text-gray-600">
                Marca inovadora de calçados de plástico feminino com design criativo e arrojado
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">👟</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Rider</h4>
              <p className="text-sm text-gray-600">
                Calçados casuais masculinos e femininos com foco em conforto e durabilidade
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-yellow-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🩴</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Ipanema</h4>
              <p className="text-sm text-gray-600">
                Chinelos e sandálias brasileiras clássicas, ícone de estilo e praticidade
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">👠</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Grendha</h4>
              <p className="text-sm text-gray-600">
                Marca de moda premium com calçados sofisticados para segmento fashion
              </p>
            </div>
          </div>
        </div>

        {/* Estrutura Operacional */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Estrutura Operacional</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Localização das Fábricas</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 font-bold">🏭</span>
                  <div>
                    <p className="font-semibold">Ceará (9 unidades)</p>
                    <p className="text-sm text-gray-600">Sobral, Fortaleza, Crato</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 font-bold">🏭</span>
                  <div>
                    <p className="font-semibold">Rio Grande do Sul (1 unidade)</p>
                    <p className="text-sm text-gray-600">Farroupilha</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 font-bold">🏭</span>
                  <div>
                    <p className="font-semibold">Centros de Distribuição</p>
                    <p className="text-sm text-gray-600">Sobral, Fortaleza, São Paulo</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Capacidades</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-brand-600 font-bold">✓</span>
                  <p>Capacidade anual: 250 milhões de pares</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-600 font-bold">✓</span>
                  <p>Pessoal: aproximadamente 18.000 colaboradores</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-600 font-bold">✓</span>
                  <p>Tecnologia: Injeção de termoplásticos (PVC, EVA, TPU)</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-600 font-bold">✓</span>
                  <p>Sazonalidade: Maior demanda set-dez (festas, férias)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mercados */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Presença no Mercado</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Mercado Interno (Brasil)</h4>
              <p className="text-gray-700 mb-2">
                Principal mercado com aproximadamente <strong>71% da receita</strong>. Distribuição através de:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 ml-4">
                <li>• Redes varejistas nacionais</li>
                <li>• Distribuidoras regionais</li>
                <li>• Lojas-conceito próprias</li>
                <li>• E-commerce e marketplaces</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Exportações (~29% da receita)</h4>
              <p className="text-gray-700 mb-2">
                Presença em mais de <strong>100 países</strong>, com foco em:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 ml-4">
                <li>• América Latina (prioritária)</li>
                <li>• Europa (crescimento)</li>
                <li>• América do Norte (via parcerias)</li>
                <li>• Outras regiões</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Saúde Financeira */}
        <ScrollReveal direction="up" duration={0.8}>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💪 Saúde Financeira (2024)</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal direction="up" duration={0.6} delay={0.1}>
                <div className="border-l-4 border-cyan-500 pl-4 hover:bg-cyan-50 transition-colors p-4 rounded-r-lg">
                  <p className="text-gray-600 font-semibold">Liquidez Corrente</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    <CounterNumber value={2.05} duration={1.5} decimals={2} suffix="x" />
                  </p>
                  <p className="text-xs text-cyan-600 mt-2">✅ Boa (acima de 1,5x)</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" duration={0.6} delay={0.2}>
                <div className="border-l-4 border-orange-500 pl-4 hover:bg-orange-50 transition-colors p-4 rounded-r-lg">
                  <p className="text-gray-600 font-semibold">ROE (Retorno Patrimônio)</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    <CounterNumber value={20.44} duration={1.5} decimals={2} suffix="%" />
                  </p>
                  <p className="text-xs text-orange-600 mt-2">✅ Muito bom (ótimo retorno)</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" duration={0.6} delay={0.3}>
                <div className="border-l-4 border-emerald-500 pl-4 hover:bg-emerald-50 transition-colors p-4 rounded-r-lg">
                  <p className="text-gray-600 font-semibold">Alavancagem</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    <CounterNumber value={10.1} duration={1.5} decimals={1} suffix="%" />
                  </p>
                  <p className="text-xs text-emerald-600 mt-2">✅ Muito baixa (pouca dívida)</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" duration={0.6} delay={0.4}>
                <div className="border-l-4 border-rose-500 pl-4 hover:bg-rose-50 transition-colors p-4 rounded-r-lg">
                  <p className="text-gray-600 font-semibold">Dividend Yield</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    <CounterNumber value={35.93} duration={1.5} decimals={2} suffix="%" />
                  </p>
                  <p className="text-xs text-rose-600 mt-2">✅ Ótima para investidores</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" duration={0.6} delay={0.5}>
                <div className="border-l-4 border-pink-500 pl-4 hover:bg-pink-50 transition-colors p-4 rounded-r-lg">
                  <p className="text-gray-600 font-semibold">Margem Líquida</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    <CounterNumber value={30.3} duration={1.5} decimals={2} suffix="%" />
                  </p>
                  <p className="text-xs text-pink-600 mt-2">✅ Excelente eficiência</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" duration={0.6} delay={0.6}>
                <div className="border-l-4 border-amber-500 pl-4 hover:bg-amber-50 transition-colors p-4 rounded-r-lg">
                  <p className="text-gray-600 font-semibold">ROA (Retorno Ativos)</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    <CounterNumber value={14.32} duration={1.5} decimals={2} suffix="%" />
                  </p>
                  <p className="text-xs text-amber-600 mt-2">✅ Muito bom (uso eficiente)</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-900">
                <strong>Conclusão:</strong> A Grendene apresenta saúde financeira excelente com baixa alavancagem,
                alta liquidez, ótimos retornos e forte capacidade de gerar lucro. Empresa em posição muito sólida
                para investimentos e operações.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="bg-brand-50 rounded-xl border border-brand-200 p-8 text-center">
          <p className="text-gray-700 mb-4">
            Listada na B3 sob o ticker <strong>GRND3</strong> — Empresa de Capital Aberto
          </p>
          <p className="text-sm text-gray-600">
            Projeto acadêmico - Laboratório de Controladoria - Unisinos (2026)
            <br />
            <strong>Dados reais de 2024</strong> — Status Invest, Investidor10, CVM, RI Grendene
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
