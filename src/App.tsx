import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { GlobalStyle } from './styles'
import RoutesPage from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <NavBar />
          <RoutesPage />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
