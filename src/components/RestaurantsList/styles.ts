import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  li {
    @media (max-width: 768px) {
      margin: auto;
    }
  }
`
