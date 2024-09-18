// src/components/Header.js
import { HeaderImg, HeaderPerfil, LinkItem } from './styles'
import headerFundo from '../../assets/images/headerFundo.png'
import ImageLogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

type Props = {
  usePerfil: boolean
}

const Header = ({ usePerfil }: Props) => (
  <>
    {usePerfil ? (
      <HeaderImg style={{ backgroundImage: `url(${headerFundo})` }}>
        <div className="container">
          <img src={ImageLogo} alt="EFOOD" />
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </div>
      </HeaderImg>
    ) : (
      <HeaderPerfil style={{ backgroundImage: `url(${headerFundo})` }}>
        <div className="container">
          <nav>
            <LinkItem to={'/'}>Restalrantes</LinkItem>
          </nav>
          <img src={ImageLogo} alt="EFOOD" />
          <p>0 produto(s) no carrinho</p>
        </div>
      </HeaderPerfil>
    )}
  </>
)

export default Header
