import React from 'react'
import { secondaryFont } from '../utils/fonts'
import { Title } from 'bloomer'

const PageHeader = ({ title, center }) => (
  <div data-testid="page-header" css={{ textAlign: center ? 'center' : 'inherit' }}>
    <Title
      isSize={2}
      css={{
        ...secondaryFont,
        marginBottom: '0.75rem',
      }}
    >
      {title}
    </Title>
  </div>
)

export default PageHeader
