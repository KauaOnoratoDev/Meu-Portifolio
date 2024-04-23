import * as S from './styles'

const ExperiencesComponent = () => {
  const mock = [
    {
      projectName: 'Teste Projeto',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
      deployLink: '#',
      codeLink: '#',
      projectImage: 'https://via.placeholder.com/400x400'
    },
    {
      projectName: 'Teste Projeto',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
      deployLink: '#',
      codeLink: '#',
      projectImage: 'https://via.placeholder.com/400x400'
    },
    {
      projectName: 'Teste Projeto',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
      deployLink: '#',
      codeLink: '#',
      projectImage: 'https://via.placeholder.com/400x400'
    },
    {
      projectName: 'Teste Projeto',
      projectDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
      deployLink: '#',
      codeLink: '#',
      projectImage: 'https://via.placeholder.com/400x400'
    }
  ]

  return (
    <S.Container>
      <div>
        <h2>
          Aqui, você pode conhecer um pouco sobre as minhas experiências,
          desenvolvi durante a minha jornada como um{' '}
          <span>Full-Stack developer. </span>
        </h2>
      </div>
      <ul>
        {mock.map((e) => (
          <S.Item key={e.projectName}>
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
