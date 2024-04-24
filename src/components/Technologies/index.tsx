import * as S from './styles'

const Technologies = () => {
  const mock = [
    {
      name: 'Linguagens',
      tech: ['JavaScript', 'TypeScript']
    },
    {
      name: 'Frameworks',
      tech: ['React', 'Vue']
    },
    {
      name: 'Frameworks',
      tech: ['React', 'Vue']
    }
  ]

  return (
    <S.Container>
      <h2>
        Essas são as tecnologias que tenho usado durante a minha jornada como
        desenvolvedor.
      </h2>
      <div>
        {mock.map((e) => (
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
