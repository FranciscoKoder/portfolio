import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Button, Card, Label, Metric, SectionHeader, SignalPath, StatusDot, Tag } from '../components/ui'
import { useTheme } from '../theme/useTheme'
import './design-system.css'

const principles = [
  {
    title: 'Sinal, não decoração',
    text: 'A cor de destaque marca estado e atenção: LED, índice, hover. Nunca preenche áreas grandes.',
  },
  {
    title: 'Mono para dados, sans para prosa',
    text: 'Geist Mono em números, rótulos, datas e tecnologias. Geist em todo o resto.',
  },
  {
    title: 'Linhas, não sombras',
    text: 'A hierarquia vem de bordas de 1px e de espaço. Sem sombras e sem gradientes.',
  },
  {
    title: 'Respiro generoso',
    text: 'Grade de 4px, seções amplas e parágrafos de no máximo 62 caracteres por linha.',
  },
]

const colors = [
  { token: '--color-bg', name: 'Fundo', use: 'Papel da página' },
  { token: '--color-surface', name: 'Superfície', use: 'Cartões e painéis' },
  { token: '--color-surface-2', name: 'Superfície 2', use: 'Tags e blocos de código' },
  { token: '--color-border', name: 'Borda', use: 'Linhas finas e divisórias' },
  { token: '--color-border-strong', name: 'Borda forte', use: 'Contornos com ênfase' },
  { token: '--color-text', name: 'Texto', use: 'Títulos e corpo' },
  { token: '--color-text-muted', name: 'Texto secundário', use: 'Parágrafos de apoio' },
  { token: '--color-text-subtle', name: 'Texto sutil', use: 'Metadados e rótulos' },
  { token: '--color-accent', name: 'Sinal', use: 'Status, índices e hover' },
  { token: '--color-accent-hover', name: 'Sinal (hover)', use: 'Hover sobre o sinal' },
  { token: '--color-accent-soft', name: 'Sinal suave', use: 'Fundo de tag de destaque', note: 'sinal a 10%' },
]

const typeScale = [
  { token: '--text-display', size: '40 → 80px', sample: 'Do firmware à interface.' },
  { token: '--text-2xl', size: '32 → 52px', sample: 'Título de seção' },
  { token: '--text-xl', size: '26 → 34px', sample: 'Título de projeto' },
  { token: '--text-lg', size: '22px', sample: 'Parágrafo de abertura' },
  { token: '--text-md', size: '18px', sample: 'Texto de apoio em destaque' },
  { token: '--text-base', size: '16px', sample: 'Texto corrido padrão do site' },
  { token: '--text-sm', size: '14px', sample: 'Listas e descrições curtas' },
  { token: '--text-xs', size: '12px', sample: 'Tags, datas e rodapé' },
  { token: '--text-2xs', size: '11px', sample: 'RÓTULOS MONO EM CAIXA ALTA', mono: true },
]

const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32]

const radii = [
  { token: '--radius-sm', value: '4px', use: 'Tags' },
  { token: '--radius-md', value: '8px', use: 'Nós, monograma' },
  { token: '--radius-lg', value: '12px', use: 'Cartões' },
  { token: '--radius-full', value: '999px', use: 'Botões, LEDs' },
]

const motion = [
  { token: '--ease-out', value: 'cubic-bezier(0.16, 1, 0.3, 1)', use: 'Entradas e hovers' },
  { token: '--ease-in-out', value: 'cubic-bezier(0.65, 0, 0.35, 1)', use: 'Movimento contínuo (sinal)' },
  { token: '--duration-fast', value: '120ms', use: 'Cor e borda em hover' },
  { token: '--duration-base', value: '200ms', use: 'Troca de tema, ícones' },
  { token: '--duration-slow', value: '600ms', use: 'Revelação ao rolar' },
]

function readToken(token) {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim()
}

