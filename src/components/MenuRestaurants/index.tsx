import Button from '../Button'

import pizza from '../../assets/images/pizza.png'
import fecha from '../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  ButtonModal,
  Card,
  Descricao,
  DivContainer,
  List,
  Modal,
  ModalContainer,
  Texto,
  Titulo
} from './styles'

import { add, open } from '../../store/reducer/Cart'
import { MenuInterface } from '../../pages/Home'

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

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  const ParseToBRL = (preco = 0) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const addToCart = (produto: MenuInterface) => {
    dispatch(add(produto))
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <div className="container">
        <List>
          {menu.map((menu) => (
            <Card key={menu.id}>
              <img src={menu.foto} alt="" />
              <Titulo>{menu.nome}</Titulo>
              <Descricao>{getDescricao(menu.descricao)}</Descricao>
              <Button
                type="button"
                onClick={() => openModal(menu)}
                title={' Adicionar ao carrinho'}
              >
                Adicionar ao carrinho
              </Button>
            </Card>
          ))}
        </List>
      </div>
      <DivContainer className={modal.isVisible ? 'visivel' : ''}>
        <ModalContainer>
          <img
            src={fecha}
            alt="fecha"
            onClick={() => {
              closeModal()
            }}
          />
          <Modal className="container">
            <img
              src={modal.selectedProduct?.foto}
              alt={modal.selectedProduct?.nome}
            />
            <Texto>
              <h3>{modal.selectedProduct?.nome}</h3>
              <p>{modal.selectedProduct?.descricao}</p>
              <p>Serve: {modal.selectedProduct?.porcao}</p>
              <ButtonModal
                type={'button'}
                title={'Adoconar ao carrinho'}
                onClick={() => addToCart(modal.selectedProduct!)}
              >
                Adoconar ao carrinho -{ParseToBRL(modal.selectedProduct?.preco)}
              </ButtonModal>
            </Texto>
          </Modal>
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </DivContainer>
    </>
  )
}

export default MenuRestaurants
