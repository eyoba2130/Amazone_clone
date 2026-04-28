import React from 'react'
import './catagoryCard.css'
import { Link } from 'react-router-dom'
export default  function CatagoryCard({ data })
 {
  return (
      <div className='category-card'>
          <Link to={`category/${data.name}`}>
              <span><h2>{data.title}</h2></span>
              <img src={data.imgLink} alt={data.title} />
              <p>shop now</p>
          </Link>  
    </div>
  )
}

