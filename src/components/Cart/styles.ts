import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonModal } from '../MenuRestaurants/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosa2};
  z-index: 1;
  padding: 40px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const Card = styled.li`
  display: flex;
  color: ${cores.rosa2};
  background-color: ${cores.rosa1};
  z-index: 1;
  margin-bottom: 16px;

  > img {
    margin: 8px 8px 12px 8px;
    object-fit: cover;
    width: 80px;
    height: 80px;
    text-align: center;
  }
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    margin-top: 76px;
    background-color: transparent;
    position: absolute;
    right: 18px;
    cursor: pointer;
  }
`
export const Text = styled.div`
  margin: 8px 0 0 0;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 0;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.branco};
  font-weight: bold;
  font-size: 16px;
  margin: 40px 0 16px 0px;
`
export const ButtonCart = styled.button`
  color: ${cores.rosa2};
  background: ${cores.rosa1};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 6px;
  width: 100%;
  cursor: pointer;
`
