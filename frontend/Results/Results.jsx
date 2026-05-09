
import React, { useEffect, useState } from 'react'; 
import './Results.css';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router';
import { productUrl } from '../../Api/Endpoeints';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/Product/ProductCard';

export default function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then(res => {
        console.log(res);
        setResults(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [categoryName]); 

  return (
    <Layout>
      <h1 style={{ padding: '30px' }}>Results</h1>
      <p>Category/{categoryName}</p>
      
      <div className="products-container"> 
        {loading ? (<Loader />) : (
          results?.map(product => (
          <ProductCard key={product.id} product={product} />
        )))}
      </div>
    </Layout>
  );
}