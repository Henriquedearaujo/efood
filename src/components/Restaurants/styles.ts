/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
background-color: ${colors.white};
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
  color: ${colors.Salmon};
  display: block;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${colors.Salmon};
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Div = styled.div`
  border: solid 1px;
  border-top: none;
  padding-left: 8px;
  border-color: ${colors.Salmon};
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
  color: ${colors.Salmon};

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
export const ButtonLink = styled(Link)`
  color: ${colors.white};
  background: ${colors.Salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
