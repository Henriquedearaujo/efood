import ProductList from '../../components/ProductsList'
import Pizza from '../../assets/images/pizza.png'
import Menu from '../../model/Menu'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

const perfil: Menu[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    imgStar: '',
    category: '',
    infos: []
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    imgStar: '',
    infos: []
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    imgStar: '',
    infos: []
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    imgStar: '',
    infos: []
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    imgStar: '',
    infos: []
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    imgStar: '',
    infos: []
  }
]

const Perfil = () => (
  <>
    <Header usePerfil={false} />
    <Banner />
    <ProductList
      aboutProfile={false}
      menu={perfil}
      numColumns={'card1'}
      backgroudCard={'pink'}
      boderCard={'false'}
      styleButton={'big'}
    />
  </>
)

export default Perfil
