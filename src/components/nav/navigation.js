import { Navbar, NavbarMenu } from 'bloomer';
import React from 'react';
import { serifFont } from '../../utils/fonts';
import { colorBrownDark } from '../../utils/theme-variables';
import DesktopBrand from './desktop-brand';
import NavbarDropdownItem from './navbar-dropdown-item';
import StyledNavbarItem from './styled-navbar-item';
import TabletNavbarBrand from './tablet-navbar-brand';

const linkProps = {
  style: {
    color: colorBrownDark,
    borderBottom: `2px solid transparent`,
  },
  activeStyle: {
    color: colorBrownDark,
  },
};

const clientsNavItems = [
  {
    text: 'Forms',
    to: 'client-forms',
  },
  {
    text: 'Lab Testing',
    to: 'labs',
  },
];

const Navigation = ({ onMenuClick, isOpen, categoryNodes, title }) => {
  const productNavItems = categoryNodes.map((node) => {
    return {
      id: node.id,
      text: node.frontmatter.name,
      to: `product-categories/${node.fields.categoryKey}`,
    };
  });
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
          data-testid="desktop-navbar"
          style={{ justifyContent: 'center' }}
          isActive={isOpen}
          onClick={onMenuClick}
        >
          <StyledNavbarItem {...linkProps} text="About" />
          <StyledNavbarItem {...linkProps} text="Services" />

          <NavbarDropdownItem
            {...linkProps}
            text="Favorites"
            to="products"
            items={productNavItems}
          />
          <StyledNavbarItem
            {...linkProps}
            text="New Clients"
            to="client-forms"
          />
          <StyledNavbarItem {...linkProps} text="Labs" to="labs" />
          {/*<NavbarDropdownItem*/}
          {/*  {...linkProps}*/}
          {/*  text="Clients"*/}
          {/*  items={clientsNavItems}*/}
          {/*/>*/}
          <StyledNavbarItem {...linkProps} text="Contact" />
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
