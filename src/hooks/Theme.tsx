import { createContext, ReactNode, useContext, useState } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
)

interface ThemeProviderProps {
  children: ReactNode
}

const KEY_THEME = '@amoratimer:theme'

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const themeStorage = localStorage.getItem(KEY_THEME)

    if (themeStorage) return themeStorage as 'light' | 'dark'

    localStorage.setItem(KEY_THEME, 'dark')

    return 'dark'
  })

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem(KEY_THEME, 'dark')
    } else {
      setTheme('light')
      localStorage.setItem(KEY_THEME, 'light')
    }
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
