import ProductList from '../../components/ProductsList'
import Header from '../../components/Header'

export interface MenuInterface {
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
  cardapio: MenuInterface[]
}

import { useGetRestaurantsQuery } from '../../service/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header restauranrantsMenu={true} />
        <ProductList restaurants={restaurants} />
      </>
    )
  }
  return <h3>Carregando</h3>
}

export default Home
