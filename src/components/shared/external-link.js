import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ href, css, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" css={css}>
    {children}
  </a>
)

export default ExternalLink

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  css: PropTypes.object,
  children: PropTypes.node.isRequired,
}
