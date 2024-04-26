import eFood from '../assets/images/experiences/eFood.png'
import cloneDisney from '../assets/images/experiences/cloneDisney.png'
import calculadoraImc from '../assets/images/experiences/calculadoraIMC.png'
import listaContados from '../assets/images/experiences/listaContatos.png'
import calculadoraAritmetica from '../assets/images/experiences/calculadoraAritmetica.png'

type Experiences = {
  projectName: string
  projectDescription: string
  deployLink: string
  codeLink: string
  projectImage: string
  id: number
}

export const ExperiencesModels: Experiences[] = [
  {
    id: 1,
    projectName: 'Clone Disney+',
    projectDescription:
      'Projeto responsivo inspirado no site do Disney Plus. Com este projeto, pude testar meus conhecimentos em JavaScript para melhor interação do usuário com o site, Sass para estilização da página e Gulp para automação do fluxo de trabalho. ',
    deployLink: 'https://clone-disneyplus-jade-nu.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/clone-disneyplus',
    projectImage: cloneDisney
  },
  {
    id: 2,
    projectName: 'Calculadora IMC',
    projectDescription:
      'Uma calculadora de IMC. Projeto utilizando React com Vite, um site simples com poucas funcionalidades, porém super funcional. Utilizei o Vite para um desenvolvimento mais dinâmico e Css Modules para estilização do site. ',
    deployLink: 'https://imc-react-three.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/Imc-React',
    projectImage: calculadoraImc
  },
  {
    id: 3,
    projectName: 'Calculadora Aritmética',
    projectDescription:
      'Uma calculadora aritmética feita utilizando VueJS com Vite e Bootstrap. Uma calculadora 100% funcional com uma estilização simples, sendo um projeto para praticar o framework.',
    deployLink: 'https://calculadora-aritmetica-vuejs-rho.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/Calculadora-aritm-tica-VueJS',
    projectImage: calculadoraAritmetica
  },
  {
    id: 4,
    projectName: 'Lista de contatos',
    projectDescription:
      'Uma lista de contatos funcional. Primeiro projeto pessoal utilizando React com TypeScript, um projeto desafiador e que foi necessário muita pesquisa e trabalho para concluí-lo. Usei Redux e Redux toolkit para a criação de uma Store, onde criei funções usadas para a interação do usuário com a aplicação. ',
    deployLink: 'https://lista-de-contatos-react-gray.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/Lista-de-contatos-React',
    projectImage: listaContados
  },
  {
    id: 5,
    projectName: 'eFood',
    projectDescription:
      'Um cardápio online, com diversos restaurantes, cada um com pratos únicos e maravilhosos. Site integrado com uma Api externa e desenvolvido com React. Meu projeto mais desafiador no meu início como desenvolvedor front-end, Pude testar todos os meus conhecimentos adquiridos até o momento. Site funcional, que envia as informações passadas ao formulário para a Api, utilizando o Formik. ',
    deployLink: 'https://efood-react-mu.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/efood',
    projectImage: eFood
  }
]
