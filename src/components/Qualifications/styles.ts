import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from './index'

export const list = styled.ul`
  display: flex;
  flex-direction: column-reverse;
`

export const Item = styled.li<Props>`
  border: 1px solid ${colors.gray700};
  border-radius: 80px;
  padding: 32px 45px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;

    a {
      margin-top: 24px;
    }
  }

  a {
    color: ${(props) =>
      props.status === true ? `${colors.green}` : `${colors.gray300}`};
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
