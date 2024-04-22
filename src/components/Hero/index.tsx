import * as S from './styles'

const Hero = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Olá, eu sou o Kauã</S.Title>
        <S.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod neque
          laborum totam nam cum, quidem minus voluptas, omnis harum, iusto rem a
          quisquam voluptates odio corrupti iure molestias consequuntur? Dolore.
        </S.Text>
        <S.Botao type="button">
          <a href="">Veja experiências</a>
        </S.Botao>
      </div>
      <S.Image src="https://via.placeholder.com/360x360" alt="" />
    </S.Container>
  )
}

export default Hero
