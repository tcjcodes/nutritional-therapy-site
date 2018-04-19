import React from 'react';

const ProductCardColumn = ({ children }) => (
  <div
    css={{
      margin: '1rem',
      width: '250px',
    }}
  >
    {children}
  </div>
);

export default ProductCardColumn;
