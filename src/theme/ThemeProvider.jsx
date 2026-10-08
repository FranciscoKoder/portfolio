import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext, THEME_STORAGE_KEY } from './context'

const darkQuery = '(prefers-color-scheme: dark)'

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

function systemTheme() {
  return window.matchMedia(darkQuery).matches ? 'dark' : 'light'
}

// O tema inicial já foi aplicado por um script inline no index.html (evita flash).
// Sem escolha salva, o site segue o sistema; o botão grava uma escolha explícita.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || systemTheme(),
  )

  useEffect(() => {
    const media = window.matchMedia(darkQuery)
    const onChange = () => {
      if (!readStoredTheme()) setTheme(systemTheme())
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Armazenamento indisponível (aba anônima etc.): o tema vale só nesta visita.
    }
    setTheme(next)
  }, [theme])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
