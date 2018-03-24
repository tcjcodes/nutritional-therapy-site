import { NavbarItem } from 'bloomer'
import React from 'react'
import { colorBrownDark, colorGreen } from '../../utils/theme-variables'
import Link from 'gatsby-link'

const linkStyles = {
  color: colorBrownDark,
  borderBottom: `2px solid transparent`,
}
const activeLinkStyles = {
  color: colorBrownDark,
  borderBottom: `2px solid ${colorGreen}`,
}

const StyledNavbarItem = ({ to, text }) => (
  <NavbarItem>
    <Link
      style={linkStyles}
      activeStyle={activeLinkStyles}
      to={`/${to || text.toLowerCase()}`}
    >
      {text}
    </Link>
  </NavbarItem>
)

StyledNavbarItem.propTypes = {}

export default StyledNavbarItem
