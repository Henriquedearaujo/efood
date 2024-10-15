import styled from 'styled-components'
import { colors } from '../../styles'

export const SideComponent = styled.aside`
  background-color: ${colors.Salmon};
  color: ${colors.LightSalmon};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  display: none;

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
