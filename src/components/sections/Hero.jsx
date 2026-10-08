import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { Button, Label, SignalPath, StatusDot } from '../ui'
import { profile } from '../../data/profile'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__main">
            <div className="hero__meta reveal">
              <StatusDot status="online">{profile.availability}</StatusDot>
              <span className="hero__meta-sep" aria-hidden="true" />
              <Label>{profile.location}</Label>
            </div>

            <h1 id="hero-title" className="hero__title reveal" style={{ '--reveal-delay': '80ms' }}>
              <span className="hero__kicker">
                {profile.name} — {profile.role}
              </span>
              <span className="hero__headline">{profile.headline}</span>
            </h1>

            <p className="hero__sub reveal" style={{ '--reveal-delay': '160ms' }}>
              {profile.subheadline}
            </p>

            <div className="hero__actions reveal" style={{ '--reveal-delay': '240ms' }}>
              <Button href="#projetos" icon={<ArrowDown size={16} strokeWidth={2} />}>
                Ver projetos
              </Button>
              <Button
                href={profile.links.github}
                variant="secondary"
                external
                icon={<Github size={16} strokeWidth={1.75} />}
                iconPosition="start"
              >
                GitHub
              </Button>
              <Button
                href={profile.links.linkedin}
                variant="ghost"
                external
                icon={<Linkedin size={16} strokeWidth={1.75} />}
                iconPosition="start"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          <aside className="spec reveal" style={{ '--reveal-delay': '320ms' }} aria-label="Ficha técnica">
            <div className="spec__head">
              <Label>Ficha técnica</Label>
              <Label>rev. {new Date().getFullYear()}</Label>
            </div>
            <dl className="spec__list">
              {profile.spec.map((row) => (
                <div key={row.label} className="spec__row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="hero__signal reveal" style={{ '--reveal-delay': '400ms' }}>
          <SignalPath />
        </div>
      </div>
    </section>
  )
}
