import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  width: 100%;
  margin: 150px auto 32px;

  span {
    color: ${colors.gray400};
    font-size: 12px;
    margin-left: 32px;
  }
`

export const FollowMe = styled.div`
  background-color: ${colors.gray800};
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.gray400};
  border-radius: 100px;
  margin-bottom: 24px;

  ul {
    display: flex;
  }
`

export const Item = styled.li`
  transition: 0.3s ease;
  margin-left: 18px;

  &:hover {
    scale: 1.1;
  }

  img {
    width: 20px;
    height: 20px;
  }
`
