import { Content } from 'bloomer';
import PropTypes from 'prop-types';
import React from 'react';

const Headline = ({ children }) => <h3 data-testid="quote">{children}</h3>;
const TestimonialContent = ({ headline, children, name }) => (
  <Content data-testid="testimonial">
    <Headline>{headline}</Headline>
    {children}
    <p>&mdash; {name}</p>
  </Content>
);

TestimonialContent.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.element,
  name: PropTypes.string.isRequired,
};

export default TestimonialContent;
