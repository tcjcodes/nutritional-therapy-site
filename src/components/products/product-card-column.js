import React from 'react';
import ProductCard from './product-card';
import PropTypes from 'prop-types';
import { Columns } from 'react-bulma-components';

const ProductCardColumn = ({ slug, thumbnail, title, excerpt }) => (
  <Columns.Column isSize={{ desktop: 2, mobile: 12 }}>
    <ProductCard
      slug={slug}
      thumbnail={thumbnail}
      title={title}
      excerpt={excerpt}
    />
  </Columns.Column>
);

ProductCardColumn.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
};
export default ProductCardColumn;
