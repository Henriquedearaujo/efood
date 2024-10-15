import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: 100%;

  &::after {
    width: 100%;
    height: 280px;
    display: block;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
    margin-top: -253px;
  }
`

export const Tipo = styled.h3`
  font-size: 32px;
  font-style: italic;
  font-weight: 100;
  color: ${colors.white};
  padding-top: 25px;
  line-height: 37px;
  padding-top: -253px;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 155px;
  line-height: 37px;
`
