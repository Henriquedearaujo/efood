import { BannerImg, Tipo, Titulo } from './styles'
import { useParams } from 'react-router-dom'
import { useGetMenuRestaurantQuery } from '../../service/api'

const Banner = () => {
  const { id } = useParams()
  const { data: menu } = useGetMenuRestaurantQuery(id!)

  if (!menu) {
    return <h3>Carregando</h3>
  }

  return (
    <BannerImg style={{ backgroundImage: `url(${menu.capa})` }}>
      <div className="container">
        <Tipo>{menu.tipo}</Tipo>
        <Titulo>{menu.titulo}</Titulo>
      </div>
    </BannerImg>
  )
}

export default Banner
