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
import { Restaurants } from '../../pages/Home'

export type Props = {
  menu: Restaurants[]
}

interface ModalState {
  isVisible: boolean
}

const MenuRestaurants = ({ menu }: Props) => {
  const [modal, setModalEstaAberto] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModalEstaAberto({
      isVisible: false
    })
  }

  return (
    <>
      <div className="container">
        <List>
          {menu.map((menu) => (
            <Card key={menu.cardapio.id}>
              <img src={menu.cardapio.foto} alt="" />
              <Titulo>{menu.cardapio.nome}</Titulo>
              <Descricao>{menu.cardapio.descricao}</Descricao>
              <Button
                type="button"
                onClick={() =>
                  setModalEstaAberto({
                    isVisible: true
                  })
                }
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
            <img src={pizza} alt="pizza" />
            <Texto>
              <h3>Pizza Marguarita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com com com com com uma base de massa fina e crocante,
                coberta com fresco, queijo mussarela de alta qualidade,
                manjericão fresco e fresco e azeite de oliva extra-virgem. A
                combinação de sabores é com o molho de tomate suculento e
                ligeiramente ácido, o queijo derretido e cremoso e as folhas de
                manjericão frescas, que adicionam um toque de sabor uma pizza
                simples, mas deliciosa, que agrada a todos os todos os a todos
                os todos os paladares e é uma ótima opção para qualquer ocasião
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
              <ButtonModal type={'button'} title={'Adoconar ao carrinho'}>
                Adoconar ao carrinho - R$ 60,00
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
