import React from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  Title,
  withHelpersModifiers,
} from 'bloomer'
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

const BrandItem = ({ title }) => (
  <Title>
    <Link
      to="/"
      css={{
        ...secondaryFont,
        color: colorGreen,
        textTransform: 'none',
        '&:hover': {
          color: colorGreenDark,
        },
      }}
    >
      {title}
    </Link>
  </Title>
)

const Navigation = ({ onMenuClick, isOpen, categoryNodes, title }) => {
  return (
    <div>
      <div
        className="is-hidden-touch"
        css={{
          width: '100%',
          marginBottom: `0.5rem`,
          textAlign: 'center',
          paddingTop: '1.5em',
        }}
      >
        <BrandItem title={title} />
      </div>
      <Navbar
        style={{
          ...serifFont,
          textTransform: 'lowercase',
          background: 'transparent',
        }}
      >
        <NavbarBrand isHidden="desktop">
          <NavbarBurger
            style={{ marginRight: 'auto', marginLeft: 'inherit' }}
            isActive={isOpen}
            onClick={onMenuClick}
          />

          <NavbarItem style={{ marginRight: 'auto' }}>
            <BrandItem title={title} />
          </NavbarItem>
        </NavbarBrand>

        <NavbarMenu
          style={{ justifyContent: 'center' }}
          isActive={isOpen}
          onClick={onMenuClick}
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
        </NavbarMenu>
      </Navbar>
    </div>
  )
}

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  onMenuClick = () => {
    this.setState(({ isOpen: prevIsOpen }) => ({
      isOpen: !prevIsOpen,
    }))
  }

  render() {
    return (
      <Navigation
        isOpen={this.state.isOpen}
        onMenuClick={this.onMenuClick}
        {...this.props}
      />
    )
  }
}

export default NavigationContainer
