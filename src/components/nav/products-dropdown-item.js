import { NavbarDropdown, NavbarItem, NavbarLink } from 'bloomer';
import Link, { navigateTo } from 'gatsby-link';
import React from 'react';

const ProductsDropdownItem = ({ categoryNodes }) => (
  <NavbarItem hasDropdown isHoverable>
    <NavbarLink
      onClick={() => navigateTo('/products')}
      style={{ paddingRight: '2em' }}
    >Products</NavbarLink>

    <NavbarDropdown style={{}}>
      {categoryNodes.map((node) => (
        <NavbarItem key={node.id}>
          <Link to={`/product-categories/${node.fields.categoryKey}`}>
            {node.frontmatter.name}
          </Link>
        </NavbarItem>
      ))}
    </NavbarDropdown>
  </NavbarItem>
);

export default ProductsDropdownItem;
