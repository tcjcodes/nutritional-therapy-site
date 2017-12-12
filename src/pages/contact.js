import React from 'react'
import Img from 'gatsby-image'
import {
    Box,
    Button,
    Column,
    Columns,
    Container,
    Content,
    Control,
    Field,
    FieldBody,
    FieldLabel,
    Heading,
    Input,
    Modal,
    ModalBackground,
    ModalCard,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalCardTitle,
    Section,
    Select,
    TextArea,
} from 'bloomer'
import PageHeader from '../components/page-header'

class FormsButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  handleClick = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <div>
        <Button
          style={{ margin: `1rem 0` }}
          isSize="small"
          isColor="primary"
          isOutlined={true}
          onClick={this.handleClick}
        >
          <span className="fa fa-book" style={{ marginRight: '0.5rem' }} />
          Review Forms
        </Button>

        <Modal isActive={this.state.showModal}>
          <ModalBackground onClick={this.handleClick} />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>
                <Heading style={{ marginBottom: 0 }}>Documents</Heading>
              </ModalCardTitle>
            </ModalCardHeader>
            <ModalCardBody>
              <Content>
                <p>
                  Single origin, eu coffee robusta dripper milk espresso at
                  irish, redeye saucer, brewed cup in sit coffee. Turkish
                  barista acerbic black id, café au lait robust grinder organic,
                  seasonal beans latte strong filter. Half and half, galão,
                  seasonal frappuccino shop cup, trifecta cup iced, shop irish
                  single shot est medium kopi-luwak americano barista grounds.
                  Bar mazagran milk dripper froth, grinder brewed aromatic
                  mazagran in kopi-luwak mug aromatic. Sweet aromatic grinder
                  fair trade, dripper bar plunger pot spoon irish in at, strong
                  aroma flavour, french press so, coffee, galão et qui ristretto
                  affogato lungo. Sit sweet, shop et, cream roast, aromatic est
                  single shot whipped, sugar coffee fair trade iced
                  decaffeinated carajillo breve. Single origin french press
                  americano brewed cortado in caramelization, cappuccino mocha
                  macchiato sweet americano froth ristretto id coffee viennese
                  brewed single shot. Crema coffee brewed white con panna,
                  decaffeinated to go at, steamed java, organic coffee, trifecta
                  ut blue mountain breve organic grinder filter robusta coffee.
                  Aromatic, coffee, to go dark robust frappuccino espresso,
                  java, aftertaste breve redeye, roast variety mug, pumpkin
                  spice and mug, white mug, percolator americano fair trade
                  siphon kopi-luwak. Barista macchiato seasonal, french press,
                  kopi-luwak, con panna body, siphon iced et body viennese
                  sweet, carajillo wings aged, carajillo aged coffee fair trade
                  macchiato.
                </p>
              </Content>
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor="primary" onClick={this.handleClick}>
                OK
              </Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
      </div>
    )
  }
}

class LocationButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  handleClick = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <div>
        <Button
          style={{ margin: `1rem 0` }}
          isSize="small"
          isColor="primary"
          isOutlined={true}
          onClick={this.handleClick}
        >
          <span
            className="fa fa-info-circle"
            style={{ marginRight: '0.5rem' }}
          />more info
        </Button>

        <Modal isActive={this.state.showModal}>
          <ModalBackground onClick={this.handleClick} />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>
                <Heading style={{ marginBottom: 0 }}>Office Location</Heading>
              </ModalCardTitle>
            </ModalCardHeader>
            <ModalCardBody>
              <p>Single origin, eu coffee robusta dripper milk espresso at</p>
              <div css={{ textAlign: 'center' }}>
                <Img resolutions={this.props.img1} />
                <Img resolutions={this.props.img2} />
              </div>
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor="primary" onClick={this.handleClick}>
                OK
              </Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
      </div>
    )
  }
}
const ContactPage = ({ data }) => {
  const res1 = data.image1.childImageSharp.resolutions
  const res2 = data.image2.childImageSharp.resolutions

  return (
    <Section>
      <Container>
        <PageHeader center title="Contact Me" />

        <Columns isMultiline={true}>
          <Column isSize={12}>
            <Columns>
              <Column isSize={5} isOffset={1}>
                <Heading>Appointments</Heading>
                <p>
                  If you're interested in booking a consultation, please review
                  these forms before proceeding.
                </p>
                <FormsButton />
              </Column>
              <Column css={{ marginBottom: `1rem` }}>
                <Heading>Office Address</Heading>
                <address>280 North 8th Street</address>
                <address>Suite #118</address>
                <address>Boise, ID 83702</address>
                <LocationButton img1={res1} img2={res2} />
              </Column>

              <Column css={{ marginBottom: `1rem` }}>
                <Heading>Office Hours</Heading>
                <dl>
                  <dt>Mon - Fri</dt>
                  <dd>10:00 am - 4:00 pm</dd>
                </dl>
              </Column>
            </Columns>
          </Column>

          <Column isSize={5} isOffset={1} style={{}}>
            <Field>
              <FieldBody>
                <Field isGrouped>
                  <Control isExpanded hasIcons="right">
                    <Input isSize="small" placeholder="First Name*" />
                  </Control>
                </Field>
                <Field>
                  <Control hasIcons={['right']}>
                    <Input isSize="small" placeholder="Last Name" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>

            <Field>
              <Control>
                <Input isSize="small" type="text" placeholder="Email*" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Select isSize="small">
                  <option selected disabled>
                    Subject of Message*
                  </option>
                  <option>Questions</option>
                  <option>Book Consultation</option>
                  <option>Other</option>
                </Select>
              </Control>
            </Field>

            <Field>
              <FieldLabel />
              <FieldBody>
                <Field>
                  <Control>
                    <TextArea isSize="small" placeholder="Message*" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>

            <Field>
              <FieldBody>
                <Field>
                  <Control>
                    <Button isColor="primary">
                      <span
                        className="fa fa-envelope"
                        style={{ marginRight: '0.5rem' }}
                      />send message
                    </Button>
                  </Control>
                </Field>
              </FieldBody>
            </Field>
          </Column>
          <Column isSize={5}>
            <Box style={{ height: '320px' }}>Lorem ipsum</Box>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export const query = graphql`
  query ContactPageQuery {
    image1: file(relativePath: { eq: "contact/bldg1.jpg" }) {
      childImageSharp {
        resolutions(width: 315, height: 230) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    image2: file(relativePath: { eq: "contact/bldg2.jpg" }) {
      childImageSharp {
        resolutions(width: 315, height: 230) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`

export default ContactPage
