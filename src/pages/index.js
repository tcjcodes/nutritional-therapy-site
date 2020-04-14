import React from 'react';
import { Container, Navbar, NavbarItem, NavbarMenu, NavbarStart } from 'bloomer';
import styled from '@emotion/styled';
import StyleCacheProvider from '../components/StyleCacheProvider';
import { cx, css } from 'emotion';
import '../layouts/theme.scss';

const StyledNavbarItem = styled(NavbarItem)`
    color: orange;
`;

const OrangeRule = css`
    color: orange;
`;
const NavbarItemWithCx = (props) => <NavbarItem {...props}
                                                className={cx(props.className, OrangeRule)}>{props.children}</NavbarItem>;

export default () => (
    <StyleCacheProvider>
        <div id="extra-scope">
            <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                <NavbarMenu>
                    <NavbarStart>
                        <NavbarItem href='#/'>No overrides</NavbarItem>

                        <StyledNavbarItem href='#/'>Use styled</StyledNavbarItem>

                        <NavbarItemWithCx href='#/'>Using cx</NavbarItemWithCx>

                        {/* This one shouldn't work, since NavbarItem isn't passing down css attribute: */}
                        <NavbarItem css={{ color: 'orange' }} href='#/'>CSS on Component</NavbarItem>

                        {/* Inline styles work: */}
                        <NavbarItem style={{ color: 'orange' }} href='#/'>Inline Style</NavbarItem>

                        {/* Doesn't work */}
                        <a href="#/" css={{ color: 'orange' }}>Plain anchor</a>
                    </NavbarStart>
                </NavbarMenu>
            </Navbar>

            <p>
                Expected: Links that are orange, Actual: Links that are colored from the SCSS stylesheets. Seems to work
                without pre
            </p>
        </div>
    </StyleCacheProvider>
);
