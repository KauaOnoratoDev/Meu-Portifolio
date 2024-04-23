import Hero from './components/Hero'
import IntroExperiences from './components/Carousel'
import NavBar from './components/NavBar'
import { GlobalStyle } from './styles'
import Technologies from './components/Technologies'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <NavBar />
        <Hero />
        <IntroExperiences />
        <Technologies />
      </div>
    </>
  )
}

export default App
