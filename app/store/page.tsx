import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/storepage/Banner/Banner'
import Scooter from '../components/storepage/Scooter/Scooter'
import OrderNow from '../components/storepage/Products/OrderNow'

function page() {
  return (
    <Layout>   <Banner/>
  <OrderNow/></Layout>

  )
}

export default page