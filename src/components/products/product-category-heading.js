import { Heading } from 'bloomer'
import React from 'react'
import { serifFont } from '../../utils/fonts'
import { colorBrown } from '../../utils/theme-variables'

const ProductCategoryHeading = ({ children }) => (
  <Heading
    hasTextAlign="centered"
    style={{
      ...serifFont,
      lineHeight: '120%',
      color: colorBrown,
      margin: '1rem 0',
      fontSize: '1.75rem',
    }}
  >
    {children}
  </Heading>
)

export default ProductCategoryHeading

ProductCategoryHeading.propTypes = {}
