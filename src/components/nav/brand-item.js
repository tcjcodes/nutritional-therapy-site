import React from 'react'
import PropTypes from 'prop-types'
import { Title } from 'bloomer'
import Link from 'gatsby-link'
import { secondaryFont } from '../../utils/fonts'
import { colorGreen, colorGreenDark } from '../../utils/theme-variables'

const BrandItem = ({ title }) => (
  <Title>
    <Link
      to="/"
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
  </Title>
)

BrandItem.propTypes = {}

export default BrandItem
