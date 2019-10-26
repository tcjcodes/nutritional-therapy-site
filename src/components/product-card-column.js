import React from 'react';

const ProductCardColumn = ({ children }) => (
  <div
    css={{
      // margin: '0.5rem',
      width: '20%',
    }}
  >
    {children}
  </div>
);

export default ProductCardColumn;
