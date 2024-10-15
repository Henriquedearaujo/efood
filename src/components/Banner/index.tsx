import * as S from './styles'

export type Props = {
  menu: Restaurants
}

const Banner = ({ menu }: Props) => {
  return (
    <S.BannerImg style={{ backgroundImage: `url(${menu.capa})` }}>
      <div className="container">
        <S.Tipo>{menu.tipo}</S.Tipo>
        <S.Titulo>{menu.titulo}</S.Titulo>
      </div>
    </S.BannerImg>
  )
}

export default Banner
