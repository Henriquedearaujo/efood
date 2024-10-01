import {
  Avaliacao,
  AvProduct,
  Card,
  Descricao,
  Div,
  TagInfos,
  Titulo
} from './styles'

import imgStar from '../../assets/images/estrela.png'

import Button from '../Button'
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

const Product = ({
  id,
  title,
  assessment,
  description,
  type,
  highlight,
  image
}: Props) => {
  return (
    <Card>
      <img src={image} alt="" />
      <TagInfos>
        {highlight && <Tag>Destaque do dia</Tag>}
        <Tag>{type}</Tag>
      </TagInfos>
      <Div>
        <AvProduct>
          <Titulo>{title}</Titulo>
          <Avaliacao>
            {assessment}
            <img src={imgStar} />
          </Avaliacao>
        </AvProduct>
        <Descricao>{description}</Descricao>
        <Button type="link" to={`/restaurante/${id}`} title={'Saiba mais'}>
          saiba mais
        </Button>
      </Div>
    </Card>
  )
}

export default Product
