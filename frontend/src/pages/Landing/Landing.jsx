import React from 'react'
import Carousel  from '../../components/Carousel/Carousel'
import Catagory from '../../components/Catagoory/Catagory'
import Product from '../../components/Product/Product'
import Layout from '../../components/Layout/Layout'

function Landing() {
  return (
      <Layout>
          <Carousel />
          <Catagory />
           <Product />
          
    </Layout>
  )
}

export default Landing