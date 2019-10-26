import { Section } from 'bloomer'
import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Section hasTextAlign="centered">
      <h1 className="subtitle">NOT FOUND</h1>
      <p>Page not found</p>
    </Section>
  </Layout>
);

export default NotFoundPage;
