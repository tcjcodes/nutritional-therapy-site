import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Box, Heading } from 'bloomer'
import Dotdotdot from 'react-dotdotdot'
import { serifFont } from '../utils/fonts'
import {
  colorBrown,
  colorBrownDark,
  colorGreenDark,
} from '../utils/theme-variables'

const cardWrapperStyles = {
  position: 'relative',
  width: '100%',
  color: colorBrown,
}
const cardImageStyles = thumbnail => ({
  display: 'block',
  height: '300px',
  overflowY: 'hidden',
  background: `url(${thumbnail}) center no-repeat`,
  backgroundSize: 'cover',
})
const cardOverlayStyles = {
  padding: '1em',
  overflowY: 'hidden',
  position: 'absolute',
  top: '70%',
  height: '30%',
  left: '0',
  width: '100%',
  background: 'rgba(245,245,245,0.85)',
  hasTextAlign: 'center',
  transition: 'all 0.3s',
  '&:hover': {
    height: '100%',
    top: '0',
    background: 'rgba(245,245,245,0.95)',
  },
}
const headingStyles = {
  ...serifFont,
  lineHeight: '120%',
  color: colorGreenDark,
  marginBottom: 0,
  fontSize: '1.25rem',
}
const titleBorderStyles = {
  margin: `1rem 0`,
  borderBottom: `1px solid rgb(79, 109, 26)`,
  width: `1.75rem`,
  padding: 0,
}
const excerptStyles = {
  fontSize: `1rem`,
  textTransform: 'none',
  color: colorBrownDark,
}

const ProductCard = ({ slug, thumbnail, title, excerpt }) => (
  <div>
    <div css={cardWrapperStyles}>
      <Box style={{ padding: '0.5em' }}>
        <Link to={slug} css={cardImageStyles(thumbnail)} />
        <div css={cardOverlayStyles}>
          <Heading>
            <Dotdotdot clamp={4}><Link css={headingStyles} to={slug}>{title}</Link></Dotdotdot>
          </Heading>
          <div css={titleBorderStyles} />
          <div css={excerptStyles}>
            <Dotdotdot clamp={5}>
              <p>{excerpt}</p>
            </Dotdotdot>
          </div>
        </div>
      </Box>
    </div>
  </div>
)

ProductCard.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
}

export default ProductCard
