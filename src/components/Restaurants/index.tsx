import * as S from './styles'

import imgStar from '../../assets/images/estrela.png'

import Tag from '../Tag'

export type Props = {
  id: number
  title: string
  assessment: number
  description: string
  type: string
  highlight: boolean
  image: string
}

const Restaurants = ({
  id,
  title,
  assessment,
  description,
  type,
  highlight,
  image
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt="" />
      <S.TagInfos>
        {highlight && <Tag>Destaque do dia</Tag>}
        <Tag>{type}</Tag>
      </S.TagInfos>
      <S.Div>
        <S.AvProduct>
          <S.Titulo>{title}</S.Titulo>
          <S.Avaliacao>
            {assessment}
            <img src={imgStar} />
          </S.Avaliacao>
        </S.AvProduct>
        <S.Descricao>{description}</S.Descricao>
        <S.ButtonLink
          type="link"
          to={`/restaurante/${id}`}
          title={'Saiba mais'}
        >
          saiba mais
        </S.ButtonLink>
      </S.Div>
    </S.Card>
  )
}

export default Restaurants
