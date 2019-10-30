import { Column } from "bloomer";
import React from "react";
import ProductCard from "./product-card";
import PropTypes from "prop-types";

const ProductCardColumn = ({ slug, thumbnail, title, excerpt }) => (
  <Column isSize={{ desktop: 2, mobile: 12 }}>
    <ProductCard
      slug={slug}
      thumbnail={thumbnail}
      title={title}
      excerpt={excerpt}
    />
  </Column>
);

ProductCardColumn.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string
};
export default ProductCardColumn;
