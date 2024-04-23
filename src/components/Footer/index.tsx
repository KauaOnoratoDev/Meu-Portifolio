import githubIcon from '../../assets/images/github-icon.png'
import linkedinIcon from '../../assets/images/linkedin-icon.png'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.FollowMe>
      <h3>Me siga</h3>
      <ul>
        <S.Item>
          <a href="https://github.com/KauaOnoratoDev">
            <img src={githubIcon} alt="" />
          </a>
        </S.Item>
        <S.Item>
          <a href="https://www.linkedin.com/in/kauaonorato/">
            <img src={linkedinIcon} alt="" />
          </a>
        </S.Item>
      </ul>
    </S.FollowMe>
    <span>&copy; Todos os direitos reservados a mim - 2024</span>
  </S.Container>
)

export default Footer
