import { Label, SectionHeader } from '../ui'
import { profile } from '../../data/profile'

function Timeline({ title, items }) {
  return (
    <div className="timeline reveal">
      <Label as="h3" className="timeline__title">
        {title}
      </Label>
      <ol role="list" className="rows">
        {items.map((item) => (
          <li key={`${item.org}-${item.role}`} className="row">
            <span className="row__aside">{item.period}</span>
            <div className="row__main">
              <p className="row__title">{item.role}</p>
              <p className="row__org">{item.org}</p>
              {item.description && <p className="row__desc">{item.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Experience() {
  return (
    <section id="trajetoria" className="section" aria-labelledby="trajetoria-title">
      <div className="container">
        <SectionHeader index="03 — Trajetória" id="trajetoria-title" title="Onde aprendi fazendo" />
        <div className="offset timelines">
          <Timeline title="Experiência" items={profile.experience} />
          <Timeline title="Formação" items={profile.education} />
        </div>
      </div>
    </section>
  )
}
