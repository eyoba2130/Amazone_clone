import React from 'react';
import CatagoryCard from './CatagoryCard';
import { categoryInfos } from './catagoryFullinfo';
import './category.css'

function Category() {
  return (
    <div className="category">
      <div className="category-container">
        {categoryInfos.map((category, index) => (
          <CatagoryCard key={index} data={category} />
        ))}
      </div>
    </div>
  );
}
export default Category

