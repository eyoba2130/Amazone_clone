import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Carousel from './components/Carousel/Carousel'
import Catagory from './components/Catagoory/Catagory'
import Product from './components/Product/Product'

function App() {


  return (
    <>
      <Header />
      <Carousel />
      <Catagory />
      <Product />
    </>
  )
}

export default App
