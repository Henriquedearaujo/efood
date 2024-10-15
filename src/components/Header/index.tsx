// src/components/Header.js
import { HeaderImg, HeaderPerfil, LinkItem } from './styles'
import headerFundo from '../../assets/images/headerFundo.png'
import ImageLogo from '../../assets/images/logo.png'

import { open } from '../../store/reducer/Cart'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  restauranrantsMenu: boolean
}

const Header = ({ restauranrantsMenu }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      {restauranrantsMenu ? (
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
            <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
          </div>
        </HeaderPerfil>
      )}
    </>
  )
}

export default Header
