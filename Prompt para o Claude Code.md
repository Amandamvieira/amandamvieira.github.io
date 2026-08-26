# Prompt para o Claude Code

Copie tudo abaixo da linha e cole no Claude Code. Ele tem contexto suficiente pra
reconstruir a identidade inteira, as ilustrações e a animação do foguete.

---

Crie um site de portfólio de uma página com identidade visual própria: tema de
universo, estilo "fofo/adesivo", tudo ilustrado com SVG feito à mão (sem libs de
ícone, sem imagens externas). Stack: HTML + CSS + JS puro, um arquivo só, sem
build. Idioma: pt-BR.

## Sistema visual

**Cores** (use exatamente estas):

| token | hex | uso |
| --- | --- | --- |
| noite | `#100E2E` | fundo da página |
| índigo | `#241F52` | superfície de cards no escuro |
| creme | `#FDF3E3` | texto no escuro / fundo de blocos claros |
| tinta | `#191740` | **contorno de tudo** e texto no claro |
| coral | `#FF6B5A` | ação / botão primário |
| chama | `#FFC24B` | destaque, foguinho |
| nebulosa | `#8A93F5` | apoio, rótulos |
| nuvem | `#FF9EC4` | detalhe |
| órbita | `#7DE3C6` | detalhe, status "disponível" |

**Tipografia** (Google Fonts): `Quicksand` 600/700 para títulos (tracking −2%),
`DM Sans` 400/500 para texto corrido, `Space Mono` 400 para rótulos em
CAIXA ALTA com `letter-spacing: .14em`.

**Regras do estilo de ilustração** — isso é o que faz parecer "fofo":

1. Contorno sempre `tinta`: 7px nas ilustrações, 3px na interface. Nunca contorno colorido.
2. Cores chapadas, zero degradê (exceto um brilho radial suave de fundo).
3. Tudo nasce de círculo e cápsula: `stroke-linejoin: round`, cantos generosos.
4. Carinha = dois pontos + um arco de sorriso + duas elipses de blush em coral 80%.
5. Duas cores por peça: um acento chapado + creme; a terceira cor só em detalhe pequeno.
6. Interface no estilo adesivo: borda 3px tinta + sombra dura `box-shadow: 4px 5px 0 #191740`,
   e no hover o elemento "afunda" (`translate(3px,4px)` + sombra 1px).

## Conteúdo (nesta ordem)

0. **Hero** — kicker em mono, título grande em Quicksand ("Um portfólio em órbita"),
   parágrafo curto, dois chips arredondados. À direita, um "pad de decolagem":
   círculo de 300px com brilho radial nebulosa 38% + anel `2px dashed` creme 18%.
   Fundo com ~38 estrelinhas geradas em JS (posição pseudoaleatória determinística,
   tamanho 1.5–4.5px, `@keyframes` de twinkle com duration e delay aleatórios).
1. **Paleta** — grid de swatches com nome, hex e uso.
2. **Tipografia** — três specimens (display, texto, rótulo).
3. **Ilustrações** — grid de tiles de 210px de altura, cada um com fundo de cor
   diferente e legenda em mono embaixo: planeta com anel, lua crescente, estrelas
   (3 tamanhos), cometa, nave, capacete, órbita, nebulosa, constelação, nuvenzinha
   com carinha, selo/relógio, terreno de rodapé.
4. **O foguete no scroll** — três cards explicando os estados (na estação, em voo, última estação).
5. **Elementos** — bloco creme com botões (primário, secundário, tracejado), badge
   com bolinha pulsando, adesivo rotacionado, nav em pills, tags em mono, card de
   projeto, card de depoimento, campo de e-mail, balão de fala e uma faixa marquee.
6. **Padrões** — 4 tiles: céu estrelado (dois `radial-gradient` sobrepostos), grade
   pontilhada, listras diagonais, ondas de órbita (`repeating-radial-gradient`).
7. **Regras** — 4 cartõezinhos com as regras do sistema.

### Dicas de SVG que economizam tempo

- **Foguete**: viewBox `0 0 200 400`. Corpo = um path em cápsula
  (`M100 16c30 34 40 92 40 140v78c0 20-18 32-40 32s-40-12-40-32v-78c0-48 10-106 40-140z`),
  creme com contorno tinta. Bico coral e faixas periwinkle/rosa desenhadas dentro de
  um `<clipPath>` do próprio corpo. Aletas = dois paths espelhados. Escotilha =
  círculo r30 com a carinha dentro. Chama = dois teardrops (chama + coral) num `<g>`
  com `transform-origin` na base.
- **Lua crescente**: não tente fazer path de interseção. Use um `<circle>` sem fill
  com `stroke-width: 40`, `stroke-linecap: round`, `stroke-dasharray: 227 100`,
  `stroke-dashoffset: -50`; embaixo dele o mesmo círculo com `stroke-width: 54` na cor
  tinta — isso vira o contorno.
