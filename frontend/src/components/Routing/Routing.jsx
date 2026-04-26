import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../../pages/Auth/Signup'
import Cart from '../../pages/Cart/Cart'
import Orders from '../../pages/Orders/Orders'
import Results from '../../pages/Results/Results'
import ProductDetail from '../../pages/ProductDetail/ProductDetail'
import Landing from '../../pages/Landing/Landing'
import Payment from '../../pages/Payment/Payment'

export default function Routing() {
  return (
    <Router>
        <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/results" element={<Results />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/signin" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

   
