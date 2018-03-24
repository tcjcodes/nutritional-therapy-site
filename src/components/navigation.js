import React from 'react'
import Link from 'gatsby-link'
import { Navbar, NavbarDropdown, NavbarItem, NavbarLink, Title } from 'bloomer'
import { secondaryFont, serifFont } from '../utils/fonts'
import {
  colorBrownDark,
  colorGreen,
  colorGreenDark,
} from '../utils/theme-variables'

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
      to={`/${to || text.toLowerCase()}/`}
    >
      {text}
    </Link>
  </NavbarItem>
)

const Navigation = ({ categoryNodes }) => {
  return (
    <div>
      <div
        css={{
          width: '100%',
          marginBottom: `0.5rem`,
          textAlign: 'center',
          paddingTop: '1.5em',
        }}
      >
        <Title>
          <Link
            to="/"
            css={{
              ...secondaryFont,
              color: colorGreen,
              textTransform: 'inherit',
              '&:hover': {
                color: colorGreenDark,
              },
            }}
          >
            CDLR Nutritional Therapy
          </Link>
        </Title>
      </div>
      <Navbar
        style={{
          ...serifFont,
          textTransform: 'lowercase',
          background: 'transparent',
          justifyContent: 'center',
        }}
      >
        <StyledNavbarItem text="About" />
        <NavbarItem hasDropdown isHoverable>
          <NavbarLink href="/products" style={{ paddingRight: '2em' }}>
            Products
          </NavbarLink>
          <NavbarDropdown style={{}}>
            {categoryNodes.map(node => (
              <NavbarItem
                key={node.id}
                href={`/product-categories/${node.fields.categoryKey}`}
              >
                {node.frontmatter.name}
              </NavbarItem>
            ))}
          </NavbarDropdown>
        </NavbarItem>
        <StyledNavbarItem text="BeautyCounter" />

        <StyledNavbarItem text="Services" />
        <StyledNavbarItem text="Contact" />
      </Navbar>
    </div>
  )
}
Navigation.propTypes = {}

export default Navigation
