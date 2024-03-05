import { Container, Footer } from 'react-bulma-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const PageFooter = ({ title, logoImg }) => (
  <Footer style={{ background: 'transparent', padding: '4em 3em 3em 3em' }}>
    <Container hasTextAlign='centered'>
      <div css={{
        marginBottom: '0.25rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <GatsbyImage image={logoImg}
                     alt='Restorative Wellness Practitioner seal' />
      </div>
      &copy; Copyright {title} 2020-{new Date().getFullYear()}.
    </Container>
  </Footer>
);

PageFooter.propTypes = {
  title: PropTypes.string.isRequired,
  logoImg: PropTypes.any.isRequired,
};

export default PageFooter;
