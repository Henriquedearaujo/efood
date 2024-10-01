import Menu from '../../model/Menu'
import { Restaurants } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

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
                  description={restaurants.descricao}
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
