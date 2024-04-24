import eFood from '../assets/images/experiences/eFood.png'
import cloneDisney from '../assets/images/experiences/cloneDisney.png'
import calculadoraImc from '../assets/images/experiences/calculadoraIMC.png'
import listaContados from '../assets/images/experiences/listaContatos.png'

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
    projectName: 'eFood',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
    deployLink: 'https://efood-react-mu.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/efood',
    projectImage: eFood
  },
  {
    id: 2,
    projectName: 'Lista de contatos',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
    deployLink: 'https://lista-de-contatos-react-gray.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/Lista-de-contatos-React',
    projectImage: listaContados
  },
  {
    id: 3,
    projectName: 'Calculadora IMC',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
    deployLink: 'https://imc-react-three.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/Imc-React',
    projectImage: calculadoraImc
  },
  {
    id: 4,
    projectName: 'Clone Disney+',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat ab, magnam accusantium nihil veniam nam ipsam quisquam reiciendis quas unde expedita officiis placeat, hic blanditiis harum modi aperiam. Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illo corrupti eaque voluptate! Expedita, odio. Iure omnis nesciunt repellendus, earum sit laborum quis quia eveniet alias officiis. Corrupti, unde itaque!',
    deployLink: 'https://clone-disneyplus-jade-nu.vercel.app',
    codeLink: 'https://github.com/KauaOnoratoDev/clone-disneyplus',
    projectImage: cloneDisney
  }
]
