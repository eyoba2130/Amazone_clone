import React from 'react';
import numeral from 'numeral';
const CurrencyFormatter = ({ amount, currency = 'USD' }) => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
};

export default CurrencyFormatter;