import React from 'react';
import PropTypes from 'prop-types';

const StyledIcon = ({ name, styles }) => (
  <span css={{ marginRight: '0.5em', ...styles }} className={`fa fa-${name}`} />
);

StyledIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StyledIcon;
