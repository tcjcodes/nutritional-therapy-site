import { Navbar } from 'react-bulma-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const NavbarDropdownItem = ({ text, to, items, style, activeStyle }) => (
  <Navbar.Item
    data-testid={`nav-dropdown-menu--${text}`}
    arrowless
    hoverable
  >
    <Navbar.Link
      className='navbar-link'
      href={`/${to || items[0].to}`}
      css={style}
      activeStyle={activeStyle}
      renderAs={({ href, ...otherProps }) => <Link {...otherProps}
                                                   to={href} />}>
      {text}
    </Navbar.Link>

    <Navbar.Dropdown>
      {items.map((item) => (
        <Navbar.Item key={item.id || item.to}
                     arrowless
                     data-testid={`nav-dropdown-link--${item.id}`}
                     href={`/${item.to}`}
                     css={style}
                     activeStyle={activeStyle}
                     renderAs={({ href, ...otherProps }) =>
                       <Link {...otherProps}
                             to={href} />}>
          {item.text}
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
