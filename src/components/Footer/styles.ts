import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa1};
  color: ${cores.rosa2};
  font-size: 10px;
`
export const FooterSection = styled.div`
  max-width: 540px;
  text-align: center;
  margin: auto;
  padding: 40px;
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
  padding: 32px 0 80px;
`
export const Link = styled.a`
  margin-right: 8px;
`
