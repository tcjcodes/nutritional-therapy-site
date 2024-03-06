import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bulma-components';
import BrandItem from './brand-item';

const TabletNavbarBrand = ({ title, isOpen, onMenuClick }) => (
  <Navbar.Brand data-testid='tablet-brand'
                desktop={{ invisible: true, display: 'hidden' }}>

    <Navbar.Burger
      style={{ marginRight: 'auto', marginLeft: 'inherit' }}
      isActive={isOpen}
      onClick={onMenuClick}
    />

    <Navbar.Item
      style={{ marginRight: 'auto', maxWidth: '90%', lineHeight: '80%' }}
    >
      <BrandItem size={2} title={title} />
    </Navbar.Item>
  </Navbar.Brand>
);

TabletNavbarBrand.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default TabletNavbarBrand;
