import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormant/CurrencyFormant';
import './productCard.css'
import { Link } from 'react-router';

function ProductCard({ product }) {
    if (!product) {
        return <div>Loading...</div>;
    }
   const { image,id, title, price, rating } = product; 
  return (
      <div className='product-card'>
          <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
          </Link>
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