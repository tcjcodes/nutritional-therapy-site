import { Box, Column, Columns, Container, Section } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import TestimonialImage from '../components/testimonials/TestimonialImage';
import TestimonialContent from '../components/testimonials/TestimonialContent';

const pageTitle = 'Testimonials';

const Testimonial = ({ image, content }) => {
  return (
    <React.Fragment>
      {image}
      <Box>{content}</Box>
    </React.Fragment>
  );
};

const TestimonialsPage = ({ data }) => {
  const { crystalFile, katieFile, shellyFile, wFile, site } = data;
  const siteTitle = site.siteMetadata.title;

  const crystalFluid = crystalFile?.childImageSharp?.gatsbyImageData;
  const shellyFluid = shellyFile?.childImageSharp?.gatsbyImageData;
  const katieFluid = katieFile?.childImageSharp?.gatsbyImageData;
  const wFluid = wFile?.childImageSharp?.gatsbyImageData;

  const colSize = { mobile: 'full', tablet: 'half' };

  return (
    <Layout>
      <Section>
        <Helmet title={`${pageTitle} | ${siteTitle}`} />
        <Container>
          <PageHeader center title={pageTitle} />
          <Columns isMultiline isVCentered={false}>
            <Column isSize={colSize}>
              <Testimonial
                image={
                  <TestimonialImage
                    aspectRatio={16 / 9}
                    image={wFluid}
                    alt="Birds flying across a stone-lined beach with a lifehouse"
                    title="Photo by Mohammad Husaini on Pexels.com"
                  />
                }
                content={
                  <TestimonialContent
                    headline="Left with a more peaceful state of mind and a clearer
                    path to physical recovery"
                    name="W."
                  >
                    <p>
                      APN, Applied Psycho-Neurobiology, is nothing I had ever
                      heard of when it was presented to me as part of a healing
                      protocol. APN was explained to me as a means to tap into
                      suppressed emotions that could lead to chronic disease. I
                      was diagnosed with cancer of the prostate, a condition
                      that afflicted my father and two uncles. I grew up with
                      the idea that a family history of prostate cancer made me
                      genetically prone to having it myself. In addition, my
                      childhood was filled with suppressed emotions. APN proved
                      to be a very effective and powerful means to uncover deep,
                      unconscious beliefs, emotions and tendencies that may well
                      have contributed to my disease. Through APN, I am working
                      toward resolving these issues which is contributing to my
                      healing.
                    </p>
                    <p>
                      I was surprised at the various techniques involved in APN.
                      These techniques included a form of muscle testing, eye
                      movement, color therapy, the utilization of Bach Flower
                      Remedies and a particular type of tapping technique (MFT).
                      This combination of techniques seemed to be a very
                      comprehensive way of leading me to delve into my
                      unconscious in order to release traumas that could cause
                      chronic illness. My own APN experience included an
                      overwhelming wave of emotion that felt like a release of
                      responsibility I had felt for much of my lifetime. Until
                      then, I had no clue of the negative impact that particular
                      sense of responsibility had on my emotional and physical
                      well-being. The affirmations I worked with, the journaling
                      I was encouraged to do and the “dialogues” I held with
                      ancestors left me with a more peaceful state of mind and a
                      clearer path to physical recovery.
                    </p>
                    <p>
                      APN helped me discover generational patterns in myself and
                      older relatives such as unfulfilled yearnings and
                      compulsive behavior. I now recognize that these things
                      need to be resolved for my own healing and to prevent them
                      from being passed on to my children and my children’s
                      children. I experienced a great sense of relief and
                      resolution that I no longer am responsible for burdens
                      placed on me as a child, which will no doubt go a long way
                      toward my emotional and physiological healing. APN is a
                      therapy that I would certainly consider again in the
                      future and would recommend most highly.
                    </p>
                  </TestimonialContent>
                }
              />
            </Column>

            <Column isSize={colSize}>
              <Testimonial
                image={
                  <TestimonialImage
                    image={katieFluid}
                    alt="Boat on ocean overlooking sunset"
                    title="Photo by Mantas Hesthaven on Pexels.com"
                  />
                }
                content={
                  <TestimonialContent
                    headline="The most powerful session I've ever experienced"
                    name="Katie B."
                  >
                    <p>
                      I recently completed my first session with Caroline and
                      have felt different ever since. I have described the
                      session to others as "the most powerful session I've ever
                      experienced," and I've been going to counseling over the
                      course of many years for unresolved trauma.
                    </p>
                    <p>
                      She tailored the treatment to what I need as an
                      individual. She listened to me and conceptualized my
                      feelings and beliefs better than I could myself. We
                      completed a family constellation for two specific
                      timelines in my past the the energy has literally shifted;
                      I am not the same person energetically now that I was when
                      I walked into her office. I consider it a miracle.
                    </p>

                    <p>
                      Caroline is a magic worker, and I cherish her and her
                      mind. I would highly recommend her to anyone seeking
                      authentic healing.
                    </p>
                  </TestimonialContent>
                }
              />

              <Testimonial
                image={
                  <TestimonialImage
                    image={shellyFluid}
                    alt="Stone beach overlooking a sunset"
                    title="Photo by Quang Nguyen Vinh on Pexels.com"
                  />
                }
                content={
                  <TestimonialContent
                    headline="I released burdens that were never mine to carry"
                    name="Shelly J."
                  >
                    <p>
                      I recently had 2 sessions with Caroline doing APN. We
                      addressed many family issues that had been affecting me my
                      whole life.
                    </p>
                    <p>
                      After our sessions, I felt lighter! I felt like I'd
                      released burdens that were never mine to carry. I also had
                      a deep feeling of compassion and forgiveness towards my
                      parents. I would recommend [working] with Caroline for
                      anyone wanting to improve their lives.
                    </p>
                  </TestimonialContent>
                }
              ></Testimonial>
            </Column>

            <Column isSize={colSize}>
              <Testimonial
                image={
                  <TestimonialImage
                    image={crystalFluid}
                    alt="Pink petaled flowers"
                    title="Photo by Victor Freitas on Pexels.com"
                  />
                }
                content={
                  <TestimonialContent
                    headline="I have been able to heal physically, mentally and emotionally"
                    name="Crystal D."
                  >
                    <p>
                      "I have worked with Caroline for over a year now
                      throughout my stage 4 metastatic breast cancer diagnosis
                      and treatment. Caroline has really helped me remove many
                      generational and internal emotional and trauma blocks so
                      that I have been able to heal physically, mentally and
                      emotionally.
                    </p>
                    <p>
                      The work that Caroline has done with me has been more
                      healing for me than any other emotional or energetic
                      avenue I have taken in my journey thus far. I have been
                      able to accept and embrace my journey because of Caroline
                      and I will forever be so grateful for the compassion,
                      understanding and time that she has given me. I HIGHLY
                      recommend Caroline to anyone who is ready for a
                      breakthrough."
                    </p>
                  </TestimonialContent>
                }
              ></Testimonial>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
};

TestimonialsPage.propTypes = {};

export const query = graphql`
  query TestimonialsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    crystalFile: file(
      relativePath: { eq: "pexels-victor-freitas-600114.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
    katieFile: file(
      relativePath: { eq: "pexels-mantas-hesthaven-536812_widecrop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
    shellyFile: file(
      relativePath: { eq: "pexels-quang-nguyen-vinh-3871703_widecrop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
    wFile: file(
      relativePath: { eq: "pexels-mohammad-husaini-149576535-12878304.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
  }
`;

export default TestimonialsPage;
