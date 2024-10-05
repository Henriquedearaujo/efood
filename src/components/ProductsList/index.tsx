import { Restaurants } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

const getDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice() + '...'
  }
  return descricao
}

export type Props = {
  restaurants: Restaurants[]
}

const ProductList = ({ restaurants }: Props) => {
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
                  description={getDescricao(restaurants.descricao)}
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
