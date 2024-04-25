import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 100px;
  }

  div {
    width: 50%;

    @media (max-width: ${breakpoints.desktop}) {
      width: 60%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      text-align: center;
    }
  }
`

export const Title = styled.h1`
  font-size: 45px;
  color: ${colors.white};
  margin-bottom: 32px;
`

export const Text = styled.p`
  font-size: 20px;
  color: ${colors.gray400};
  margin-bottom: 40px;

  span {
    color: ${colors.gray300};
    font-weight: bold;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  width: 360px;
  height: 360px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 240px;
    height: 240px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 48px;
    width: 180px;
    height: 180px;
  }
`

export const Botao = styled.button`
  padding: 12px 40px;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }

  a {
    color: ${colors.gray900};
  }
`
