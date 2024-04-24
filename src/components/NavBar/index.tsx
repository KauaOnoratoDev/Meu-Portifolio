import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changeStatus } from '../../store/reducers/home'
import { RootReducer } from '../../store'

import githubIcon from '../../assets/images/github-icon.png'
import linkedinIcon from '../../assets/images/linkedin-icon.png'
import * as S from './styles'

const NavBar = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state: RootReducer) => state.home)

  return (
    <S.Container>
      <S.NavBarStyle>
        <S.List>
          <S.ListItem onClick={() => dispatch(changeStatus('home'))}>
            <Link to={'/'} className={status === 'home' ? 'is-active' : ''}>
              kauaonorato
            </Link>
          </S.ListItem>
          <S.ListItem onClick={() => dispatch(changeStatus('qualifications'))}>
            <Link
              to={'/qualifications'}
              className={status === 'qualifications' ? 'is-active' : ''}
            >
              formação
            </Link>
          </S.ListItem>
          <S.ListItem onClick={() => dispatch(changeStatus('experiences'))}>
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
