import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  max-width: 640px;
  width: 100%;
  background-color: ${colors.gray800};
  border-radius: 100px;
  padding: 24px;
  font-size: 20px;
  margin: 32px auto 100px;
`

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const List = styled.ul`
  display: flex;

  @media (max-width: ${breakpoints.mobile}) {
    &:nth-child(1) {
      flex-direction: column;
    }
  }

  &:nth-child(1) {
    li {
      margin-right: 32px;

      @media (max-width: ${breakpoints.mobile}) {
        margin: 0 0 16px;
        text-align: center;
      }
    }
  }

  &:nth-child(2) {
    li {
      margin-left: 32px;

      @media (max-width: ${breakpoints.mobile}) {
        margin: 0 8px;
      }
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

  img {
    width: 20px;
    height: 20px;
  }
`
