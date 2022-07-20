import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  /* max-width: 1440px; */
  justify-content: space-between;
  color: ${(props) => props.theme.purple};
  border-color: black;
  padding: 2rem 160px;
  /* border-style: solid; */
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const LocationPill = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 38px;
  border-radius: 8px;
  font-size: 0.875rem;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-light']};
`

export const CartButton = styled.button`
  border: none;
  &:hover {
    cursor: pointer;
  }
`