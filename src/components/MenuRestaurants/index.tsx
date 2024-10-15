import Button from '../Button'

import fecha from '../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { add, open } from '../../store/reducer/Cart'
import { getMenuDescricao, ParseToBRL } from '../../utils'

export type Props = {
  menu: MenuInterface[]
}

const MenuRestaurants = ({ menu }: Props) => {
  const [modal, setModalEstaAberto] = useState({
    isVisible: false,
    selectedProduct: null as MenuInterface | null
  })

  const dispatch = useDispatch()

  const openModal = (produto: MenuInterface) => {
    setModalEstaAberto({
      isVisible: true,
      selectedProduct: produto
    })
  }

  const closeModal = () => {
    setModalEstaAberto({
      isVisible: false,
      selectedProduct: null
    })
  }

  const addToCart = (produto: MenuInterface) => {
    dispatch(add(produto))
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <div className="container">
        <S.List>
          {menu.map((menu) => (
            <S.Card key={menu.id}>
              <img src={menu.foto} alt="" />
              <S.Titulo>{menu.nome}</S.Titulo>
              <S.Descricao>{getMenuDescricao(menu.descricao)}</S.Descricao>
              <Button
                type="button"
                onClick={() => openModal(menu)}
                title={' Adicionar ao carrinho'}
              >
                Adicionar ao carrinho
              </Button>
            </S.Card>
          ))}
        </S.List>
      </div>
      <S.DivContainer className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContainer>
          <img src={fecha} alt="fecha" onClick={closeModal} />
          <S.Modal className="container">
            <img
              src={modal.selectedProduct?.foto}
              alt={modal.selectedProduct?.nome}
            />
            <S.Texto>
              <h3>{modal.selectedProduct?.nome}</h3>
              <p>{modal.selectedProduct?.descricao}</p>
              <p>Serve: {modal.selectedProduct?.porcao}</p>
              <S.ButtonModal
                type={'button'}
                title={'Adoconar ao carrinho'}
                onClick={() => addToCart(modal.selectedProduct!)}
              >
                Adoconar ao carrinho -{ParseToBRL(modal.selectedProduct?.preco)}
              </S.ButtonModal>
            </S.Texto>
          </S.Modal>
        </S.ModalContainer>
        <div className="overlay" onClick={closeModal}></div>
      </S.DivContainer>
    </>
  )
}

export default MenuRestaurants
