import ellipse from '../../assets/images/Ellipse 2.png'
import * as S from './styles'

const QualificationsComponent = () => {
  const mock = [
    {
      name: 'EBAC',
      qualification: 'Certificado em Full-Stack Python',
      date: ['Março 2023', 'Present'],
      certificateLink: '#'
    }
  ]

  return (
    <>
      <ul>
        {mock.map((e) => (
          <S.Item key={e.certificateLink}>
            <S.Information>
              <h3>{e.name}</h3>
              <p>{e.qualification}</p>
              <div>
                <small>{e.date[0]}</small>
                <img src={ellipse} alt="" />
                <small>{e.date[1]}</small>
              </div>
            </S.Information>
            <a href={e.certificateLink}>Ver certificado</a>
          </S.Item>
        ))}
      </ul>
    </>
  )
}

export default QualificationsComponent
