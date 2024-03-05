import { Navbar } from 'react-bulma-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const StyledNavbarItem = ({ to, text, style, activeStyle }) => (
  <Navbar.Item>
    <Link
      style={style}
      activeStyle={activeStyle}
      to={`/${to || text.toLowerCase()}`}
    >
      {text}
    </Link>
  </Navbar.Item>
);

StyledNavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
};

export default StyledNavbarItem;
