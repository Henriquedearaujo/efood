import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderImg = styled.div`
  width: 100%;
  height: 350px;
  display: block;

  img {
    margin-top: 40px;
  }

  p {
    margin-top: 138px;
    font-size: 36px;
    font-weight: bold;
    color: ${cores.rosa2};

    @media (max-width: 425px) {
      margin-top: 80px;
    }
  }

  .container {
    max-width: 540px;
    text-align: center;
    margin: auto;
  }
`
export const HeaderPerfil = styled.div`
  width: 100%;
  height: 186px;
  display: block;

  p {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosa2};
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding-top: 63px;

    @media (max-width: 425px) {
      gap: 12px;
    }
  }
`
export const LinkItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa2};
`
