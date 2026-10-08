import { SectionHeader, Tag } from '../ui'
import { skills } from '../../data/profile'

export function Skills() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="container">
        <SectionHeader index="04 — Stack" id="stack-title" title="Ferramentas do dia a dia" />
        <ul role="list" className="offset rows reveal">
          {skills.map((group) => (
            <li key={group.group} className="row">
              <span className="row__aside">
                {group.group}
                {group.note && <Tag variant="accent">{group.note}</Tag>}
              </span>
              <div className="row__tags">
                {group.items.map((item) => (
                  <Tag key={item} variant="outline">
                    {item}
                  </Tag>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
