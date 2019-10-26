import React from 'react';

const ProductCardRow = ({ children }) => (
  <div
    css={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '0.5rem',
      flexWrap: 'wrap',
    }}
  >
    {children}
  </div>
);

export default ProductCardRow;
