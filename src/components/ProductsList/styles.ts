import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card, Descricao, Div, Titulo } from '../Product/styles'
import { ButtonLink } from '../Button/styles'

export const Container = styled.section<Omit<Props, 'title' | 'menu'>>`
  margin-top: 56px;
  margin-bottom: 120px;

  ${Card} {
    border-color: ${(props) =>
      props.boderCard === 'true' ? cores.rosa2 : cores.rosa2};

    border: ${(props) => (props.boderCard === 'true' ? 'none' : 'solid 8px')};

    background-color: ${(props) =>
      props.boderCard === 'true' ? cores.branco : cores.rosa2};

    color: ${(props) =>
      props.backgroudCard === 'pink' ? cores.rosa2 : cores.branco};
  }
  ${Descricao} {
    color: ${(props) =>
      props.backgroudCard === 'white' ? cores.rosa2 : cores.branco};
  }

  ${Titulo} {
    color: ${(props) =>
      props.backgroudCard === 'white' ? cores.rosa2 : cores.branco};
  }

  ${ButtonLink} {
    background-color: ${(props) =>
      props.styleButton === 'big' ? cores.rosa1 : cores.rosa2};

    color: ${(props) =>
      props.styleButton === 'big' ? cores.rosa2 : cores.branco};

    padding: ${(props) => (props.styleButton === 'big' ? '4px 124px ' : '')};
  }

  ${Div} {
    padding: ${(props) => (props.boderCard === 'false' ? '8px 0 ' : '')};
  }
`

export const List = styled.ul<Omit<Props, 'title' | 'menu'>>`
  display: grid;

  gap: ${(props) => (props.numColumns === 'card1' ? '32px' : '80px')};

  grid-template-columns: ${(props) =>
    props.numColumns === 'card1' ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
`
