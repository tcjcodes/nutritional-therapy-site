import { Columns } from 'react-bulma-components';
import React from 'react';

const ProductCardRow = ({ children }) => (
  <Columns isMultiline={true} isCentered={true}>
    {children}
  </Columns>
);

export default ProductCardRow;
