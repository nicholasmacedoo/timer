import styled from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

type ButtonContainerProps = {
  variant: ButtonVariants
}

// const buttonVariants = {
//   primary: 'purple',
//   secondary: 'orange',
//   danger: 'red',
//   success: 'grenn',
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 40px;
`
