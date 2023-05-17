import { Navbar } from 'react-bulma-components';
import React from 'react';
import { serifFont } from '../../utils/fonts';
import { colorBrownDark } from '../../utils/theme-variables';
import DesktopBrand from './desktop-brand';
import NavbarDropdownItem from './navbar-dropdown-item';
import StyledNavbarItem from './styled-navbar-item';
import TabletNavbarBrand from './tablet-navbar-brand';

const linkProps = {
  css: {
    '&&': {
      color: colorBrownDark,
      borderBottom: `0px`,
      '&:hover': {
        backgroundColor: 'transparent',
        color: colorBrownDark,
      },
      '&:active': {
        backgroundColor: 'transparent',
        color: colorBrownDark,
      },
    },
  },
};

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

        <Navbar.Menu
          data-testid='desktop-navbar'
          style={{ justifyContent: 'center' }}
          isActive={isOpen}
          onClick={onMenuClick}
        >
          <StyledNavbarItem {...linkProps} text='About' />

          <StyledNavbarItem {...linkProps} text='Services' />

          <StyledNavbarItem
            {...linkProps}
            text='Testimonials'
            to='testimonials'
          />

          <NavbarDropdownItem
            {...linkProps}
            text='Favorites'
            to='products'
            items={productNavItems}
          />
          <StyledNavbarItem
            {...linkProps}
            text='New Clients'
            to='new-clients'
          />
          <StyledNavbarItem {...linkProps} text='Labs' to='labs' />

          <StyledNavbarItem {...linkProps} text='Contact' />
        </Navbar.Menu>
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
