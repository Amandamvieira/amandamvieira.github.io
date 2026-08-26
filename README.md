# Portifolio amanda 

## Overview
Portfolio visual de design completo com historico de projetos (Naches e Noticiato), case studies interativos e identidade baseada em ilustracao feita a mao. O design e tematico (feira de rua) com tipografia ludica (Baloo 2) e paleta quente.

## About the Design Files
Os arquivos HTML neste bundle sao prototipos de design em HTML puro mostrando aparencia e comportamento pretendidos. A tarefa e recriar estes designs no seu codebase (React, Next.js, Vue, ou outro framework) usando seus padroes e bibliotecas existentes. Nao e para copiar o HTML direto. Os componentes interativos (abas, carrosséis, animacoes) devem ser implementados com as ferramentas do seu stack.

## Fidelity
High-fidelity (hifi): Layouts pixel-perfect com cores finais, tipografia exata (Baloo 2 para titulos, DM Sans para corpo), espacamento preciso. Recrie usando os estilos do seu codebase mas mantendo as proporcoes e hierarquias.

## Screens / Views

### 1. Portfolio Feira (Landing)
Entrada do portfolio exibindo 5 projetos como caixas de feira. Grid layout com 2 cases ativos (Naches, Noticiato) e 3 placeholders.

**Components**:
- Hero: titulo grande + 2 chips de contato
- Cards de projeto: 340px largura, border-radius 26px, background #FFFBF0, sombra 0 3px 0 rgba(44,33,24,.13)
- Rodape: centralizado, copyright em 13.5px

**Interactions**:
- Cliques nas caixas navegam para cases ou placeholders
- Chave de idioma PT/EN no topo, persiste em localStorage

---

### 2. Case Naches
Detalhe do projeto Naches (app escolar com gamificacao).

**Key Sections**:
- Hero com badge caso e descricao
- Desafio e Abordagem em 4 cards
- MacBook com 2 screenshots intercamaveis (abas missoes/quizzes), rotacao auto a cada 4.6s
- 3 phones lado a lado: login QR, video app rodando, App Store
- Dark block Onde Chegou
- Fecho azul full-bleed com marca respirando

**Interactions**:
- MacBook: clique na aba ou no aparelho alterna, pausa ao hover
- Video: toque pausa/resume
- Idioma PT/EN persiste

---

### 3. Case Noticiato
Detalhe do projeto Noticiato (rede de jornalistas verificados).

**Key Sections**:
- Pesquisa: pilha de 3 paginas com rotacao leve, auto-ciclo 4.6s
- Desktop + Celular: abas intercamaveis, MacBook + iPhone lado a lado
- Planos em Desfile: faixa amarela, 4 cards em loop 38s
- Wireframe: auto-scroll 30s alternando sobe/desce
- Abordagem em 4 cards
- Porta do Jornalista com painel screenshot
- Fecho amarelo full-bleed

**Interactions**:
- Planos desfilam com hover pausa
- Abas desktop/mobile: clique muda foco
- Pilha pesquisa: clique folheia
- Wireframe: hover pausa
- Idioma PT/EN persiste

---

## Design Tokens

### Colors
- Background: #FBF3E0 (creme)
- Text: #2C2118 (marrom), rgba(44,33,24,.5-.78) (cinza)
- Accents: #E04B33 (coral), #7A4A8C (roxo), #4C8C3F (verde), #F2B32C (amarelo), #027BE8 (azul)
- Dark: #2C2118, #1B1512
- Light: #FFFBF0, #F4EBD9

### Typography
- Titles: Baloo 2 800, clamp(28px, 3.4vw, 52px), letter-spacing -0.03em
- Body: DM Sans 400-500, 16-18px, line-height 1.55-1.65
- Labels: Baloo 2 700, 14-16px

### Spacing
- Container: 28px padding
- Sections: 44-76px gap
- Cards: 26-30px padding
- Radius: 999px (pills), 26px (cards), 22px (images)

### Shadows
- Cards: 0 3px 0 rgba(44,33,24,.13)
- Emphasis: 0 5px 0 rgba(44,33,24,.2)
- MacBook: 0 22px 44px rgba(44,33,24,.28)

### Motion
- Duration: 0.6-0.7s, easing cubic-bezier(.22,1,.36,1)
- Auto-cycles: 4.6-7s linear ou ease-in-out

---

## Assets
- Portfolio Feira.dc.html
- Case Naches.dc.html
- Case Noticiato.dc.html
- assets/ (images e video)

---

## Responsive Behavior
Max-width 1080px, padding 28px, clamp() para scaling fluido, overflow-x clip para MacBooks.
