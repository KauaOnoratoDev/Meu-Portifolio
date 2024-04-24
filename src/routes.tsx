import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Qualifications from './pages/Qualifications'
import { useSelector } from 'react-redux'
import { RootReducer } from './store'

const RoutesPage = () => {
  const { status } = useSelector((state: RootReducer) => state.home)

  return (
    <>
      {status === 'home' && <Home />}
      <Routes>
        {status === 'experiences' && (
          <Route path="/experiences" element={<Experiences />} />
        )}
        {status === 'qualifications' && (
          <Route path="/qualifications" element={<Qualifications />} />
        )}
      </Routes>
    </>
  )
}

export default RoutesPage
