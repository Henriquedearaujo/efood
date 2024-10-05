import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Product from './components/Product'
import ProductList from './components/ProductsList'
import Footer from './components/Footer'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
