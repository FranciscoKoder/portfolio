# Portfólio — Vitor Francisco

Portfólio pessoal: desenvolvedor full stack focado em sistemas embarcados e APIs REST.
**Do firmware à interface.**

**Stack:** React 19 · Vite · CSS puro com design tokens · Geist / Geist Mono · lucide-react

## Rodar localmente

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera `dist/`), `npm run preview`, `npm run lint`.

## Onde editar o conteúdo

Os textos ficam separados dos componentes:

| Arquivo | O que tem |
|---|---|
| `src/data/profile.js` | Nome, links, textos do hero e do "Sobre", ficha técnica, experiência, formação e stack |
| `src/data/projects.js` | Projetos em destaque (a ordem do arquivo é a ordem na página) |

## Estrutura

```
src/
├── styles/          tokens.css (design tokens) e base.css (reset e utilitários)
├── theme/           tema claro/escuro (contexto + provider)
├── components/
│   ├── ui/          componentes do design system
│   ├── layout/      cabeçalho e rodapé
│   └── sections/    seções da home (Hero, Projetos, Sobre, Trajetória, Stack, Contato)
├── pages/           Home e DesignSystem (rota #/design-system)
├── hooks/           rota por hash, revelação ao rolar, estado de rolagem
└── data/            conteúdo editável
```

## Design system

Documentado em [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) e visível ao vivo em `/#/design-system`.
