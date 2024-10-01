import ProductList from '../../components/ProductsList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setrestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setrestaurants(res))
  }, [])

  return (
    <>
      <Header usePerfil={true} />
      <ProductList restaurants={restaurants} />
    </>
  )
}

export default Home
