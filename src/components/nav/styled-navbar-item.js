import { NavbarItem } from 'bloomer'
import PropTypes from 'prop-types'
import React from 'react'
import { colorBrownDark, colorGreen } from '../../utils/theme-variables'
import Link from 'gatsby-link'


const StyledNavbarItem = ({ to, text, style, activeStyle }) => (
  <NavbarItem>
    <Link
      style={style}
      activeStyle={activeStyle}
      to={`/${to || text.toLowerCase()}`}
    >
      {text}
    </Link>
  </NavbarItem>
)

StyledNavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
}

export default StyledNavbarItem
