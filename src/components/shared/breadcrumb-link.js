import React from 'react';
import { serifFont } from '../../utils/fonts';
import { colorGreenDark } from '../../utils/theme-variables';
import StyledIcon from './styled-icon';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';

const BreadcrumbLink = ({ to, text, arrowDirection = 'left' }) => (
  <Link
    data-testid="breadcrumb-link"
    style={{
      ...serifFont,
      fontSize: '1.2rem',
      color: colorGreenDark,
    }}
    to={to}
  >
    <StyledIcon
      styles={{ margin: `0 0.5rem 1.5rem 0.5rem` }}
      name={`angle-${arrowDirection}`}
    />
    {text}
  </Link>
);

BreadcrumbLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  arrowDirection: PropTypes.oneOf(['left', 'right']),
};

export default BreadcrumbLink;
