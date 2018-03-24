import React from 'react';
import Link from 'gatsby-link';
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  Title,
} from 'bloomer';
import { secondaryFont, serifFont } from '../utils/fonts';
import {
  colorBrownDark,
  colorGreen,
  colorGreenDark,
} from '../utils/theme-variables';
import DesktopBrand from './nav/desktop-brand';
import BrandItem from './nav/brand-item';
import StyledNavbarItem from './nav/styled-navbar-item';
import ProductsDropdownItem from './nav/products-dropdown-item';
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
        <TabletNavbarBrand isOpen={isOpen} onMenuClick={onMenuClick} title={title} />

        <NavbarMenu
          style={{ justifyContent: 'center' }}
          isActive={isOpen}
          onClick={onMenuClick}
        >
          <StyledNavbarItem text="About" />

          <ProductsDropdownItem categoryNodes={categoryNodes} />

          <StyledNavbarItem text="BeautyCounter" />
          <StyledNavbarItem text="Services" />
          <StyledNavbarItem text="Contact" />
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  onMenuClick = () => {
    this.setState(({ isOpen: prevIsOpen }) => ({
      isOpen: !prevIsOpen,
    }));
  };

  render() {
    return (
      <Navigation
        isOpen={this.state.isOpen}
        onMenuClick={this.onMenuClick}
        {...this.props}
      />
    );
  }
}

export default NavigationContainer;
