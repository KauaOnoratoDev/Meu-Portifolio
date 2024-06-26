import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    color: ${colors.gray400};
    text-align: center;
    margin-bottom: 100px;
  }

  span {
    color: ${colors.white};
  }

  > div {
    width: 60%;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
`

export const Item = styled.li`
  display: flex;
  padding: 40px;
  margin-bottom: 45px;
  background-color: ${colors.gray800};
  border-radius: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }

  img {
    width: 360px;
    height: 360px;
    margin-right: 50px;
    object-fit: cover;
    border-radius: 50px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      margin-bottom: 24px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      border-radius: 25px;
      margin-bottom: 24px;
    }
  }
`

export const Information = styled.div`
  width: 100%;
  h3 {
    color: ${colors.purple};
    font-size: 24px;
    margin-bottom: 32px;
  }

  p {
    font-size: 18px;
    color: ${colors.gray400};
    margin-bottom: 32px;
  }
`

export const Botao = styled.button`
  background-color: ${colors.white};
  padding: 8px 16px;
  border-radius: 100px;
  border: none;
  margin-right: 16px;
  transition: 0.3s ease;

  a {
    color: ${colors.gray800};
  }

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`
