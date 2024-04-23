import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 200px;

  .none {
    display: none;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple};
  width: 300px;
  height: 150px;
  border-radius: 60px;
  margin: 0 20px;
`

export const Botao = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white};
  transition: 0.2s ease;
  font-size: 24px;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`
