/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuRestaurants from '../../components/MenuRestaurants'
import { useGetMenuRestaurantQuery } from '../../service/api'

const restaurnt = () => {
  const { id } = useParams()
  const { data: menu } = useGetMenuRestaurantQuery(id!)

  if (menu) {
    return (
      <>
        <Header restauranrantsMenu={false} />
        <Banner />
        <MenuRestaurants menu={menu.cardapio} />
      </>
    )
  }

  return <h3>Carregando</h3>
}

export default restaurnt
