import React from 'react';
import PropTypes from 'prop-types';

const DownloadLink = ({ href, css, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" css={css}>
    {text || href}
  </a>
);

export default DownloadLink;

DownloadLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  css: PropTypes.object,
};
