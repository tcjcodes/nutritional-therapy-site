import React from 'react'
import {
    Button,
    Content,
    Heading,
    Modal,
    ModalBackground,
    ModalCard,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalCardTitle
} from 'bloomer'
import StyledIcon from './styled-icon'

class FormsButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showModal: false }
    }

    handleClick = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
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
                    <StyledIcon name="book" />
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

FormsButton.propTypes = {
}

export default FormsButton;

