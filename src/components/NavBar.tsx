import { useState } from 'react'

import githubIcon from '../assets/images/github-icon.png'
import linkedinIcon from '../assets/images/linkedin-icon.png'
import * as S from './styles'

const NavBar = () => {
  const [isActive, setIsActive] = useState(1)

  return (
    <S.Container>
      <S.NavBarStyle>
        <S.List>
          <S.ListItem onClick={() => setIsActive(1)}>
            <a href="#" className={isActive === 1 ? 'is-active' : ''}>
              kauaonorato
            </a>
          </S.ListItem>
          <S.ListItem onClick={() => setIsActive(2)}>
            <a href="#" className={isActive === 2 ? 'is-active' : ''}>
              formação
            </a>
          </S.ListItem>
          <S.ListItem onClick={() => setIsActive(3)}>
            <a href="#" className={isActive === 3 ? 'is-active' : ''}>
              experiências
            </a>
          </S.ListItem>
        </S.List>
        <S.List>
          <S.ListItem>
            <a href="https://github.com/KauaOnoratoDev">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </S.ListItem>
          <S.ListItem>
            <a href="https://www.linkedin.com/in/kauaonorato/">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </S.ListItem>
        </S.List>
      </S.NavBarStyle>
    </S.Container>
  )
}

export default NavBar
