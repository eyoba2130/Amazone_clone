import React, { useEffect,useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router';
import axios from 'axios';
import { productUrl } from '../../Api/Endpoeints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';
// import Loader from '../../components/Loader/Loader';
export default function ProductDetail() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [productId]);
  return (
    <Layout>
      {loading ? (<Loader />) :
        (<ProductCard product={product}
          flex={true}
          renderDesc={true}
        />)}
      
      
      </Layout>
  )
}
