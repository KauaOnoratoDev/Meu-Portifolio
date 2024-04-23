import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const List = styled.ul`
  border: 1px solid ${colors.gray700};
  border-radius: 12px;
  padding: 24px 32px;
  margin: 0 32px 32px;
  color: ${colors.white};

  h3 {
    margin-bottom: 16px;
  }
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 14px;

  img {
    border-radius: 50%;
    margin-right: 8px;
  }
`