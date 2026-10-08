import { SectionHeader } from '../ui'
import { profile } from '../../data/profile'

export function About() {
  const [lead, ...rest] = profile.about

  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container">
        <SectionHeader index="02 — Sobre" id="sobre-title" title="Hardware e software, no mesmo lugar" />
        <div className="offset prose reveal">
          <p className="prose__lead">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
