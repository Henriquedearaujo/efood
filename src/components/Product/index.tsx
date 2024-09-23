import {
  Avaliacao,
  AvProduct,
  Card,
  Descricao,
  Div,
  TagInfos,
  Titulo
} from './styles'

import Button from '../Button'
import Tag from '../Tag'

export type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  imgStar: string
  boderColor?: 'null' | 'pink'
  btnStyles?: boolean
}

const Product = ({
  title,
  category,
  description,
  infos,
  image,
  imgStar,
  btnStyles
}: Props) => (
  <Card>
    <img src={image} alt="" />
    <TagInfos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </TagInfos>
    <Div>
      <AvProduct>
        <Titulo>{title}</Titulo>
        <Avaliacao>
          {category}
          <img src={imgStar} />
        </Avaliacao>
      </AvProduct>
      <Descricao>{description}</Descricao>
      {btnStyles ? (
        <Button type="link" to="/perfil" title={'Adiciona ao carrinho'}>
          Comprar
        </Button>
      ) : (
        <Button type="link" to="/perfil" title={'Saiba mais'}>
          saiba mais
        </Button>
      )}
    </Div>
  </Card>
)

export default Product
