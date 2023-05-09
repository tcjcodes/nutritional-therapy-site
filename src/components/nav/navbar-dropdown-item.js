import { NavbarDropdown, NavbarItem } from 'bloomer'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

const NavbarDropdownItem = ({ text, to, items, style, activeStyle }) => (
  <NavbarItem
    data-testid={`nav-dropdown-menu--${text}`}
    hasDropdown
    isHoverable
  >
    <Link
      className="navbar-link"
      to={`/${to || items[0].to}`}
      style={style}
      activeStyle={activeStyle}
    >
      {text}
    </Link>

    <NavbarDropdown>
      {items.map((item) => (
        <NavbarItem key={item.id || item.to}>
          <Link
            data-testid={`nav-dropdown-link--${item.id}`}
            to={`/${item.to}`}
            style={style}
            activeStyle={activeStyle}
          >
            {item.text}
          </Link>
        </NavbarItem>
      ))}
    </NavbarDropdown>
  </NavbarItem>
)

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
    })
  ),
}

export default NavbarDropdownItem
