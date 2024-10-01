/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Pizza from '../../assets/images/pizza.png'
import Menu from '../../model/Menu'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuRestaurants from '../../components/MenuRestaurants'
import { Restaurants } from '../Home'

const restaurnt = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])
  return (
    <>
      <Header usePerfil={false} />
      <Banner />
      <MenuRestaurants menu={menu} />
    </>
  )
}

export default restaurnt
