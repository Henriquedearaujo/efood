import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

import { useGetRestaurantsQuery } from '../../service/api'
import Loader from '../../components/Loader'
import ScrollToTop from '../../components/ScrollToTop'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header restauranrantsMenu={true} />
        <ScrollToTop />
        <RestaurantsList restaurants={restaurants} isLoading={false} />
      </>
    )
  }
  return <Loader />
}

export default Home
