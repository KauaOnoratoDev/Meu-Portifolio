import Hero from './components/Hero'
import IntroExperiences from './components/Carousel'
import NavBar from './components/NavBar'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <NavBar />
        <Hero />
        <IntroExperiences />
      </div>
    </>
  )
}

export default App
