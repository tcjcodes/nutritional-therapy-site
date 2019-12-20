import {
  Button,
  Container,
  Content,
  Section,
  HeroBody,
  Title,
  Hero
} from "bloomer";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";

const ServicesPage = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const { markdownRemark: post } = data;
  const heroSizes = data.file.childImageSharp.fluid;

  return (
    <Layout>
      <Helmet title={`Services | ${title}`} />

      <Hero
        isColor="dark"
        style={{
          marginTop: "1.25em",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        <Img
          style={{
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center center",
            width: "100%",
            height: "100%",
            opacity: "0.3"
          }}
          fluid={heroSizes}
          alt="Herbs, turmeric, chopping board"
        />
        <HeroBody>
          <Container hasTextAlign="centered">
            <div>
              {/*<PageHeader title="services" center />*/}

              <Title isSize={4}>Services</Title>
            </div>
          </Container>
        </HeroBody>
      </Hero>
      <Section>
        <Container style={{ maxWidth: 800 }}>

          <div css={{ marginBottom: `2rem` }}>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <div css={{ textAlign: "center" }}>
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
    file(relativePath: { eq: "image0.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
