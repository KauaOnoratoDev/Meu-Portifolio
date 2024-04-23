import { useState } from 'react'

import { AiFillCaretLeft } from 'react-icons/ai'
import { AiFillCaretRight } from 'react-icons/ai'

import * as S from './styles'

const Carousel = () => {
  const [section, setSection] = useState(1)

  return (
    <S.Container>
      <S.Botao
        onClick={() => section >= 2 && setSection(section - 1)}
        type="button"
      >
        <AiFillCaretLeft />
      </S.Botao>
      <div>
        <S.List className={section !== 1 ? 'none' : ''}>
          <S.Item>JavaScript</S.Item>
          <S.Item>TypeScript</S.Item>
          <S.Item>React</S.Item>
        </S.List>
        <S.List className={section !== 2 ? 'none' : ''}>
          <S.Item>Gulp</S.Item>
          <S.Item>Sass</S.Item>
          <S.Item>Vite</S.Item>
        </S.List>
      </div>
      <S.Botao
        onClick={() => section <= 1 && setSection(section + 1)}
        type="button"
      >
        <AiFillCaretRight />
      </S.Botao>
    </S.Container>
  )
}

export default Carousel
