import { Navbar } from 'react-bulma-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const NavbarDropdownItem = ({ text, to, items, style, activeStyle }) => (
  <Navbar.Item
    data-testid={`nav-dropdown-menu--${text}`}
    hasDropdown
    isHoverable
  >
    <Link
      className='navbar-link'
      to={`/${to || items[0].to}`}
      style={style}
      activeStyle={activeStyle}
    >
      {text}
    </Link>

    <Navbar.Dropdown>
      {items.map((item) => (
        <Navbar.Item key={item.id || item.to}>
          <Link
            data-testid={`nav-dropdown-link--${item.id}`}
            to={`/${item.to}`}
            style={style}
            activeStyle={activeStyle}
          >
            {item.text}
          </Link>
        </Navbar.Item>
      ))}
    </Navbar.Dropdown>
  </Navbar.Item>
);

NavbarDropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

export default NavbarDropdownItem;
