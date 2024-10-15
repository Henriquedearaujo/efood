/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuRestaurants from '../../components/MenuRestaurants'
import { useGetMenuRestaurantQuery } from '../../service/api'
import Loader from '../../components/Loader'
import ScrollToTop from '../../components/ScrollToTop'

type RestaurantParams = {
  id: string
}

const restaurnt = () => {
  const { id } = useParams() as RestaurantParams
  const { data: menu } = useGetMenuRestaurantQuery(id)

  if (!menu) {
    return <Loader />
  }
  return (
    <>
      <Header restauranrantsMenu={false} />
      <ScrollToTop />
      <Banner menu={menu} />
      <MenuRestaurants menu={menu.cardapio} />
    </>
  )
}

export default restaurnt
