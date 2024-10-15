export const getTotalPrice = (items: MenuInterface[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}

export const ParseToBRL = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getMenuDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 250) + '...'
  }
  return descricao
}

export const getResDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice() + '...'
  }
  return descricao
}
