# Michael Martins - Personal Trainer (Next.js & Tailwind CSS)

Este é o repositório do site profissional de Michael Martins, um personal trainer especialista em transformações corporais. O projeto foi desenvolvido com Next.js, TypeScript e Tailwind CSS, com foco em uma experiência de usuário fluida, design moderno e alta performance, especialmente em dispositivos móveis.

## ✨ Visão Geral do Projeto

O site serve como um portfólio digital e uma ferramenta de captação de clientes, apresentando os serviços, resultados e a metodologia de trabalho de Michael. A identidade visual foi atualizada de um tema "agressivo" para uma abordagem mais profissional e motivacional, com um esquema de cores ciano e roxo.

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) (com App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Hospedagem**: Otimizado para [Vercel](https://vercel.com/)

## 🎨 Identidade Visual e Design

A estética do site foi cuidadosamente planejada para ser moderna, limpa e inspiradora.

- **Paleta de Cores**:
  - `primary-400`: **Ciano** (`#59e8e6`) - Usado para destaques e elementos de ação.
  - `primary-700`: **Roxo** (`#5d02b9`) - Usado para profundidade, botões e hover-states.
  - **Fundo**: Gradientes sutis de cinza escuro e preto para criar uma atmosfera premium.
- **Tipografia**: A fonte principal é a "Inter", garantindo excelente legibilidade em todas as telas.
- **Logo**: O projeto utiliza um monograma (`monogram.png`) na navegação e o logo completo (`logocompleta.png`) no rodapé para reforçar a marca.

## 📱 Foco em Mobile UX

Uma grande parte do desenvolvimento foi dedicada a criar uma experiência mobile impecável, implementando as seguintes melhorias:

- **Layouts Responsivos**: Todas as seções foram adaptadas para se ajustarem perfeitamente a telas pequenas, com layouts em coluna única e grids que se adaptam.
- **Carrossel Nativo**: A seção de transformações utiliza um carrossel horizontal com `scroll-snap` em telas médias (removido em favor de um layout vertical em telas muito pequenas para melhor legibilidade).
- **Tipografia Fluida**: Uso de `clamp()` para que os textos se redimensionem suavemente com o tamanho da tela.
- **Áreas de Toque (Tap Targets)**: Todos os elementos clicáveis (botões, links) possuem uma área mínima de `44x44px` para facilitar o uso em telas de toque.
- **Otimização de Performance**:
  - Imagens com `loading="lazy"` e `decoding="async"`.
  - Atributo `sizes` para otimizar o LCP (Largest Contentful Paint).
  - Scroll horizontal desabilitado globalmente.
- **Safe Area (iOS)**: O layout respeita as áreas de segurança de dispositivos iOS para evitar que a UI fique sob o "notch" ou a barra de gestos.

## 📁 Estrutura do Projeto

```
michael-personal/
├── app/
│   ├── globals.css      # Estilos globais e otimizações de CSS
│   ├── layout.tsx       # Layout principal com metadados de SEO
│   └── page.tsx         # Estrutura da página principal
├── components/
│   ├── HeroSection.tsx
│   ├── PlansSection.tsx
│   ├── ResultsSection.tsx
│   ├── AboutSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── WhatsAppButton.tsx
├── public/
│   ├── imagens/         # Fotos de transformações e do Michael
│   └── logo/            # Arquivos de logo (monograma e completo)
├── tailwind.config.js   # Configuração do tema (cores, fontes)
└── package.json
```

## 🔧 Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/michael-personal.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd michael-personal
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
O site estará disponível em `http://localhost:3000`.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run start`: Inicia um servidor de produção.
- `npm run lint`: Executa o linter para verificar a qualidade do código.

## 📞 Integração com WhatsApp

O principal canal de contato é o WhatsApp. Todos os botões de CTA (Call-to-Action) direcionam o usuário para o número **+55 83 98123-8895** com mensagens pré-definidas para facilitar o início da conversa.

## 🎯 Otimização para SEO

O site foi construído com as melhores práticas de SEO em mente:

- **Metadados Dinâmicos**: Títulos, descrições e palavras-chave otimizadas no arquivo `layout.tsx`.
- **Open Graph e Twitter Cards**: Tags configuradas para garantir uma boa aparência ao compartilhar o link em redes sociais.
- **Performance**: O Next.js garante uma renderização rápida, e as imagens são otimizadas para não prejudicar o tempo de carregamento.
- **Acessibilidade**: Uso de tags semânticas e atributos `aria-label` para garantir que o site seja acessível a todos.

## 🔥 Funcionalidades Fire

### Navegação Intensa
- Logo Fire animado com efeito flicker
- Menu desktop/mobile responsivo
- Botão CTA "QUEIMAR AGORA" com glow
- Backdrop blur com bordas fire

### Hero Section Explosiva
- Partículas fire animadas
- Título gigante com gradiente
- Métricas impressionantes (500+ transformados)
- CTAs para WhatsApp e resultados
- Cards flutuantes com badges

### Planos EXTREMOS
- **Online Fire**: R$80 mensal, R$210 trimestral, R$660 anual
- **Presencial Beast**: R$300 (3x), R$400 (4x), R$500 (5x)
- Cards com hover effects e glow
- Links diretos para WhatsApp

### Resultados Explosivos
- 3 cases de transformação
- Cards interativos com badges
- Efeitos hover fire
- Avaliações 5 estrelas

### Sobre Michael Fire
- Apresentação como Fire Master
- Especialidades: Biomecânica Fire + Avaliação Beast
- Cards de competências animados
- Foto com elementos flutuantes

### CTA Final Intenso
- Background fire gradient
- Título gigante "PEGAR FOGO?"
- Botão premium com animações
- Ícones de benefícios

### Footer Completo
- Logo fire animado
- 4 colunas organizadas
- Contatos e horários
- Links de serviços

### WhatsApp Fire
- Botão fixo bottom-right
- Animação bounce + rings
- Link direto com mensagem
- Ícone SVG WhatsApp

## 📱 WhatsApp Integration

Todos os botões levam para:
**+55 83 98123-8895**

### Mensagens Personalizadas:
- Navegação: "Olá Michael! Vim pelo site e quero saber sobre os planos."
- Hero: "Olá Michael! Quero QUEIMAR gordura agora!"
- Plano Online: "Olá Michael! Quero o plano ONLINE FIRE!"
- Plano Presencial: "Olá Michael! Quero o plano PRESENCIAL BEAST!"
- Resultados: "Olá Michael! Quero ver mais transformações FIRE!"
- Metodologia: "Olá Michael! Quero conhecer a metodologia FIRE!"
- CTA Final: "Olá Michael! Vim pelo site e quero PEGAR FOGO!"

## 🎯 SEO Otimizado

### Meta Tags
- Título: "Michael Fire Martins - Personal Trainer | Transformação EXTREMA"
- Descrição otimizada para conversão
- Keywords relevantes para personal trainer PB
- Open Graph para redes sociais
- Schema.org structured data

### Performance
- Next.js 14 otimizado
- Imagens otimizadas
- CSS Tailwind minificado
- Fonts preloaded
- Compressão gzip

## 🎨 Customização Fire

### Cores no tailwind.config.js
```javascript
colors: {
  primary: { 500: '#DC2626', 600: '#B91C1C' },
  secondary: { 500: '#EA580C', 600: '#C2410C' },
  accent: { 500: '#F59E0B', 600: '#D97706' }
}
```

### Animações Fire
```css
.fire-flicker      # Tremulação fire
.fire-glow         # Brilho pulsante
.fire-particle     # Partículas flutuantes
.neon-fire         # Texto neon
```

### Classes Utilitárias
```css
.fire-gradient     # Gradiente fire
.glow-effect       # Brilho básico
.glow-intense      # Brilho intenso
.btn-fire          # Botão fire padrão
.card-fire         # Card fire padrão
```