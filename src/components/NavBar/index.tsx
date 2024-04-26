import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changeStatus } from '../../store/reducers/home'
import { RootReducer } from '../../store'

import githubIcon from '../../assets/images/github-icon.png'
import linkedinIcon from '../../assets/images/linkedin-icon.png'
import * as S from './styles'
import { useState } from 'react'

const NavBar = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state: RootReducer) => state.home)
  const [hamActive, setHamActive] = useState(false)

  return (
    <S.Container>
      <S.NavBarStyle>
        <S.Hamburguer onClick={() => setHamActive(!hamActive)}>
          <span></span>
          <span></span>
          <span></span>
        </S.Hamburguer>
        <S.List className={hamActive ? 'is-active' : 'is-disabled'}>
          <S.ListItem
            onClick={() => {
              dispatch(changeStatus('home'))
              setHamActive(false)
            }}
          >
            <Link to={'/'} className={status === 'home' ? 'is-active' : ''}>
              kauaonorato
            </Link>
          </S.ListItem>
          <S.ListItem
            onClick={() => {
              dispatch(changeStatus('qualifications'))
              setHamActive(false)
            }}
          >
            <Link
              to={'/qualifications'}
              className={status === 'qualifications' ? 'is-active' : ''}
            >
              formação
            </Link>
          </S.ListItem>
          <S.ListItem
            onClick={() => {
              dispatch(changeStatus('experiences'))
              setHamActive(false)
            }}
          >
            <Link
              to={'/experiences'}
              className={status === 'experiences' ? 'is-active' : ''}
            >
              experiências
            </Link>
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
