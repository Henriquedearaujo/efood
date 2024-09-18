/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'

export const Card = styled.div<Omit<Props,'title' | 'category' | 'description' | 'infos' | 'image' | 'imgStar'>>`
background-color: ${cores.branco};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Imagem = styled.div``

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
