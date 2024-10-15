import { getResDescricao } from '../../utils'
import Loader from '../Loader'
import Product from '../Restaurants'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurants[]
  isLoading: boolean
}

const ProductList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurants.map((restaurants) => (
              <li key={restaurants.id}>
                <Product
                  id={restaurants.id}
                  title={restaurants.titulo}
                  assessment={restaurants.avaliacao}
                  description={getResDescricao(restaurants.descricao)}
                  type={restaurants.tipo}
                  highlight={restaurants.destacado}
                  image={restaurants.capa}
                />
              </li>
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default ProductList
