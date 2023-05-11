import { Navbar } from 'react-bulma-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const StyledNavbarItem = ({ to, text, style, activeStyle }) => (
  <Navbar.Item
    href={`/${to || text.toLowerCase()}`}
    style={style}
    activeStyle={activeStyle}
    renderAs={({ href, ...otherProps }) => <Link {...otherProps} to={href} />}>
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
