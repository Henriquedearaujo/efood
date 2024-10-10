/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
background-color: ${cores.branco};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    > img {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
      width: 100%;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa2};
  display: block;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.rosa2};
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Div = styled.div`
  border: solid 1px;
  border-top: none;
  padding-left: 8px;
  border-color: ${cores.rosa2};
  margin-top: -4px;
  padding: 8px;

  @media (max-width: 768px) {
    width: 472px;
  }

  @media (max-width: 425px) {
      width: 100%;
  }
`
export const Avaliacao = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa2};

  img {
    margin-left: 8px;
  }
`
export const AvProduct = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TagInfos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
