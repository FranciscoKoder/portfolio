import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span className="site-footer__links">
          <a href="#/design-system">Design system</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#top">Topo ↑</a>
        </span>
      </div>
    </footer>
  )
}
