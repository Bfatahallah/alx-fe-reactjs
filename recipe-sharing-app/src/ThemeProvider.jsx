import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('theme') || 'light' } catch(e){ return 'light' }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
    try { localStorage.setItem('theme', mode) } catch(e){}
  }, [mode])

  const toggle = () => setMode(m => m === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export default ThemeProvider
