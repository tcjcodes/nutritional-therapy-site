import React from 'react'
import Link from 'gatsby-link';
import { Navbar, NavbarItem } from 'bloomer'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorDark } from '../utils/theme-variables'

const StyledNavbarItem = ({ to, text }) => (
    <NavbarItem style={{}}>
        <Link to={`/${to || text.toLowerCase()}/`}>{text}</Link>
    </NavbarItem>
)

const Line = () => (
    <div css={{ margin: '1em auto 2em auto', width: '3em', borderBottom: '1px solid gainsboro', }}>
    </div>
)

const Navigation = () => (
    <div>
        <div css={{ width: '100%', textAlign: 'center', paddingTop: '1.5em', }}>
            <Link to='/' css={{
                ...secondaryFont, fontSize: '3em', letterSpacing: '1px', color: colorDark,
                '&:hover': { color: colorDark },
            }}>
                CDL Nutritional Therapy
            </Link>
        </div>
        <Navbar style={{
            ...serifFont, textTransform: 'lowercase', fontSize: '1.25em',
            background: 'transparent', justifyContent: 'center',
        }}>
            <StyledNavbarItem text='About' />
            <StyledNavbarItem text='Favorites'/>
            <StyledNavbarItem text='BeautyCounter'/>

            <StyledNavbarItem text='Services'/>
            <StyledNavbarItem text='Book'/>
            <StyledNavbarItem text='Contact'/>
        </Navbar>
    </div>
);

Navigation.propTypes = {}

export default Navigation

