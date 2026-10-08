import { Fragment } from 'react'

const defaultNodes = [
  { label: 'ESP32', sub: 'firmware' },
  { label: 'API REST', sub: 'backend' },
  { label: 'Web', sub: 'interface' },
]

// Assinatura visual do portfólio: um sinal percorrendo hardware → API → interface.
export function SignalPath({ nodes = defaultNodes, label }) {
  const description = label ?? `Fluxo: ${nodes.map((n) => `${n.label} (${n.sub})`).join(', ')}`

  return (
    <div className="signal" role="img" aria-label={description}>
      {nodes.map((node, i) => (
        <Fragment key={node.label}>
          <div className="signal__node">
            <span className="signal__label">{node.label}</span>
            <span className="signal__sub">{node.sub}</span>
          </div>
          {i < nodes.length - 1 && (
            <div className="signal__wire" aria-hidden="true">
              <span className="signal__pulse" style={{ '--pulse-delay': `${i * 0.9}s` }} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