- **Anel do planeta**: desenhe a elipse inteira atrás do planeta, o planeta em cima,
  e depois só o **arco de baixo** (`A106 30 0 0 0`) por cima — dá a sensação de anel
  atravessando.

## A animação do foguete (a parte importante)

Um único foguete `position: fixed` viaja pela tela e **estaciona em cada seção**.

- Cada seção tem um "pad de pouso": `<div data-station="0N" data-station-label="paleta">`,
  um círculo de 66px `2px dashed` creme 22%, colocado no cabeçalho da seção e
  **alternando lado** (`order: -1` numa, `order: 2; margin-left: auto` na próxima) —
  é esse ziguezague que faz o foguete cruzar a tela. O hero é a estação `00`.
- Loop em `requestAnimationFrame` (não em evento de scroll):

```js
const pads  = [...root.querySelectorAll('[data-station]')];
const rects = pads.map(p => p.getBoundingClientRect());
const docks = rects.map(r => scrollY + r.top + r.height/2 - innerHeight*0.45);

let i = 0;                                    // estação atual
while (i < docks.length-1 && scrollY >= docks[i+1]) i++;
const j = Math.min(i+1, pads.length-1);
const t = clamp01((scrollY - docks[i]) / Math.max(1, docks[j] - docks[i]));

// fica parado 30% do trecho, voa em 62%, chega e espera de novo
const raw = t < 0.30 ? 0 : t > 0.92 ? 1 : (t - 0.30) / 0.62;
const e   = raw*raw*(3 - 2*raw);              // smoothstep

const A = rects[i], B = rects[j];
let x = lerp(centerX(A), centerX(B), e);
let y = lerp(centerY(A), centerY(B), e);

const bow = Math.sin(e * Math.PI);            // 0 → 1 → 0
const dir = centerX(B) >= centerX(A) ? 1 : -1;
x += bow * -dir * Math.min(190, innerWidth*0.16);   // arco pra fora
y -= bow * 70;                                       // levanta no meio
// variante "loop": const a = e*Math.PI*2;
//   x += Math.sin(a)*dir*110;  y -= (1-Math.cos(a))*78;

x = clamp(x, 74, innerWidth-74);
y = clamp(y, 94, innerHeight-94);

// suavização + inclinação derivada da velocidade real
const px = this.x, py = this.y;
this.x += (x - this.x) * 0.13;
this.y += (y - this.y) * 0.13;
const vx = this.x-px, vy = this.y-py, speed = Math.hypot(vx, vy);
let target = speed > 0.5 ? Math.atan2(vy, vx)*180/Math.PI + 90 : 0;
this.rot += (((target - this.rot + 540) % 360) - 180) * 0.14;   // caminho angular curto

// tamanho: 1.5× parado no hero, 0.6× do resto da viagem em diante
const hero = 1.5;
const want = i === 0 ? hero - (hero-0.6)*e : 0.6;
this.sc += (want - this.sc) * 0.1;

// respiro quando está parado
const bob = Math.sin(Date.now()/620) * (speed < 0.6 ? 5 : 0);

ship.style.transform =
  `translate(${this.x}px,${this.y+bob}px) translate(-50%,-50%) rotate(${this.rot}deg) scale(${this.sc})`;
```

- **Foguinho**: o `<g>` da chama tem `animation: flick .42s ease-in-out infinite alternate`
  (tremidinha) e o JS escala esse grupo por cima:
  `idle = (i === 0 ? 0.85 - 0.6*e : 0.24)`, `boost = min(1.7, speed*0.34)`,
  `scaleY(idle + boost)`, opacidade `min(1, 0.35 + idle*0.6 + boost)`.
  Ou seja: aceso e vivo parado no hero, comprido quando voa, baixinho quando estaciona.
- **Rótulo**: um segundo elemento `fixed` com o nome da estação, posicionado em
  `y + 150*escala`, sem rotação (senão gira junto), opacidade 0.35 durante o voo.
- **Pad ativo**: quando `e < 0.08` (ou `> 0.92`) o pad correspondente vira
  `border-color: coral; color: creme; transform: scale(1.12)` com `transition .35s`.
  Só escreva no DOM quando o índice ativo mudar.

### Três armadilhas que custam tempo

1. **Nada de `overflow-x: hidden` em nenhum ancestral do foguete.** Isso transforma o
   elemento em contêiner de scroll e o navegador passa a recortar o `position: fixed`
   — o foguete simplesmente desaparece depois do primeiro scroll.
2. Anime só por `transform`/`opacity` e marque `will-change: transform`. Nunca
   `top`/`left` — trava em telas grandes.
3. Respeite `@media (prefers-reduced-motion: reduce)`: nesse caso não anime a
   trajetória, deixe o foguete quieto no hero.
