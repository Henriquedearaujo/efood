import { useDispatch, useSelector } from 'react-redux'
import pizza from '../../assets/images/pizza.png'
import { close, remove } from '../../store/reducer/Cart'
import {
  ButtonCart,
  Card,
  CardContainer,
  Overlay,
  Price,
  Sidebar,
  Text
} from './styles'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const ParseToBRL = (preco = 0) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
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
      <CardContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {items.map((produto) => (
              <Card key={produto.id}>
                <img src={produto.foto} alt="" />
                <Text>
                  <h3>{produto.nome}</h3>
                  <p>{ParseToBRL(produto.preco)}</p>
                </Text>
                <button type="button" onClick={() => removeItem(produto.id)} />
              </Card>
            ))}
            <Price>
              <p>Valor total</p>
              <p>{ParseToBRL(getTotalPrice())}</p>
            </Price>
            <ButtonCart type={'button'} title={'Adoconar ao carrinho'}>
              Adoconar ao carrinho
            </ButtonCart>
          </ul>
        </Sidebar>
      </CardContainer>
    </>
  )
}

export default Cart
