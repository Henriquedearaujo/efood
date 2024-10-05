import { BannerImg, Tipo, Titulo } from './styles'
import banner from '../../assets/images/imagem_de_fundo.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../../pages/Home'

const Banner = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  if (!menu) {
    return <h3>Carregando</h3>
  }

  return (
    <BannerImg style={{ backgroundImage: `url(${menu?.capa})` }}>
      <div className="container">
        <Tipo>{menu?.tipo}</Tipo>
        <Titulo>{menu?.titulo}</Titulo>
      </div>
    </BannerImg>
  )
}

export default Banner
