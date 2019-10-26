import {
  Box,
  Button,
  Column,
  Columns,
  Container,
  Content,
  Image,
  Section,
  Title
} from "bloomer";
import Link from "gatsby-link";
import React from "react";
import Helmet from "react-helmet";
import BreadcrumbLink from "../components/breadcrumb-link";
import StyledIcon from "../components/styled-icon";
import { secondaryFont } from "../utils/fonts";

export default function ProductTemplate({ data }) {
  const siteTitle = data.site.siteMetadata.title;

  const { markdownRemark: post } = data;
  const { image, link, title, category } = post.frontmatter;
  let hyperlink = link.indexOf("http") >= 0 ? link : `http://${link}`;

  return (
    <Section className="section">
      <Helmet title={`${category} Products | ${siteTitle}`} />
      <Container style={{ maxWidth: 800 }}>
        <Columns isVCentered isCentered>
          <Column
            isSize={{ desktop: 6, mobile: 12 }}
            style={{ marginBottom: "1em" }}
          >
            <Box
              style={{
                margin: "0 0.5rem 0.5rem 0"
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid gainsboro"
                }}
                src={__PATH_PREFIX__ + image}
                alt={title}
              />
            </Box>
          </Column>

          <Column isSize={{ desktop: 6, mobile: 12 }}>
            <div>
              <BreadcrumbLink
                to={`/products`}
                text={`all products`}
                arrowDirection="right"
              />
              <BreadcrumbLink
                to={`/product-categories/${post.fields.categoryKey}`}
                text={`${category} products`}
                arrowDirection="right"
              />

              <Title
                style={{ ...secondaryFont, marginBottom: "0.75rem" }}
                isSize={2}
                hasTextColor="dark"
              >
                {title}
              </Title>
            </div>
            <Button
              style={{ margin: "1em 0" }}
              isColor="primary"
              href={hyperlink}
              target="_blank"
            >
              <StyledIcon name="shopping-bag" />
              Buy Item
            </Button>
          </Column>
        </Columns>

        <div>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Container>
    </Section>
  );
}

export const pageQuery = graphql`
  query ProductByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        categoryKey
      }
      frontmatter {
        title
        category
        link
        image
      }
    }
  }
`;
