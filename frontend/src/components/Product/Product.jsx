import React, { useEffect, useState} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import './productCard.css'
import Loader from '../Loader/Loader';
function Product() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                loading?(<Loader />):(
                    <div className='product'>
                      
                        {product?.map((singleProduct) => (
                            <ProductCard key={singleProduct.id} product={singleProduct}
                            renderAdd={true}/>
                
            ))} 
                    </div>
                )
            }
            
            </>
      
  )
}

export default Product