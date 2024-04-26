import { QualificationsModels } from '../../models/QualificationsModels'

import ellipse from '../../assets/images/Ellipse 2.png'
import * as S from './styles'

export type Props = {
  status: boolean
}

const QualificationsComponent = () => {
  return (
    <>
      <S.list>
        {QualificationsModels.map((e) => (
          <S.Item status={e.status} key={e.id}>
            <S.Information>
              <h3>{e.name}</h3>
              <p>{e.qualification}</p>
              <div>
                <small>{e.date[0]}</small>
                <img src={ellipse} alt="" />
                <small>{e.date[1]}</small>
              </div>
            </S.Information>
            {e.status ? (
              <a href={e.certificateLink}>Ver certificado</a>
            ) : (
              <a>Em curso</a>
            )}
          </S.Item>
        ))}
      </S.list>
    </>
  )
}

export default QualificationsComponent
