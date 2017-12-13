import React from 'react'
import Img from 'gatsby-image'
import { Box, Button, Column, Columns, Container, Section } from 'bloomer'
import PageHeader from '../components/page-header'

const BeautyCounterPage = ({ data }) => {
  const sizes = data.file.childImageSharp.sizes
  return (
    <Section>
      <Container>
        <Columns isVCentered={true}>
          <Column isSize={5} isOffset={1}>
            <PageHeader title="What is BeautyCounter?" />
            <div>
              <p css={{ marginBottom: '2em', marginRight: '1.5em' }}>
                BeautyCounter is lorem ipsum. The last time you had a
                cheeseburger was too long ago. Try not to drool when you think
                about the slightly charred, medium-rare meat nestled between
                soft brioche, cradled in crisp iceberg lettuce and flavour
                amplifying condiments.
              </p>
              <Button
                isColor="primary"
                href="https://www.beautycounter.com/carolinedelos-reyes"
              >
                <span
                  className="fa fa-shopping-bag"
                  style={{ marginRight: '0.5rem' }}
                />shop BeautyCounter
              </Button>
            </div>
          </Column>
          <Column isSize={5}>
            <Box>
              <Img sizes={sizes} />
            </Box>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

BeautyCounterPage.propTypes = {}

export const query = graphql`
  query BeautycounterPageQuery {
    file(relativePath: { eq: "beauty/alex-mihis-33693.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default BeautyCounterPage
