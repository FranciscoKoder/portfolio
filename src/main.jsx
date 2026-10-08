import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'

// Ordem importa: tokens → base → componentes → layout → seções
import './styles/tokens.css'
import './styles/base.css'
import './components/ui/ui.css'
import './components/layout/layout.css'
import './components/sections/sections.css'

import { ThemeProvider } from './theme/ThemeProvider'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
