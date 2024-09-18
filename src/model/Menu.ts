class Menu {
  id: number
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  imgStar: string

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    infos: string[],
    image: string,
    imgStar: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.imgStar = imgStar
  }
}

export default Menu
