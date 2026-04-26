import React, { useEffect, useState} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import './productCard.css'
function Product() {
    const [product, setProduct] = useState();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProduct(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

  return (
      <div className='product'>
          { product && product.map((singleProduct) => {
              return <ProductCard key={singleProduct.id} product={singleProduct} />;
          })}
      </div>
      
  )
}

export default Product