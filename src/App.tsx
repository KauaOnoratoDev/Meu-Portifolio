import Hero from './components/Hero'
import IntroExperiences from './components/Carousel'
import NavBar from './components/NavBar'
import { GlobalStyle } from './styles'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <NavBar />
        <Hero />
        <IntroExperiences />
        <Technologies />
        <Footer />
      </div>
    </>
  )
}

export default App
