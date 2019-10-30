import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ href, css, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" css={css}>
    {text || href}
  </a>
);

export default ExternalLink;

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string,
    css: PropTypes.object,
};