function ColorSwatches() {
  const { theme } = useTheme()
  const [values, setValues] = useState({})

  // Relê os valores reais do CSS sempre que o tema muda.
  useEffect(() => {
    setValues(Object.fromEntries(colors.map((c) => [c.token, readToken(c.token)])))
  }, [theme])

  return (
    <div className="ds-swatches">
      {colors.map((c) => (
        <div key={c.token} className="ds-swatch">
          <div className="ds-swatch__chip" style={{ background: `var(${c.token})` }} />
          <div className="ds-swatch__info">
            <span className="ds-swatch__name">{c.name}</span>
            <code>{c.token}</code>
            <span className="ds-swatch__value">{c.note ?? values[c.token]}</span>
            <span className="ds-swatch__use">{c.use}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function Demo({ code, children }) {
  return (
    <div className="ds-demo">
      <div className="ds-demo__stage">{children}</div>
      <pre className="ds-demo__code">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function DsSection({ index, title, description, children }) {
  const id = `ds-${index}`
  return (
    <section className="section" aria-labelledby={id}>
      <div className="container">
        <SectionHeader index={index} id={id} title={title} description={description} />
        <div className="offset">{children}</div>
      </div>
    </section>
  )
}

export function DesignSystem() {
  return (
    <>
      <section className="ds-intro">
        <div className="container">
          <Button href="#/" variant="ghost" size="sm" icon={<ArrowLeft size={14} />} iconPosition="start">
            Voltar ao portfólio
          </Button>
          <Label as="p" className="ds-intro__label">
            Design system · v0.1
          </Label>
          <h1 className="ds-intro__title">Datasheet</h1>
          <p className="ds-intro__text">
            Um sistema visual inspirado em folhas de especificação técnica: papel e tinta, linhas finas, tipografia
            mono para dados e uma única cor de sinal. Tudo aqui é renderizado com os mesmos tokens e componentes do
            portfólio. Use o botão de tema no topo para ver as duas versões.
          </p>

          <div className="ds-principles">
            {principles.map((p, i) => (
              <Card key={p.title}>
                <Label className="ds-principles__index">{String(i + 1).padStart(2, '0')}</Label>
                <h2 className="ds-principles__title">{p.title}</h2>
                <p className="ds-principles__text">{p.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DsSection
        index="Cor"
        title="Paleta semântica"
        description="Componentes usam só estes nomes, nunca um hex solto. O tema escuro troca os valores e mantém os nomes."
      >
        <ColorSwatches />
      </DsSection>

      <DsSection
        index="Tipo"
        title="Tipografia"
        description="Geist para leitura, Geist Mono para dados. Os tamanhos grandes são fluidos e crescem com a tela."
      >
        <div className="ds-families">
          <Card>
            <Label>--font-sans</Label>
            <p className="ds-families__sample">Geist</p>
            <p className="ds-families__chars">Aa Bb Cc 0123456789 — Títulos, textos e interface</p>
          </Card>
          <Card>
            <Label>--font-mono</Label>
            <p className="ds-families__sample mono">Geist Mono</p>
            <p className="ds-families__chars mono">Aa Bb Cc 0123456789 — dados, rótulos e código</p>
          </Card>
        </div>

        <ul role="list" className="rows ds-type">
          {typeScale.map((t) => (
            <li key={t.token} className="row">
              <span className="row__aside">
                {t.token}
                <br />
                {t.size}
              </span>
              <p
                className={`ds-type__sample ${t.mono ? 'mono' : ''}`}
                style={{ fontSize: `var(${t.token})` }}
              >
                {t.sample}
              </p>
            </li>
          ))}
        </ul>
      </DsSection>

      <DsSection index="Espaço" title="Espaçamento e forma" description="Grade de 4px. O nome do token é o múltiplo: --space-6 = 6 × 4 = 24px.">
        <ul role="list" className="ds-spacing">
          {spacing.map((n) => (
            <li key={n}>
              <code>--space-{n}</code>
              <span className="ds-spacing__bar" style={{ width: `var(--space-${n})` }} />
              <span className="ds-spacing__px">{n * 4}px</span>
            </li>
          ))}
        </ul>

        <div className="ds-radii">
          {radii.map((r) => (
            <div key={r.token} className="ds-radius">
              <div className="ds-radius__box" style={{ borderRadius: `var(${r.token})` }} />
              <code>{r.token}</code>
              <span>
                {r.value} · {r.use}
              </span>
            </div>
          ))}
        </div>
      </DsSection>

      <DsSection
        index="Movimento"
        title="Movimento"
        description="Discreto e rápido. Com 'reduzir movimento' ativo no sistema, todas as durações viram zero."
      >
        <ul role="list" className="rows">
          {motion.map((m) => (
            <li key={m.token} className="row">
              <span className="row__aside">{m.token}</span>
              <div>
                <code className="ds-inline-code">{m.value}</code>
                <p className="row__org">{m.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </DsSection>

      <DsSection index="Componentes" title="Componentes" description="Primitivos em src/components/ui. Cada um faz uma coisa só e aceita poucas props.">
        <div className="ds-components">
          <div>
            <Label as="h3" className="ds-components__title">Button</Label>
            <Demo code={`<Button>Primário</Button>\n<Button variant="secondary">Secundário</Button>\n<Button variant="ghost">Ghost</Button>`}>
              <Button>Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="ghost">Ghost</Button>
            </Demo>
            <Demo code={`<Button size="sm" variant="secondary" external\n  icon={<ArrowUpRight size={14} />}>Código</Button>`}>
              <Button size="sm">Pequeno</Button>
              <Button size="sm" variant="secondary" icon={<ArrowUpRight size={14} strokeWidth={2} />}>
                Código
              </Button>
            </Demo>
          </div>

          <div>
            <Label as="h3" className="ds-components__title">Tag</Label>
            <Demo code={`<Tag>React</Tag>\n<Tag variant="accent">em estudo</Tag>\n<Tag variant="outline">Docker</Tag>`}>
              <Tag>React</Tag>
              <Tag variant="accent">em estudo</Tag>
              <Tag variant="outline">Docker</Tag>
            </Demo>
          </div>

          <div>
            <Label as="h3" className="ds-components__title">StatusDot</Label>
            <Demo code={`<StatusDot status="online">Disponível</StatusDot>\n<StatusDot status="busy">Em andamento</StatusDot>\n<StatusDot status="offline" pulse={false}>Arquivado</StatusDot>`}>
              <StatusDot status="online">Disponível</StatusDot>
              <StatusDot status="busy">Em andamento</StatusDot>
              <StatusDot status="offline" pulse={false}>
                Arquivado
              </StatusDot>
            </Demo>
          </div>

          <div>
            <Label as="h3" className="ds-components__title">Metric</Label>
            <Demo code={`<Metric value="1.082" label="req/s no teste de carga" />`}>
              <Metric value="1.082" label="req/s no teste de carga" />
              <Metric value="0" label="erros 5xx" />
            </Demo>
          </div>

          <div>
            <Label as="h3" className="ds-components__title">Card + Label</Label>
            <Demo code={`<Card interactive>\n  <Label>Rótulo</Label>\n  ...\n</Card>`}>
              <Card interactive className="ds-card-example">
                <Label>Rótulo mono</Label>
                <p>Superfície com borda de 1px. Com interactive, a borda escurece no hover.</p>
              </Card>
            </Demo>
          </div>

          <div>
            <Label as="h3" className="ds-components__title">SignalPath</Label>
            <Demo code={`<SignalPath nodes={[{ label: 'ESP32', sub: 'firmware' }, ...]} />`}>
              <SignalPath />
            </Demo>
          </div>
        </div>
      </DsSection>
    </>
  )
}
