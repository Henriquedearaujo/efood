import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 56px;
  padding-bottom: 120px;
`
export const Card = styled.li`
  border-color: ${cores.rosa2};
  background-color: ${cores.rosa2};
  border: ${'solid 8px'};
  color: ${cores.rosa2};

  img {
    width: 304px;
    height: 167px;
    margin-right: 24px;
    width: 100%;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branco};
  display: block;
  padding-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.branco};
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const DivContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  margin-top: 160px;
  top: 0;
  z-index: 1;

  max-width: 1024px;

  background-color: ${cores.rosa2};
  padding: 8px 8px 32px;

  > img {
    float: right;
    cursor: pointer;
  }
`

export const Modal = styled.div`
  display: flex;
  color: ${cores.branco};
  background-color: ${cores.rosa2};

  img {
    padding: 8px 16px 0;
    object-fit: cover;
    width: 280px;
    height: 280px;
  }
`
export const Texto = styled.div`
  margin: 16px 0;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
    margin-right: 8px;
  }
`
export const ButtonModal = styled.button`
  color: ${cores.rosa2};
  background: ${cores.rosa1};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
`
