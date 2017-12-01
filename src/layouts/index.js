import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './theme.scss';
import { Container, Footer, Navbar, NavbarItem } from 'bloomer'
import { secondaryFont, serifFont } from '../utils/fonts'

const StyledNavbarItem = ({ text }) =>
    <NavbarItem style={{ ...serifFont, textTransform: 'lowercase', }}>
        <Link to={`#${text.toLowerCase()}`}>{text}</Link>
    </NavbarItem>

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>Nutritional Therapy</title>
        </Helmet>
        <Navbar style={{ justifyContent: 'center' }}>
            <StyledNavbarItem text="About"/>
            <StyledNavbarItem text="Favorites"/>

            <NavbarItem isClearfix={true}>
                <Link to="/" css={{ ...secondaryFont, fontSize: '2.5em' }}>
                    NT
                </Link>
            </NavbarItem>

            <StyledNavbarItem text="BeautyCounter"/>
            <StyledNavbarItem text="Contact"/>
        </Navbar>
        <div>{children()}</div>
        <Footer style={{ background: 'transparent' }}>
            <Container hasTextAlign='centered'>
                &copy; Copyright CDLR {(new Date().getFullYear())}.
            </Container>
        </Footer>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
