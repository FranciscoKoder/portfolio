import { useEffect, useState } from 'react'
import { Check, Copy, Github, Linkedin } from 'lucide-react'
import { Button, Label } from '../ui'
import { profile } from '../../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contato" className="section contact" aria-labelledby="contato-title">
      <div className="container">
        <Label className="contact__index">05 — Contato</Label>
        <h2 id="contato-title" className="contact__title reveal">
          Tem um projeto com hardware, APIs ou os dois? <span>Vamos conversar.</span>
        </h2>

        <div className="contact__email reveal">
          <a href={`mailto:${profile.email}`} className="contact__email-link">
            {profile.email}
          </a>
          <button type="button" className="icon-btn" onClick={copyEmail} aria-label="Copiar e-mail">
            {copied ? <Check size={18} strokeWidth={2} /> : <Copy size={18} strokeWidth={1.75} />}
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copied ? 'E-mail copiado' : ''}
          </span>
        </div>

        <div className="contact__links reveal">
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
            variant="secondary"
            external
            icon={<Linkedin size={16} strokeWidth={1.75} />}
            iconPosition="start"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
