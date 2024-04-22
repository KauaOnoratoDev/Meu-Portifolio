import Hero from './components/Hero'
import NavBar from './components/NavBar'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <NavBar />
        <Hero />
      </div>
    </>
  )
}

export default App
