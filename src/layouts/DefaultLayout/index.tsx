import { Outlet } from 'react-router-dom'
import { Header } from '../../componets/Header'
import { useTheme as useToggleTheme } from '../../hooks/Theme'
import { Moon, Sun } from 'phosphor-react'
import Switch from 'react-switch'
import {
  CheckedIconContainer,
  ContainerToggleTheme,
  LayoutContainer,
  UnCheckedIconContainer,
} from './styles'
import { useTheme } from 'styled-components'

export function DefaultLayout() {
  const { theme, toggleTheme } = useToggleTheme()
  const colors = useTheme()

  return (
    <LayoutContainer>
      <ContainerToggleTheme>
        <Switch
          offColor={colors.shape}
          onColor={colors.boxOnShape}
          boxShadow={'0px 0px 1px 3px rgba(145, 100, 250, 0.3)'}
          checkedIcon={
            <CheckedIconContainer>
              <Sun size={16} color={colors['yellow-500']} />
            </CheckedIconContainer>
          }
          uncheckedIcon={
            <UnCheckedIconContainer>
              <Moon size={16} color={colors.text} />
            </UnCheckedIconContainer>
          }
          onChange={() => toggleTheme()}
          checked={theme === 'dark'}
        />
      </ContainerToggleTheme>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
