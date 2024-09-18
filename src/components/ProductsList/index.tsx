import Menu from '../../model/Menu'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  menu: Menu[]
  numColumns?: 'card1' | 'car2'
  backgroudCard?: 'white' | 'pink'
  boderCard?: 'false' | 'true'
  styleButton?: 'small' | 'big'
  aboutProfile?: boolean
}

const ProductList = ({
  menu,
  numColumns,
  backgroudCard,
  boderCard,
  styleButton,
  aboutProfile
}: Props) => (
  <>
    {aboutProfile ? (
      <Container
        backgroudCard={backgroudCard}
        boderCard={boderCard}
        styleButton={styleButton}
      >
        <div className="container">
          <List numColumns={numColumns}>
            {menu.map((menu) => (
              <Product
                btnStyles={false}
                key={menu.id}
                title={menu.title}
                category={menu.category}
                description={menu.description}
                infos={menu.infos}
                image={menu.image}
                imgStar={menu.imgStar}
              />
            ))}
          </List>
        </div>
      </Container>
    ) : (
      <Container
        backgroudCard={backgroudCard}
        boderCard={boderCard}
        styleButton={styleButton}
      >
        <div className="container">
          <List numColumns={numColumns}>
            {menu.map((menu) => (
              <Product
                btnStyles={true}
                key={menu.id}
                title={menu.title}
                category={menu.category}
                description={menu.description}
                infos={menu.infos}
                image={menu.image}
                imgStar={menu.imgStar}
              />
            ))}
          </List>
        </div>
      </Container>
    )}
  </>
)

export default ProductList
