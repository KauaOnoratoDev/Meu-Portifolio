import bootstrap from '../assets/images/technologies/bootstrap_logo.png'
import javaScript from '../assets/images/technologies/javascript_logo.png'
import gulp from '../assets/images/technologies/gulp_logo.png'
import jQuery from '../assets/images/technologies/jquery_logo.png'
import python from '../assets/images/technologies/python_logo.png'
import react from '../assets/images/technologies/react_logo.png'
import sass from '../assets/images/technologies/sass_logo.png'
import typescript from '../assets/images/technologies/typescript_logo.png'
import vuejs from '../assets/images/technologies/vuejs_logo.png'

type Tech = {
  name: string
  img: string
}

type Technologies = {
  name: string
  tech: Tech[]
  id: number
}

export const TechnologiesModels: Technologies[] = [
  {
    id: 1,
    name: 'Linguagens',
    tech: [
      {
        name: 'JavaScript',
        img: javaScript
      },
      {
        name: 'TypeScript',
        img: typescript
      }
    ]
  },
  {
    id: 1,
    name: 'Frameworks',
    tech: [
      {
        name: 'React',
        img: react
      },
      {
        name: 'VueJs',
        img: vuejs
      },
      {
        name: 'Bootstrap',
        img: bootstrap
      }
    ]
  },
  {
    id: 1,
    name: 'Bibliotecas',
    tech: [
      {
        name: 'Sass',
        img: sass
      },
      {
        name: 'JQuery',
        img: jQuery
      },
      {
        name: 'Gulp',
        img: gulp
      }
    ]
  }
]
