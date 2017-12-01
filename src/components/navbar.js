import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import { secondaryFont } from '../utils/fonts'

const Navbar = () => (
  <nav className="navbar is-light">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item" css={{ ...secondaryFont, fontSize: '2em' }}>
        NT
      </Link>
    </div>
    <div className="navbar-start">
    </div>
    <div className="navbar-end">
      <a className="navbar-item" href="#about">
        About
      </a>
      <a className="navbar-item" href="#services">
        Services
      </a>
      <a className="navbar-item" href="#favorites">
        Favorites
      </a>
      <a className="navbar-item" href="#contact">
        Contact
      </a>
    </div>
  </nav>
);

Navbar.propTypes = {}

export default Navbar

