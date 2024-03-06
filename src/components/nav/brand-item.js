import { Heading } from 'react-bulma-components';
import { Link } from 'gatsby';
import React from 'react';
import { secondaryFont } from '../../utils/fonts';
import { colorGreen, colorGreenDark } from '../../utils/theme-variables';

const BrandItem = ({ title, size = 1 }) => (
  <Heading size={size} textAlign='centered'>
    <Link
      to='/'
      css={{
        ...secondaryFont,
        color: colorGreen,
        textTransform: 'none',
        '&:hover': {
          color: colorGreenDark,
        },
      }}
    >
      {title}
    </Link>
  </Heading>
);

BrandItem.propTypes = {};

export default BrandItem;
