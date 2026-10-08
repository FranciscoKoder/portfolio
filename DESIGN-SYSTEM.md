# Design System — "Datasheet"

Sistema visual do portfólio, inspirado em folhas de especificação técnica (datasheets):
papel e tinta, linhas finas, tipografia mono para dados e **uma única cor de sinal**.

A versão viva, renderizada com os tokens e componentes reais, fica em **`/#/design-system`**
(link no rodapé do site).

---

## Princípios

1. **Sinal, não decoração.** A cor de destaque (`--color-accent`) marca estado e atenção:
   LED de status, índice de seção, hover. Nunca preenche áreas grandes.
2. **Mono para dados, sans para prosa.** Geist Mono em números, rótulos, datas, tecnologias e
   código. Geist em todo o resto.
3. **Linhas, não sombras.** A hierarquia vem de bordas de 1px e de espaço. Sem sombras e sem
   gradientes.
4. **Respiro generoso.** Grade de 4px, seções amplas e parágrafos de no máximo `62ch`.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `src/styles/tokens.css` | **Todos** os tokens: cor (claro/escuro), tipo, espaço, raio, movimento |
| `src/styles/base.css` | Reset, tipografia global, `.container`, `.section`, `.reveal` |
| `src/components/ui/` | Componentes base + `ui.css` |
| `src/pages/DesignSystem.jsx` | Página viva do design system |

**Regra:** componentes usam só tokens semânticos (`var(--color-text)`), nunca um hex ou px solto.
Para mudar a identidade visual, edite `tokens.css` e o site inteiro acompanha.

---

## Cor

Nomes semânticos. O tema escuro troca os valores e mantém os nomes.

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `--color-bg` | `#f7f7f5` | `#0d0e10` | Fundo da página |
| `--color-surface` | `#ffffff` | `#141518` | Cartões e painéis |
| `--color-surface-2` | `#efeeeb` | `#1b1d20` | Tags, blocos de código |
| `--color-border` | `#e3e2de` | `#26282c` | Linhas finas, divisórias |
| `--color-border-strong` | `#cbc9c3` | `#3a3d42` | Contornos com ênfase |
| `--color-text` | `#111113` | `#ededea` | Títulos e corpo |
| `--color-text-muted` | `#4f4e4a` | `#a6a5a0` | Parágrafos de apoio |
| `--color-text-subtle` | `#6e6d68` | `#8c8b86` | Metadados e rótulos |
| `--color-accent` | `#0a7563` | `#3dd6b5` | Sinal: status, índices, hover |
| `--color-accent-hover` | `#075c4e` | `#6ee3c9` | Hover sobre o sinal |
| `--color-accent-soft` | sinal a 10% | sinal a 10% | Fundo de tag de destaque |

Todos os pares de texto passam no contraste WCAG AA (≥ 4.5:1) sobre `--color-bg`.

**Tema:** segue o sistema operacional por padrão. O botão no cabeçalho grava uma escolha
explícita (`localStorage`, chave `theme`) aplicada como `data-theme` no `<html>`. Um script
inline no `index.html` aplica essa escolha antes da primeira pintura, então o tema errado não
pisca na tela ao carregar.

## Tipografia

- `--font-sans`: **Geist Variable**
- `--font-mono`: **Geist Mono Variable**

As duas são servidas localmente via `@fontsource-variable` (sem depender de CDN).

| Token | Tamanho | Uso |
|---|---|---|
| `--text-display` | 40 → 80px (fluido) | Título do hero |
| `--text-2xl` | 32 → 52px (fluido) | Título de seção |
| `--text-xl` | 26 → 34px (fluido) | Título de projeto, métricas |
| `--text-lg` | 22px | Parágrafo de abertura |
| `--text-md` | 18px | Texto de apoio em destaque |
| `--text-base` | 16px | Texto corrido |
| `--text-sm` | 14px | Listas, descrições curtas |
| `--text-xs` | 12px | Tags, datas, rodapé |
| `--text-2xs` | 11px | Rótulos mono em caixa alta |

