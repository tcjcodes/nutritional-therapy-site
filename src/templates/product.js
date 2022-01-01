import {
  Box,
  Button,
  Column,
  Columns,
  Container,
  Content,
  Image,
  Section,
  Title,
} from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import BreadcrumbLink from '../components/shared/breadcrumb-link';
import Layout from '../components/layout';
import StyledIcon from '../components/shared/styled-icon';
import { secondaryFont } from '../utils/fonts';

const pageTitle = 'Favorites';
export default function ProductTemplate({ data }) {
  const siteTitle = data.site.siteMetadata.title;

  const { markdownRemark: post } = data;
  const { image, link, title, category } = post.frontmatter;
  let hyperlink = link.indexOf('http') >= 0 ? link : `http://${link}`;

  return (
    <Layout>
      <Section className="section">
        <Helmet title={`${category} ${pageTitle} | ${siteTitle}`} />
        <Container style={{ maxWidth: 800 }}>
          <Columns isVCentered isCentered>
            <Column
              isSize={{ desktop: 6, mobile: 12 }}
              style={{ marginBottom: '1em' }}
            >
              <Box
                style={{
                  margin: '0 0.5rem 0.5rem 0',
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid gainsboro',
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
                  text={`${pageTitle.toLowerCase()}`}
                  arrowDirection="left"
                />
                <BreadcrumbLink
                  to={`/product-categories/${post.fields.categoryKey}`}
                  text={`${category} ${pageTitle.toLowerCase()}`}
                  arrowDirection="left"
                />

                <Title
                  data-testid="product-title"
                  style={{ ...secondaryFont, marginBottom: '0.75rem' }}
                  isSize={2}
                  hasTextColor="dark"
                >
                  {title}
                </Title>
              </div>
              <Button
                isLink
                style={{ margin: '1em 0' }}
                isColor="primary"
                href={hyperlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIcon name="external-link" />
                Buy Item
              </Button>
            </Column>
          </Columns>

          <Content
            data-testid="product-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Container>
      </Section>
    </Layout>
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
