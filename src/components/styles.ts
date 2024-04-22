import styled from 'styled-components'
import { colors } from '../styles'

export const Container = styled.div`
  max-width: 640px;
  width: 100%;
  background-color: ${colors.gray800};
  border-radius: 100px;
  padding: 24px;
  font-size: 20px;
  margin: 32px auto;
`

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const List = styled.ul`
  display: flex;

  &:nth-child(1) {
    li {
      margin-right: 32px;
    }
  }

  &:nth-child(2) {
    li {
      margin-left: 32px;
    }
  }
`

export const ListItem = styled.li`
  transition: 0.3s ease;
  .is-active {
    color: ${colors.white};
  }

  &:hover {
    scale: 1.1;
  }

  a {
    color: ${colors.purple};
  }
`
