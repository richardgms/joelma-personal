---
id: plan-002
title: Remodelar Seção de CTA (Call to Action)
createdAt: 2024-07-26
author: Richard
status: draft
---

## 🧩 Scope

O objetivo deste plano é redesenhar e reimplementar o componente `CTASection.tsx` para torná-lo mais atraente, moderno e coeso com a identidade visual do restante do site (tema escuro, gradientes e a cor primária ciano). A nova seção deve ser visualmente impactante e otimizada para conversão.

## ✅ Functional Requirements

-   O título principal deve ser claro e direto, incentivando a ação.
-   Um subtítulo deve complementar o título, reforçando o senso de urgência ou o principal benefício.
-   O botão principal de "Começar Agora" deve ser proeminente e utilizar a URL de contato do WhatsApp configurada no projeto.
-   A seção deve destacar 3 benefícios ou diferenciais chave, cada um acompanhado por um ícone visualmente relevante.

## ⚙️ Non-Functional Requirements

-   **Visual Design (UI):** O design deve seguir a estética minimalista e moderna do site [[memory:3045761]], utilizando o fundo escuro, gradientes sutis e a cor primária ciano para pontos de destaque. A tipografia e os espaçamentos devem ser consistentes com as outras seções.
-   **User Experience (UX):** A seção deve ser intuitiva, com uma hierarquia visual clara que guia o usuário diretamente para a ação principal (clicar no botão).
-   **Responsividade:** O layout deve ser totalmente adaptável e funcional em todos os tamanhos de tela (mobile, tablet e desktop).
-   **Performance:** Os novos elementos não devem impactar negativamente o tempo de carregamento da página. As imagens e ícones devem ser otimizados.

## 📚 Guidelines & Packages

-   **Código:** Seguir as diretrizes de código e estrutura de componentes já estabelecidas no projeto.
-   **Estilo:** Utilizar Tailwind CSS para toda a estilização.
-   **Ícones:** Utilizar a biblioteca `lucide-react` para os ícones, garantindo consistência visual.

## 🔐 Threat Model (Stub)

-   Nenhum risco de segurança identificado, pois a tarefa consiste em alterações de UI em um componente de front-end estático.

## 🔢 Execution Plan

1.  **Análise e Backup:** Ler o código atual de `CTASection.tsx` para entender a estrutura e fazer um backup mental do conteúdo.
2.  **Layout e Fundo:** Alterar o container principal da seção. Substituir o fundo preto sólido por um gradiente radial sutil (`radial-gradient(ellipse at center, rgba(0, 240, 255, 0.1), transparent 70%)`) para criar um ponto de foco central sem sobrecarregar o design.
3.  **Tipografia:** Ajustar os estilos do `<h2>` e do parágrafo. Aumentar o peso e o tamanho da fonte do título e aplicar a cor primária (ciano) em uma palavra-chave para dar destaque (ex: "TRANSFORMAÇÃO").
4.  **Seleção de Ícones:** Escolher ícones da `lucide-react` que representem os benefícios:
    -   **Contato Direto:** `Smartphone` ou `MessageCircle`
    -   **Resultado Rápido:** `Zap` (raio) ou `TrendingUp`
    -   **Resultado Real:** `ShieldCheck` ou `Trophy`
5.  **Refatoração dos Benefícios:** Redesenhar a lista de benefícios. Em vez de texto simples, criar um layout em `grid` (ou `flex` para mobile) onde cada benefício é um pequeno "card" com fundo `bg-black/30 backdrop-blur-sm`, contendo o ícone e o texto.
6.  **Botão de Ação:** Garantir que o estilo do botão "Começar Agora" seja idêntico ao usado na `HeroSection` para manter a consistência visual e de interação.
7.  **Implementação e Estilização:** Aplicar todas as alterações no arquivo `CTASection.tsx` usando Tailwind CSS, garantindo que as classes de responsividade (`sm:`, `md:`, `lg:`) sejam usadas corretamente.
8.  **Revisão Final:** Revisar a seção implementada em diferentes resoluções para garantir que o layout esteja perfeito e que todos os requisitos foram atendidos.
