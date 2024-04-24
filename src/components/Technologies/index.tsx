import { TechnologiesModels } from '../../models/TechnologiesModels'
import * as S from './styles'

const Technologies = () => {
  return (
    <S.Container>
      <h2>
        Essas são as tecnologias que tenho usado durante a minha jornada como
        desenvolvedor.
      </h2>
      <div>
        {TechnologiesModels.map((e) => (
          <>
            <S.List>
              <h3>{e.name}</h3>
              {e.tech.map((item) => (
                <>
                  <S.Item>
                    <img src="https://via.placeholder.com/32x32" alt="" />
                    {item}
                  </S.Item>
                </>
              ))}
            </S.List>
          </>
        ))}
      </div>
    </S.Container>
  )
}

export default Technologies
