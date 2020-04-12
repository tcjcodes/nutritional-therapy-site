import React from 'react'
import { secondaryFont, serifFont } from '../utils/fonts';
import { Title } from 'bloomer'

const PageHeader = ({ title, center }) => (
  <div css={{ textAlign: center ? 'center' : 'inherit', }}>
    <Title
        isSize={3}
        style={{
            // fontWeight: 'bold',
            letterSpacing: '2px',
        }}
    >
      {title}
    </Title>
  </div>
)

export default PageHeader
