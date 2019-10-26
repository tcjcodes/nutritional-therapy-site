import { Navbar, NavbarMenu, } from 'bloomer';
import React from 'react';
import { serifFont } from '../utils/fonts';
import DesktopBrand from './nav/desktop-brand';
import ProductsDropdownItem from './nav/products-dropdown-item';
import StyledNavbarItem from './nav/styled-navbar-item';
import TabletNavbarBrand from './nav/tablet-navbar-brand';

const Navigation = ({ onMenuClick, isOpen, categoryNodes, title }) => {
  return (
    <div>
      <DesktopBrand title={title} />
      <Navbar
        style={{
          ...serifFont,
          textTransform: 'lowercase',
          background: 'transparent',
        }}
      >
        <TabletNavbarBrand
          isOpen={isOpen}
          onMenuClick={onMenuClick}
          title={title}
        />

        <NavbarMenu
          style={{ justifyContent: 'center' }}
          isActive={isOpen}
          onClick={onMenuClick}
        >
          <StyledNavbarItem text="About" />

          <ProductsDropdownItem text="Labs" categoryNodes={categoryNodes} />

          <StyledNavbarItem text="Services" />
          <StyledNavbarItem text="Forms" to="patient-forms" />
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
