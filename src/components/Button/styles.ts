import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.rosa2};
  background: ${cores.rosa1};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 6px;
  width: 100%;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branco};
  background: ${cores.rosa2};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
