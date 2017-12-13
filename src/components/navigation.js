import React from 'react'
import Link from 'gatsby-link'
import { Navbar, NavbarItem, Title } from 'bloomer'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorBrownDark, colorGreen, colorGreenDark, } from '../utils/theme-variables'

const StyledNavbarItem = ({ to, text }) => (
  <NavbarItem style={{}}>
    <Link
      style={{
        color: colorBrownDark,
        borderBottom: `2px solid transparent`,
      }}
      activeStyle={{
        color: colorBrownDark,
        borderBottom: `2px solid ${colorGreen}`,
      }}
      to={`/${to || text.toLowerCase()}/`}
    >
      {text}
    </Link>
  </NavbarItem>
)

const Navigation = () => (
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
