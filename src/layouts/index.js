import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './theme.scss';
import bgImg from '../img/noisy/noisy.png'
import Navigation from '../components/navigation'
import PageFooter from '../components/page-footer'

const TemplateWrapper = ({ children }) => (
    <div
        style={{ background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url(${bgImg}) top repeat fixed`}}>
        <Helmet>
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
