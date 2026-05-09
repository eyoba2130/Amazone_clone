
// import React, { useContext } from 'react';
// import Rating from '@mui/material/Rating';
// import CurrencyFormat from '../CurrencyFormant/CurrencyFormant';
// import './productCard.css';
// import { Link } from 'react-router-dom';
// import { useValue } from '../DataProvider/DataProvider';

// function ProductCard({ product, flex ,renderDesc}) {
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const { image, id, title, price, rating, discription } = product;
//   const [state, dispatch] = useValue();
//   console.log(state)
//   const addToCart = () => {
//     dispatch(
//       {
//         type: Type.ADD_TO_BASKET,
//         item: {
//            image, id, title, price, rating, discription
//         }
//       }
//     )
//   }

//   return (
//     <div className={`product-card ${flex ? 'product__flex' : ''}`}>
//       <Link to={`/product/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div>{ discription}</div>}

//         <div>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} readOnly />

//           {/* count */}
//           <small>{rating.count}</small>
//         </div>
//       </div>

//       <div>
//         {/* price */}
//         <CurrencyFormat amount={price} />
//       </div>

//       <button onClick={addToCart}>Add to Cart</button>

//     </div>
//   );
// }

// export default ProductCard;


import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormant/CurrencyFormant';
import './productCard.css';
import { Link } from 'react-router-dom';
// በ ProductCard.jsx ውስጥ
import { useValue } from '../DataProvider/DataProvider';


import { Type } from '../../utility/action.type'; 

function ProductCard({ product, flex, renderDesc ,renderAdd}) {
  if (!product) {
    return <div>Loading...</div>;
  }

  const { image, id, title, price, rating, discription } = product;

 
const [state, dispatch] = useValue(); 
  console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, id, title, price, rating, discription
      }
    });
  };

  return (
    <div className={`product-card ${flex ? 'product__flex' : ''}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div>{discription}</div>}

        <div>
          {/* rating - rating  (null check) */}
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <small>{rating?.count}</small>
        </div>
      </div>

      <div>
        <CurrencyFormat amount={price} />
      </div>
      {renderAdd &&

        <button onClick={addToCart} >Add to Cart</button>
      }
    </div>
  );
}

export default ProductCard;
