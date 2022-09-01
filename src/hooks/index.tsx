import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'
import { CyclesProvider } from './Cycles'
import { useTheme } from './Theme'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const { theme } = useTheme()

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? defaultTheme : lightTheme}>
        <BrowserRouter>
          <CyclesProvider>{children}</CyclesProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
