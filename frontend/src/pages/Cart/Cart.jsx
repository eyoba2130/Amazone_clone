

import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/Product/ProductCard'; 
import { useValue } from '../../components/DataProvider/DataProvider';
import './Cart.css';
import { Link } from 'react-router-dom';
import CurrencyFormatter from '../../components/CurrencyFormant/CurrencyFormant';

export default function Cart() {
  const [{ basket, user }, dispatch] = useValue();

  // የገንዘቡን ድምር በትክክል ለማስላት (initial value 0 መጨመር አለበት)
  const total = basket.reduce((amount, item) => {
    return item.price*item.amount + amount;
  }, 0);

  return (
    <Layout>
      <section className="cart">
        <div className="cart-container">
          <h2>Hello {user?.displayName || 'Guest'}</h2>
          <h3>Your Shopping basket</h3>
          <hr />
          
          {basket.length === 0 ? (
            <p>Your shopping basket is empty</p>
          ) : (
            <>
              <div>
                {basket.map((item, i) => (
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false} 
                    flex={true}
                  />
                ))}
              </div>

              <div className="cart-subtotal">
                <div>
                  <p>Subtotal ({basket.length} items)</p>
                  <CurrencyFormatter amount={total} />
                </div>
                <span>
                  <input type="checkbox" id="gift" />
                  <label htmlFor="gift"> This order contains gift cards</label>
                </span>
                <br />
                <Link className="checkout-btn" to="/payment">Continue to Checkout</Link>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
