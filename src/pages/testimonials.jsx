import { Box, Column, Columns, Container, Content, Section } from 'bloomer';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';

const Quote = ({ children }) => <h3 data-testid="quote">{children}</h3>;

const Testimonial = ({ children }) => <Content data-testid="testimonial">{children}</Content>;

const pageTitle = 'Testimonials';
const TestimonialsPage = ({ data }) => {
    const { crystalFile, katieFile, shellyFile, site } = data;
    const siteTitle = site.siteMetadata.title;

    const crystalFluid = crystalFile?.childImageSharp?.gatsbyImageData;
    const shellyFluid = shellyFile?.childImageSharp?.gatsbyImageData;
    const katieFluid = katieFile?.childImageSharp?.gatsbyImageData;

    const colSize = { mobile: 'full', tablet: 'half' };
    return (
        <Layout>
            <Section>
                <Helmet title={`${pageTitle} | ${siteTitle}`}/>
                <Container>
                    <PageHeader center title={pageTitle}/>
                    <Columns isMultiline isVCentered={false}>
                        <Column isOffset={{ desktop: 1 }} isSize={colSize}>
                            {katieFluid && (
                                <GatsbyImage
                                    image={katieFluid}
                                    alt="Boat on ocean overlooking sunset"
                                    title="Photo by Mantas Hesthaven on Pexels" />
                            )}
                            <Box>
                                <Testimonial>
                                    <Quote>
                                        The most powerful session I've ever experienced
                                    </Quote>

                                    <p>
                                        I recently completed my first session with Caroline and have
                                        felt different ever since. I have described the session to
                                        others as "the most powerful session I've ever
                                        experienced," and I've been going to counseling over the
                                        course of many years for unresolved trauma.
                                    </p>
                                    <p>
                                        She tailored the treatment to what I need as an individual.
                                        She listened to me and conceptualized my feelings and
                                        beliefs better than I could myself. We completed a family
                                        constellation for two specific timelines in my past the the
                                        energy has literally shifted; I am not the same person
                                        energetically now that I was when I walked into her office.
                                        I consider it a miracle.
                                    </p>

                                    <p>
                                        Caroline is a magic worker, and I cherish her and her mind.
                                        I would highly recommend her to anyone seeking authentic
                                        healing.
                                    </p>
                                    <p>&mdash; Katie B.</p>
                                </Testimonial>
                            </Box>

                            {shellyFluid && (
                                <GatsbyImage
                                    image={shellyFluid}
                                    alt="Stone beach overlooking a sunset"
                                    title="Photo by Quang Nguyen Vinh on Pexels" />
                            )}
                            <Box>
                                <Testimonial>
                                    <Quote>I released burdens that were never mine to carry</Quote>
                                    <p>
                                        I recently had 2 sessions with Caroline doing APN. We
                                        addressed many family issues that had been affecting me my
                                        whole life.
                                    </p>
                                    <p>
                                        After our sessions, I felt lighter! I felt like I'd released
                                        burdens that were never mine to carry. I also had a deep
                                        feeling of compassion and forgiveness towards my parents. I
                                        would recommend [working] with Caroline for anyone wanting to
                                        improve their lives.
                                    </p>
                                    <p>&mdash; Shelly J.</p>
                                </Testimonial>
                            </Box>
                        </Column>

                        <Column isSize={colSize}>
                            {crystalFluid && (
                                <GatsbyImage
                                    image={crystalFluid}
                                    alt="Pink petaled flowers"
                                    title="Photo by Victor Freitas on Pexels" />
                            )}
                            <Box>
                                <Testimonial>
                                    <Quote>
                                        I have been able to heal physically, mentally and
                                        emotionally
                                    </Quote>
                                    <p>
                                        "I have worked with Caroline for over a year now throughout
                                        my stage 4 metastatic breast cancer diagnosis and treatment.
                                        Caroline has really helped me remove many generational and
                                        internal emotional and trauma blocks so that I have been
                                        able to heal physically, mentally and emotionally.
                                    </p>
                                    <p>
                                        The work that Caroline has done with me has been more
                                        healing for me than any other emotional or energetic avenue
                                        I have taken in my journey thus far. I have been able to
                                        accept and embrace my journey because of Caroline and I will
                                        forever be so grateful for the compassion, understanding and
                                        time that she has given me. I HIGHLY recommend Caroline to
                                        anyone who is ready for a breakthrough."
                                    </p>
                                    <p>&mdash; Crystal D.</p>
                                </Testimonial>
                            </Box>
                        </Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
};

TestimonialsPage.propTypes = {};

export const query = graphql`query TestimonialsPageQuery {
  site {
    siteMetadata {
      title
    }
  }
  crystalFile: file(relativePath: {eq: "pexels-victor-freitas-600114.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  katieFile: file(
    relativePath: {eq: "pexels-mantas-hesthaven-536812_widecrop.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  shellyFile: file(
    relativePath: {eq: "pexels-quang-nguyen-vinh-3871703_widecrop.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}`;

export default TestimonialsPage;
