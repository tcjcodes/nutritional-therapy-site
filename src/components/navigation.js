import { Navbar, NavbarMenu } from "bloomer";
import React from "react";
import { serifFont } from "../utils/fonts";
import { colorBrownDark, colorGreen } from "../utils/theme-variables";
import DesktopBrand from "./nav/desktop-brand";
import NavbarDropdownItem from "./nav/navbar-dropdown-item";
import StyledNavbarItem from "./nav/styled-navbar-item";
import TabletNavbarBrand from "./nav/tablet-navbar-brand";

const linkProps = {
  style: {
    color: colorBrownDark,
    borderBottom: `2px solid transparent`
  },
  activeStyle: {
    color: colorBrownDark,
  }
};

const clientsNavItems = [
  {
    text: "Forms",
    to: "client-forms"
  },
  {
    text: "Lab Testing",
    to: "labs"
  }
];

const Navigation = ({ onMenuClick, isOpen, categoryNodes, title }) => {
  const productNavItems = categoryNodes.map(node => {
    return {
      id: node.id,
      text: node.frontmatter.name,
      to: `product-categories/${node.fields.categoryKey}`
    };
  });
  return (
    <div>
      <DesktopBrand title={title} />
      <Navbar
        style={{
          ...serifFont,
          textTransform: "lowercase",
          background: "transparent"
        }}
      >
        <TabletNavbarBrand
          isOpen={isOpen}
          onMenuClick={onMenuClick}
          title={title}
        />

        <NavbarMenu
          style={{ justifyContent: "center" }}
          isActive={isOpen}
          onClick={onMenuClick}
        >
          <StyledNavbarItem {...linkProps} text="About" />
          <NavbarDropdownItem
            {...linkProps}
            text="Products"
            to="products"
            items={productNavItems}
          />
          <StyledNavbarItem {...linkProps} text="Services" />
          <NavbarDropdownItem
            {...linkProps}
            text="Clients"
            items={clientsNavItems}
          />
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
      isOpen: !prevIsOpen
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
