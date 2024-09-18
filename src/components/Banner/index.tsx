import { BannerImg, Tipo, Titulo } from './styles'
import banner from '../../assets/images/imagem_de_fundo.png'

const Banner = () => (
  <BannerImg style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Tipo>Italiana</Tipo>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </BannerImg>
)

export default Banner
