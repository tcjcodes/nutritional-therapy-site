import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const TestimonialImage = ({ image, alt, title }) => (
  <React.Fragment>
    {image && (
      <GatsbyImage aspectRatio={16 / 9} image={image} alt={alt} title={title} />
    )}
  </React.Fragment>
);

TestimonialImage.propTypes = {
  alt: PropTypes.string.isRequired,
  /**
   * The image data object, returned from the gatsbyImageData resolver.
   */
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default TestimonialImage;
