import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme.shape};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const ContainerToggleTheme = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`
export const CheckedIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`
export const UnCheckedIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
`
