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
    }
  ]

  return (
    <S.Container>
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
    </S.Container>
  )
}

export default Technologies
