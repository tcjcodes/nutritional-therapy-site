import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './theme.scss';
import bgImg from '../img/noisy/noisy.png'
import favicon from '../img/favicon.png'
import Navigation from '../components/navigation'
import PageFooter from '../components/page-footer'

const TemplateWrapper = ({ children }) => (
    <div
        style={{
            minHeight: '100vh',
            background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url(${bgImg}) top repeat fixed`
        }}>
        <Helmet>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            <title>Nutritional Therapy</title>
        </Helmet>
        <Navigation/>
        <div>{children()}</div>
        <PageFooter/>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
