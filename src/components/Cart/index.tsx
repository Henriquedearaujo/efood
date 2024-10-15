import { useDispatch, useSelector } from 'react-redux'
import { close, closeSideBarCart, remove } from '../../store/reducer/Cart'
import * as S from './styles'
import { RootReducer } from '../../store'
import Checkout from '../Checkout'
import { ParseToBRL } from '../../utils'

const Cart = () => {
  const { isOpen, items, openSide } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const handleButtonClick = () => {
    dispatch(closeSideBarCart())
  }

  const closeCart = () => {
    openSide ? dispatch(close()) : ''
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      <S.CardContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        {items.length > 0 ? (
          <S.SideBarCart className={openSide ? 'isVisible' : ''}>
            <ul>
              {items.map((produto) => (
                <S.Card key={produto.id}>
                  <img src={produto.foto} alt="" />
                  <S.Text>
                    <h3>{produto.nome}</h3>
                    <p>{ParseToBRL(produto.preco)}</p>
                  </S.Text>
                  <button
                    type="button"
                    onClick={() => removeItem(produto.id)}
                  />
                </S.Card>
              ))}
              <S.Price>
                <p>Valor total</p>
                <p>{ParseToBRL(getTotalPrice())}</p>
              </S.Price>
              <S.ButtonCart
                type={'button'}
                title={'Adoconar ao carrinho'}
                onClick={handleButtonClick}
              >
                Continuar a entrega
              </S.ButtonCart>
            </ul>
          </S.SideBarCart>
        ) : (
          <S.Sidebar>
            <S.CartVoid>
              O carrinho está vazio. <br /> Adicione pelo menos um produto para
              continuar continuar com a compra
            </S.CartVoid>
          </S.Sidebar>
        )}
        <Checkout />
      </S.CardContainer>
    </>
  )
}

export default Cart
