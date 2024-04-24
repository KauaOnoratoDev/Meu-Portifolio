import { ExperiencesModels } from '../../models/ExperiencesModels'
import * as S from './styles'

const ExperiencesComponent = () => {
  return (
    <S.Container>
      <div>
        <h2>
          &lt; Aqui, você pode conhecer um pouco sobre as minhas experiências
          que desenvolvi durante a minha jornada como um{' '}
          <span>Full-Stack developer.</span> /&gt;
        </h2>
      </div>
      <ul>
        {ExperiencesModels.map((e) => (
          <S.Item key={e.id}>
            <img src={e.projectImage} alt="" />
            <S.Information>
              <h3>{e.projectName}</h3>
              <p>{e.projectDescription}</p>
              <div>
                <S.Botao>
                  <a href={e.codeLink}>Código</a>
                </S.Botao>
                <S.Botao>
                  <a href={e.deployLink}>Deploy</a>
                </S.Botao>
              </div>
            </S.Information>
          </S.Item>
        ))}
      </ul>
    </S.Container>
  )
}

export default ExperiencesComponent
