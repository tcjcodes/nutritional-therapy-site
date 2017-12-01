import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './theme.scss';
import { Nav, Navbar, NavbarEnd, NavbarItem, NavbarMenu, NavbarStart, NavCenter } from 'bloomer'
import { secondaryFont } from '../utils/fonts'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>Nutritional Therapy</title>
            <link href="https://fonts.googleapis.com/css?family=Over+the+Rainbow" rel="stylesheet"/>
        </Helmet>
        <Navbar style={{ justifyContent: 'center' }}>
            <NavbarItem>
                <Link to='#about'>About</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='#services'>Services</Link>
            </NavbarItem>
            <NavbarItem isClearfix={true}>
                <Link to="/" css={{ ...secondaryFont, fontSize: '2em' }}>
                    NT
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='#favorites'>Favorites</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='#contact'>Contact</Link>
            </NavbarItem>
        </Navbar>
        <div>{children()}</div>
        <footer className="footer is-small">
            <div css={{ textAlign: 'center', }} className="container">
                &copy; Copyright {(new Date().getFullYear())}.
            </div>
        </footer>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
