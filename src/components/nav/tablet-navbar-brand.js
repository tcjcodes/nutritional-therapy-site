import React from 'react'
import PropTypes from 'prop-types'
import { NavbarBrand, NavbarBurger, NavbarItem } from 'bloomer'
import BrandItem from './brand-item'

const TabletNavbarBrand = ({ title, isOpen, onMenuClick }) => (
  <NavbarBrand data-testid="tablet-brand" isHidden="desktop">
    <NavbarBurger
      style={{ marginRight: 'auto', marginLeft: 'inherit' }}
      isActive={isOpen}
      onClick={onMenuClick}
    />

    <NavbarItem
      style={{ marginRight: 'auto', maxWidth: '90%', lineHeight: '80%' }}
    >
      <BrandItem size={2} title={title} />
    </NavbarItem>
  </NavbarBrand>
)

TabletNavbarBrand.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
}

export default TabletNavbarBrand
