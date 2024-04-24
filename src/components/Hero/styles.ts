import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;

  div {
    width: 50%;
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
