import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { GlobalStyle } from './styles'
import RoutesPage from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <NavBar />
          <RoutesPage />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
