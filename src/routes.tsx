import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Retaurant from './pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Retaurant />} />
  </Routes>
)

export default Rotas
