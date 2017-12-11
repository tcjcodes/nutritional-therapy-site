import React from 'react'
import { secondaryFont } from '../utils/fonts'
import { Title } from 'bloomer'

const PageHeader = ({ title, center }) => (
  <div css={{ textAlign: center ? 'center' : 'inherit' }}>
    <Title
      isSize={1}
      hasTextColor="dark"
      style={{
        ...secondaryFont,
        textTransform: 'lowercase',
        marginBottom: '0.75rem',
      }}
    >
      {title}
    </Title>
  </div>
)

export default PageHeader
