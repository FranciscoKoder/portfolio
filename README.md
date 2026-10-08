# Portfólio — Vitor Francisco

Portfólio pessoal: desenvolvedor full stack focado em sistemas embarcados e APIs REST.
**Do firmware à interface.**

**No ar:** https://franciscokoder.github.io/portfolio/

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

## CI/CD e segurança

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) roda em todo push e PR:

1. `npm ci`: instala exatamente as versões do `package-lock.json`
2. `npm audit`: barra o deploy se uma dependência de produção tiver vulnerabilidade alta ou crítica
3. `npm run lint` e `npm run build`
4. Só em push na `main`: publica o `dist/` no GitHub Pages

Se qualquer etapa falhar, nada é publicado. Outras proteções:

- **Content Security Policy** gerada no build (`vite.config.js`): o navegador só executa scripts do
  próprio site.
- **Permissões mínimas** no workflow: só o job de deploy pode escrever no Pages, e o checkout não
  guarda a credencial.
- **Dependabot** ([`.github/dependabot.yml`](.github/dependabot.yml)): PRs semanais com
  atualizações de dependências e de actions, validadas pelo CI.
- Site 100% estático, servido pela CDN do GitHub: sem servidor, banco ou formulário para atacar.
