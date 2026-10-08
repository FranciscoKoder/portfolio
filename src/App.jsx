import { useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { DesignSystem } from './pages/DesignSystem'
import { useHashRoute, useReveal } from './hooks/hooks'
import { profile } from './data/profile'

export default function App() {
  const { route, hash } = useHashRoute()
  const page = route === '/design-system' ? 'design-system' : 'home'

  useEffect(() => {
    document.title =
      page === 'design-system'
        ? `Design system — ${profile.name}`
        : `${profile.name} — ${profile.role}`
  }, [page])

  // Ao trocar de página, volta ao topo. Âncoras da home ("#projetos") rolam até a seção,
  // inclusive quando o clique vem da página do design system.
  useEffect(() => {
    const anchor = !hash.startsWith('#/') && hash.length > 1 ? hash.slice(1) : null
    const target = anchor && document.getElementById(anchor)
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page, hash])

  useReveal(page)

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{page === 'design-system' ? <DesignSystem /> : <Home />}</main>
      <Footer />
    </>
  )
}
