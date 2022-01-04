import { Container, Footer } from 'bloomer';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const PageFooter = ({ title, logoImg }) => (
  <Footer style={{ background: 'transparent', padding: '5em 3em 3em 3em' }}>
    <Container hasTextAlign="centered">
      <div css={{ marginBottom: '1rem' }}>
        <Img fixed={logoImg} alt="Restorative Wellness Practitioner seal" />
      </div>
      &copy; Copyright {title} 2020-{new Date().getFullYear()}.
    </Container>
  </Footer>
);

PageFooter.propTypes = {
  title: PropTypes.string.isRequired,
  logoImgFluid: PropTypes.any.isRequired,
};

export default PageFooter;
