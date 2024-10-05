import ProductList from '../../components/ProductsList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export interface MunuInterface {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MunuInterface[]
}

const Home = () => {
  const [restaurants, setrestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setrestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <Header usePerfil={true} />
      <ProductList restaurants={restaurants} />
    </>
  )
}

export default Home
