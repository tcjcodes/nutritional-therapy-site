import { Button, Container, Content, Hero, HeroBody, Section, Subtitle, Title } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import { MaxBreakpoints } from '../utils/theme-variables';

const ServicesPage = ({ data }) => {
    const { title } = data.site.siteMetadata;
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <Helmet title={`Services | ${title}`}/>

            <Hero
                isColor="dark"
                isSize="medium"
                style={{
                    marginTop: '1rem',
                    marginBottom: '1.5rem',
                    background: `url("/img/home-gardening-young-rucola-top-view-6427.jpg") no-repeat fixed bottom`,
                }}
            >
                <HeroBody style={{
                    backgroundColor: `rgba(0, 0, 0, 0.5)`
                }}>
                    <PageHeader title="Services" center/>
                </HeroBody>
            </Hero>

            <Section>
                <Container style={{ maxWidth: MaxBreakpoints.DESKTOP }}>

                    <div css={{ marginBottom: `2rem` }}>
                        <Content dangerouslySetInnerHTML={{ __html: post.html }}/>
                    </div>

                    <div css={{ textAlign: 'center' }}>
                        <Button isColor="primary" href="/contact/">
              <span
                  className="fa fa-calendar"
                  css={{ marginRight: `0.5rem` }}
              />
                            Request an Appointment
                        </Button>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
};

export const query = graphql`
                    query ServicesPage($slug: String!) {
                    site {
                    siteMetadata {
                    title
                }
                }
                    markdownRemark(fields: {slug: {eq: $slug}}) {
                    html
                    fields {
                    slug
                }
                    frontmatter {
                    title
                }
                }
                }
                    `;

export default ServicesPage;
