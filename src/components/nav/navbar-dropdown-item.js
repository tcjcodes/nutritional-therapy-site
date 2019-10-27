import { NavbarDropdown, NavbarItem } from 'bloomer'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

const NavbarDropdownItem = ({ text, to, items }) => (
  <NavbarItem hasDropdown isHoverable>
    {/*<NavbarLink style={{ paddingRight: "2em" }}>

    </NavbarLink>*/}
    <Link className="navbar-link" to={`/${to}`}>
      {text}
    </Link>

    <NavbarDropdown>
      {items.map(item => (
        <NavbarItem key={item.id || item.to}>
          <Link to={`/${item.to}`}>{item.text}</Link>
        </NavbarItem>
      ))}
    </NavbarDropdown>
  </NavbarItem>
);

NavbarDropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  )
};

export default NavbarDropdownItem;
