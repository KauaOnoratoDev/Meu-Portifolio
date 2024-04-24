import styled from 'styled-components'
import { colors } from '../../styles'

export const Item = styled.li`
  border: 1px solid ${colors.gray700};
  border-radius: 80px;
  padding: 32px 45px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${colors.green};
    transition: 0.3s ease;

    &:hover {
      scale: 1.1;
    }
  }
`

export const Information = styled.div`
  h3 {
    color: ${colors.white};
    font-size: 24px;
    font-weight: bold;
  }

  p {
    color: ${colors.purple};
    font-size: 14px;
    margin: 6px 0 14px;
  }

  div {
    small {
      color: ${colors.gray400};
    }

    img {
      margin: 0 8px;
    }
  }
`
