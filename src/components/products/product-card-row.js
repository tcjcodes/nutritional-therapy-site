import { Columns } from 'bloomer';
import React from 'react';

const ProductCardRow = ({ children }) => (
  <Columns isMultiline={true} isCentered={true}>
    {children}
  </Columns>
);

export default ProductCardRow;
