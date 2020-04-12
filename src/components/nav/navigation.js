import { Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, Title } from 'bloomer';
import React from 'react';
import { secondaryFont, serifFont } from '../../utils/fonts';
import { colorBrownDark, colorGreen, colorGreenDark, MaxBreakpoints } from '../../utils/theme-variables';
import NavbarDropdownItem from './navbar-dropdown-item';
import StyledNavbarItem from './styled-navbar-item';
import { Link } from 'gatsby';

const linkProps = {
    style: {
        // ...secondaryFont,
        color: colorGreenDark,
        borderBottom: `2px solid transparent`,
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    activeStyle: {
        // color: colorBrownDark,
    }
};

const clientsNavItems = [
    {
        text: 'Forms',
        to: 'client-forms'
    },
    {
        text: 'Lab Testing',
        to: 'labs'
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
        <React.Fragment>
            {/*<DesktopBrand title={title}/>*/}
            <Navbar
                style={{
                    // ...serifFont,
                    // textTransform: 'lowercase',
                    background: 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  maxWidth: MaxBreakpoints.DESKTOP,
                  margin: '0 auto',
                }}
            >
                <NavbarBrand>
                    <NavbarBurger
                        isActive={isOpen}
                        onClick={onMenuClick}
                    />

                    <NavbarItem
                    >
                        <Title style={{ fontSize: '1.5rem', }}>
                            <Link
                                to="/"
                                css={{
                                    ...secondaryFont,
                                    color: colorGreenDark,
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: colorGreen
                                    }
                                }}
                            >
                                Willow Grace Wellness
                            </Link>
                        </Title>
                    </NavbarItem>
                </NavbarBrand>
                {/*<TabletNavbarBrand
                    isOpen={isOpen}
                    onMenuClick={onMenuClick}
                    title={title}
                />*/}

                <NavbarMenu
                    style={{ justifyContent: 'flex-end' }}
                    isActive={isOpen}
                    onClick={onMenuClick}
                >
                    {/*<NavbarMenu
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: MaxBreakpoints.TABLET,
                        margin: '0 auto',
                    }}
                    isActive={isOpen}
                    onClick={onMenuClick}
                >*/}
                    <StyledNavbarItem {...linkProps} text="About"/>
                    <StyledNavbarItem {...linkProps} text="Services"/>
                    <NavbarDropdownItem
                        {...linkProps}
                        text="Clients"
                        items={clientsNavItems}
                    />
                    <NavbarDropdownItem
                        {...linkProps}
                        text="Favorites"
                        to="products"
                        items={productNavItems}
                    />
                    <StyledNavbarItem {...linkProps} text="Contact"/>
                </NavbarMenu>
            </Navbar>
        </React.Fragment>
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
