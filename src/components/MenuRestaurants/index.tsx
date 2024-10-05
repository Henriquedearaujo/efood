import Button from '../Button'

import pizza from '../../assets/images/pizza.png'
import fecha from '../../assets/images/close.png'
import { useState } from 'react'

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
import { MunuInterface, Restaurants } from '../../pages/Home'

export type Props = {
  menu: MunuInterface[]
}

const MenuRestaurants = ({ menu }: Props) => {
  const [modal, setModalEstaAberto] = useState({
    isVisible: false,
    selectedProduct: null as MunuInterface | null
  })

  const openModal = (produto: MunuInterface) => {
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
            <img src={modal.selectedProduct?.foto} alt="pizza" />
            <Texto>
              <h3>{modal.selectedProduct?.nome}</h3>
              <p>{modal.selectedProduct?.descricao}</p>
              <p>Serve: {modal.selectedProduct?.porcao}</p>
              <ButtonModal type={'button'} title={'Adoconar ao carrinho'}>
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
