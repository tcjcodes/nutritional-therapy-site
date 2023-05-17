import { Navbar } from 'react-bulma-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const StyledNavbarItem = ({ to, text, ...otherProps }) => (
  <Navbar.Item
    href={`/${to || text.toLowerCase()}`}
    renderAs={({ href, ...otherRenderProps }) => (
      <Link {...otherRenderProps} to={href} />
    )}
    {...otherProps}>
    {text}
  </Navbar.Item>
);

StyledNavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
};

export default StyledNavbarItem;
