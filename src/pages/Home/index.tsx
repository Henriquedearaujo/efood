import sushi from '../../assets/images/sushi.png'
import macarronada from '../../assets/images/macarrao.png'
import Menu from '../../model/Menu'
import ProductList from '../../components/ProductsList'
import star from '../../assets/images/estrela.png'
import Header from '../../components/Header'

const saibaMais: Menu[] = [
  {
    id: 1,
    title: 'Hioki Sush',
    category: '4.6',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    imgStar: star,
    infos: ['Destaque do dia', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: '4,9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarronada,
    imgStar: star,
    infos: ['Italina']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: '4,9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarronada,
    imgStar: star,
    infos: ['Italina']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: '4,9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarronada,
    imgStar: star,
    infos: ['Italina']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    category: '4,9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarronada,
    imgStar: star,
    infos: ['Italina']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    category: '4,9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarronada,
    imgStar: star,
    infos: ['Italina']
  }
]

const Home = () => (
  <>
    <Header usePerfil={true} />
    <ProductList
      aboutProfile={true}
      menu={saibaMais}
      numColumns={'car2'}
      backgroudCard={'white'}
      boderCard="true"
    />
  </>
)

export default Home
