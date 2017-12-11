import React from 'react'
import Link from 'gatsby-link'
import { Navbar, NavbarItem, Title } from 'bloomer'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorGreenDark, } from '../utils/theme-variables'

const StyledNavbarItem = ({ to, text }) => (
  <NavbarItem style={{ }}>
    <Link activeStyle={{ color: colorGreenDark, borderBottom: `1px solid ${colorGreenDark}` }} to={`/${to || text.toLowerCase()}/`}>{text}</Link>
  </NavbarItem>
)

const Navigation = () => (
  <div>
    <div css={{ width: '100%', marginBottom: `0.5rem`, textAlign: 'center', paddingTop: '1.5em' }}>
      <Title>
        <Link
          to="/"
          css={{
            ...secondaryFont,
          }}
        >
          CDL Nutritional Therapy
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
      <StyledNavbarItem text="Favorites" />
      <StyledNavbarItem text="BeautyCounter" />

      <StyledNavbarItem text="Services" />
      <StyledNavbarItem text="Contact" />
    </Navbar>
  </div>
)

Navigation.propTypes = {}

export default Navigation
