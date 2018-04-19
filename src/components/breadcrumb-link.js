import React from 'react';
import { serifFont } from '../utils/fonts';
import { colorGreenDark } from '../utils/theme-variables';
import StyledIcon from './styled-icon';
import Link from 'gatsby-link';

const BreadcrumbLink = ({ to, text }) => (
  <Link
    style={{
      ...serifFont,
      fontSize: '1.2rem',
      color: colorGreenDark,
    }}
    to={to}
  >
    <StyledIcon
      styles={{ margin: `0 0.5rem 1.5rem 0.5rem` }}
      name='angle-left'
    />
    {text}
  </Link>
);

export default BreadcrumbLink

