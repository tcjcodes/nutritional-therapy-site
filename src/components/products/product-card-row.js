import { Columns } from 'react-bulma-components';
import React from 'react';

const ProductCardRow = ({ children }) => (
  <Columns multiline centered>
    {children}
  </Columns>
);

export default ProductCardRow;
