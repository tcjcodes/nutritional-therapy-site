import React from 'react'
import {
    Box,
    Button,
    Column,
    Columns,
    Container,
    Content,
    Heading,
    Modal,
    ModalBackground,
    ModalCard,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalCardTitle,
    Section,
} from 'bloomer'
import PageHeader from '../components/page-header'
import ContactForm from '../components/contact-form'
import OfficeMap from '../components/office-map'

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


const ContactPage = ({}) => {
  return (
    <Section>
      <Container>
        <PageHeader center title="Contact Us" />

        <Columns isMultiline={true}>
          <Column isSize={10} isOffset={1}>
            <Box style={{ marginBottom: '2em', }}>
              <OfficeMap/>
            </Box>
          </Column>
          <Column isSize={7} isOffset={1} style={{ paddingRight: '2rem' }}>
            <Heading>send a message</Heading>
            <ContactForm />
          </Column>
          <Column isSize={3}>
            <div>
              <Heading>appointments</Heading>
              <p>
                If you're interested in booking a consultation, please review
                these forms before proceeding.
              </p>
              <FormsButton />
            </div>
            <div css={{ marginBottom: '1rem' }}>
              <Heading>address</Heading>

              <address>280 North 8th Street</address>
              <address>Suite #118</address>
              <address>Boise, ID 83702</address>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default ContactPage
