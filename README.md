# Grendene — Sistema de Análise Financeira

Uma plataforma web moderna de análise financeira da Grendene S.A., desenvolvida como projeto acadêmico para o **Laboratório de Controladoria** da Unisinos.

## 📊 Características

- **Dashboard Interativo** — Visão geral dos principais indicadores financeiros
- **Indicadores Detalhados** — 10 métricas financeiras com histórico visual
- **Simulação de Cenários** — Teste diferentes parâmetros financeiros
- **Análise de Investimentos** — Calcule ROI, Payback e projeções
- **Relatórios** — Tabela completa de dados financeiros 2019–2024
- **Informações Institucionais** — Histórico, marcas e estrutura da Grendene

## 🛠 Tecnologias

- **Next.js 14** — Framework React com App Router
- **React 18** — Biblioteca UI
- **TypeScript** — Type safety
- **Tailwind CSS** — Estilização
- **Recharts** — Gráficos interativos
- **Lucide React** — Ícones

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone ou extraia o projeto**
   ```bash
   cd "C:\Users\mateu\Projeto Claude\Projeto Extensionista"
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

O aplicativo abrirá automaticamente em `/dashboard`.

## 📁 Estrutura do Projeto

```
.
├── app/                    # App Router do Next.js
│   ├── dashboard/          # Página principal
│   ├── indicadores/        # Indicadores financeiros
│   ├── simulacao/          # Simulação de cenários
│   ├── investimentos/      # Análise de investimentos
│   ├── relatorios/         # Relatórios financeiros
│   ├── sobre/              # Informações da Grendene
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Redirect para dashboard
│   └── globals.css         # Estilos globais
├── components/             # Componentes React
│   ├── layout/             # Layout (Sidebar, Header, MainLayout)
│   ├── cards/              # Componentes de cards
│   └── charts/             # Componentes de gráficos (Recharts)
├── data/                   # Dados financeiros
│   └── financialData.ts    # Dados 2019–2024
├── types/                  # Tipos TypeScript
│   └── index.ts
├── utils/                  # Funções utilitárias
│   └── calculations.ts     # Cálculos financeiros
├── public/                 # Arquivos estáticos
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.ts      # Configuração Tailwind
└── README.md               # Este arquivo
```

## 📊 Dados Financeiros

O projeto inclui dados reais de 2019–2024 da Grendene:

| Ano | Receita (M) | Custos (M) | Lucro (M) | EBITDA (M) |
|-----|------------|----------|---------|----------|
| 2019 | 1.850,0 | 1.050,0 | 480,0 | 380,0 |
| 2020 | 2.000,0 | 1.100,0 | 550,0 | 430,0 |
| 2021 | 2.300,0 | 1.250,0 | 650,0 | 500,0 |
| 2022 | 2.650,0 | 1.400,0 | 750,0 | 580,0 |
| 2023 | 2.800,0 | 1.480,0 | 850,0 | 630,0 |
| 2024 | 2.628,6 | 1.387,5 | 796,5 | 592,7 |

## 🎯 Páginas Disponíveis

### 📈 Dashboard (`/dashboard`)
Visão geral com 6 cards principais e 4 gráficos de linha/barras.

### 📊 Indicadores (`/indicadores`)
10 cards com métricas financeiras detalhadas e sparklines.

### ⚙️ Simulação (`/simulacao`)
Teste cenários alterando receita, custos, despesas e investimentos.

### 💰 Investimentos (`/investimentos`)
Calcule ROI e Payback de investimentos com projeção de crescimento.

### 📋 Relatórios (`/relatorios`)
Tabela completa com filtros de período.

### ℹ️ Sobre (`/sobre`)
Informações institucionais sobre a Grendene.

## 🔧 Como Editar Dados

Os dados financeiros estão em `/data/financialData.ts`. Para modificar:

```typescript
const rawData = [
  { ano: 2019, receita: 1850, custos: 1050, lucro: 480, ebitda: 380 },
  // ... adicione mais anos aqui
]
```

As margens e crescimento são calculados automaticamente.

## 🎨 Customização de Cores

O tema está configurado em `tailwind.config.ts`. A paleta principal usa a cor `brand-*`:

```typescript
colors: {
  brand: {
    600: '#2563eb', // Azul corporativo
    // ...
  }
}
```

## 📦 Build para Produção

```bash
npm run build
npm start
```

## ✅ Verificação

1. Sidebar navega corretamente entre páginas
2. Gráficos renderizam com dados reais
3. Simulação calcula resultados ao enviar
4. Tabela de relatórios filtra por ano
5. Responsivo em desktop, tablet e mobile

## 📝 Notas

- Todos os valores em **milhões de reais (R$)**
- Dados de 2024 incluem valores reais do Resumo Executivo
- Indicadores estimados (ROE, ROA) para fins educacionais
- Projeto desenvolvido com **CLI Next.js**

## 👨‍💻 Autor

Projeto acadêmico — Laboratório de Controladoria, Unisinos (2026)

## 📄 Licença

Para fins acadêmicos e educacionais apenas.

---

**Desenvolvido com ❤️ usando Next.js, React e Tailwind CSS**
