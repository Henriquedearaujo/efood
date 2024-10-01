class Menu {
  id: number
  title: string
  highlight: boolean
  type: string
  assessment: number
  description: string
  image: string

  constructor(
    id: number,
    title: string,
    assessment: number,
    description: string,
    type: string,
    highlight: boolean,
    image: string
  ) {
    this.id = id
    this.assessment = assessment
    this.description = description
    this.image = image
    this.type = type
    this.highlight = highlight
    this.title = title
  }
}

export default Menu
