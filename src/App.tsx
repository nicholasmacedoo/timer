import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { AppProvider } from './hooks'
import { ThemeProvider } from './hooks/Theme'

export function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}
