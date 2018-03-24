import React from 'react'
import PropTypes from 'prop-types'
import { NavbarBrand, NavbarBurger, NavbarItem } from 'bloomer'
import BrandItem from './brand-item'

const TabletNavbarBrand = ({ title, isOpen, onMenuClick }) => (
  <NavbarBrand isHidden="desktop">
    <NavbarBurger
      style={{ marginRight: 'auto', marginLeft: 'inherit' }}
      isActive={isOpen}
      onClick={onMenuClick}
    />

    <NavbarItem style={{ marginRight: 'auto' }}>
      <BrandItem title={title} />
    </NavbarItem>
  </NavbarBrand>
)

TabletNavbarBrand.propTypes = {}

export default TabletNavbarBrand