Entrelinha: `--leading-tight` (1.05, títulos), `--leading-snug` (1.25), `--leading-normal` (1.6, corpo).
Espaçamento de letras: `--tracking-tight` (títulos grandes), `--tracking-snug`, `--tracking-wide` (rótulos mono).

## Espaço, layout e forma

- **Espaço:** grade de 4px. O nome é o múltiplo: `--space-6` = 6 × 4 = 24px.
  Disponíveis: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32.
- `--space-section`: espaço vertical entre seções (80 → 128px, fluido).
- `--container-max`: 1120px. `--gutter`: 16 → 32px. `--measure`: 62ch.
- **Raio:** `--radius-sm` 4px (tags), `--radius-md` 8px (nós, monograma),
  `--radius-lg` 12px (cartões), `--radius-full` (botões, LEDs).

## Movimento

| Token | Valor | Uso |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas e hovers |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Movimento contínuo (sinal) |
| `--duration-fast` | 120ms | Cor e borda em hover |
| `--duration-base` | 200ms | Troca de tema, ícones |
| `--duration-slow` | 600ms | Revelação ao rolar |

Com "reduzir movimento" ativo no sistema, as durações viram zero e as animações contínuas param.

---

## Componentes

Todos em `src/components/ui`, exportados por `index.js`:

```jsx
import { Button, Tag, Label, StatusDot, Metric, Card, SectionHeader, SignalPath, ThemeToggle } from './components/ui'
```

| Componente | Props | Uso |
|---|---|---|
| `Button` | `variant` (`primary` · `secondary` · `ghost`), `size` (`md` · `sm`), `href`, `external`, `icon`, `iconPosition` | Ações. Com `href` vira `<a>`. O primário é tinta e só ganha a cor de sinal no hover. |
| `Tag` | `variant` (`default` · `accent` · `outline`) | Tecnologias e categorias. `accent` só para destacar um estado ("em estudo"). |
| `Label` | `as` | Rótulo mono em caixa alta: índices, metadados, eyebrows. |
| `StatusDot` | `status` (`online` · `busy` · `offline`), `pulse` | "LED" de status com legenda opcional. |
| `Metric` | `value`, `label` | Número de destaque. Use só números reais e medidos. |
| `Card` | `as`, `interactive` | Superfície com borda de 1px. `interactive` escurece a borda no hover. |
| `SectionHeader` | `index`, `title`, `description`, `id` | Cabeçalho de seção numerado, em duas colunas no desktop. |
| `SignalPath` | `nodes`, `label` | Assinatura visual: um sinal percorrendo ESP32 → API → Web. |
| `ThemeToggle` | — | Alterna claro/escuro. |

### Padrões de layout

- **`.section`**: seção com borda superior e `--space-section` de respiro.
- **`.offset`**: alinha o conteúdo à coluna do título do `SectionHeader` (desktop).
- **`.rows` / `.row`**: tabela em linhas (lateral mono + conteúdo), usada em Trajetória,
  Stack e Movimento. É o padrão "datasheet" para listas.
- **`.reveal`**: o elemento aparece suavemente ao entrar na tela. Para escalonar, use
  `style={{ '--reveal-delay': '80ms' }}`.

## Faça / não faça

- ✅ Use `--color-accent` em pontos pequenos: um LED, um índice, um hover.
- ❌ Não use o sinal como fundo de seção nem em blocos grandes de texto.
- ✅ Números, datas e nomes de tecnologia vão em mono.
- ❌ Não adicione sombras. Se algo precisa se destacar, use borda ou espaço.
- ✅ Crie variações de componente com props (`variant`), não com classes soltas.
- ❌ Não escreva cor ou tamanho fixo em componente. Se faltar um token, crie em `tokens.css`.
