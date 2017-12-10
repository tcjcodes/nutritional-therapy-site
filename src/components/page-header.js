import React from 'react'
import { serifFontBold } from '../utils/fonts'
import { Title } from 'bloomer'
import { colorGreenDark } from '../utils/theme-variables'

const PageHeader = ({ title }) => (
  <div
    css={{
      marginBottom: '1.75em',
    }}
  >
    <Title
      isSize={3}
      hasTextColor="dark"
      style={{
        ...serifFontBold,
      }}
    >
      {title}
    </Title>
    <div
      css={{
        width: '2em',
        marginTop: '1.25em',
        borderBottom: `2px solid ${colorGreenDark}`,
      }}
    />
  </div>
)

// PageHeader.propTypes = {
// }

export default PageHeader
