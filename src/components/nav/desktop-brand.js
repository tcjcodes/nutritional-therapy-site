import React from 'react'
import BrandItem from './brand-item'

const DesktopBrand = ({ title }) => (
  <div
    className="is-hidden-touch"
    css={{
      width: '100%',
      marginBottom: `0.5rem`,
      textAlign: 'center',
      paddingTop: '1.5em',
    }}
  >
    <BrandItem title={title} />
  </div>
)

export default DesktopBrand
