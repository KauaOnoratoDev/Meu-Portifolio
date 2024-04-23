import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Qualifications from './pages/Qualifications'

const RoutesPage = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/experiences" element={<Experiences />} />
    <Route path="/qualifications" element={<Qualifications />} />
  </Routes>
)

export default RoutesPage
