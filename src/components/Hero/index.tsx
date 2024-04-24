import { Link } from 'react-router-dom'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../store/reducers/home'

const Hero = () => {
  const dispatch = useDispatch()

  return (
    <S.Container>
      <div>
        <S.Title>Olá, eu sou o Kauã</S.Title>
        <S.Text>
          Como um <span>Full-Stack developer</span>, estou comprometido em
          construir soluções que superem as expectativas. Constantemente
          buscando aprendizado e crescimento, estou sempre pronto para encarar
          novos desafios e colaborar em equipe para alcançar resultados
          excepcionais!
        </S.Text>
        <S.Botao type="button">
          <Link
            onClick={() => dispatch(changeStatus('experiences'))}
            to={'/experiences'}
          >
            Veja experiências
          </Link>
        </S.Botao>
      </div>
      <S.Image src="https://via.placeholder.com/360x360" alt="" />
    </S.Container>
  )
}

export default Hero
