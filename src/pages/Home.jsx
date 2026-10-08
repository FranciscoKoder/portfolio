import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Skills } from '../components/sections/Skills'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}
