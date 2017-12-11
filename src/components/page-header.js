import React from 'react'
import { secondaryFont, serifFont, serifFontBold } from '../utils/fonts'
import { Title } from 'bloomer'
import {
  colorBrown,
  colorBrownDark,
  colorGreenDark,
} from '../utils/theme-variables'

const PageHeader = ({ title }) => (
  <div css={{ textAlign: 'center', }}>
    <Title
      isSize={1}
      hasTextColor='dark'
      style={{
        ...secondaryFont,
        textTransform: 'lowercase',
        marginBottom: '0.5rem',
      }}
    >
      {title}
    </Title>
  </div>
)

export default PageHeader
