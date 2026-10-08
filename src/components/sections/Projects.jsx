import { ArrowUpRight, Lock } from 'lucide-react'
import { Button, Card, Label, Metric, SectionHeader, StatusDot, Tag } from '../ui'
import { projects } from '../../data/projects'

function ProjectCard({ project, index }) {
  const titleId = `projeto-${project.id}`

  return (
    <Card as="article" interactive className="project reveal" aria-labelledby={titleId}>
      <div className="project__head">
        <Label className="project__index">{String(index + 1).padStart(2, '0')}</Label>
        <Label>{project.category}</Label>
        {project.status && <StatusDot status="busy">{project.status}</StatusDot>}
        <Label className="project__year">{project.year}</Label>
      </div>

      <div className="project__body">
        <div className="project__intro">
          <h3 id={titleId} className="project__title">
            {project.title}
          </h3>
          <p className="project__summary">{project.summary}</p>

          {project.metrics.length > 0 && (
            <div className="project__metrics">
              {project.metrics.map((m) => (
                <Metric key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          )}
        </div>

        <div className="project__details">
          <Label as="h4">Destaques</Label>
          <ul className="project__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Label as="h4">Stack</Label>
          <div className="project__stack">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="project__links">
        {project.links.map((link) => (
          <Button
            key={link.href}
            href={link.href}
            variant="secondary"
            size="sm"
            external
            icon={<ArrowUpRight size={14} strokeWidth={2} />}
          >
            {link.label}
          </Button>
        ))}
        {project.privateNote && (
          <span className="project__private">
            <Lock size={13} strokeWidth={2} aria-hidden="true" />
            {project.privateNote}
          </span>
        )}
      </div>
    </Card>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="container">
        <SectionHeader
          index="01 — Projetos"
          id="projetos-title"
          title="O que eu construí"
          description="Projetos reais, do firmware ao navegador. Cada um resolve um problema concreto; quando o código é aberto, o link está no cartão."
        />
        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
