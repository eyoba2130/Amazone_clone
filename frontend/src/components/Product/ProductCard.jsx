import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormant/CurrencyFormant';
import './productCard.css'

function ProductCard({ product }) {
   const { image,id, title, price, rating } = product; 
  return (
      <div className='product-card'>
          <a href="">
                <img src={image} alt={title} />
          </a>
          <div>
              <h3>
                  {title}
              </h3>  
              <div>
                  {/* rating */}
                  <Rating value={rating.rate} precision={0.1}/>
                  {/* count */}
                  <small>{rating.count} </small>

              </div>
          </div>
          <div>
              {/* price */}
              <CurrencyFormat amount={price} />
          </div>
          <button>Add to Cart</button>
      </div>
      
  )
}

export default ProductCard