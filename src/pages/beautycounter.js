import React from 'react'
import PropTypes from 'prop-types'
import { Button, Column, Columns, Container, Content, Image, Section, Title } from 'bloomer'
import img from '../img/beauty/alex-mihis-33693.jpg'
import { secondaryFont, serifFont } from '../utils/fonts'

const BeautyCounterPage = ({}) => <Section>
    <Container className='container'>
        <Columns isMultiline={true} className='columns' isVCentered={false}>
            <Column isSize={5} isOffset={1}>
                <Title style={{ ...secondaryFont, letterSpacing: '2px', }}
                       isSize={2}
                       hasTextColor='dark'>BeautyCounter</Title>
                <div>
                    <p css={{ marginBottom: '2em', marginRight: '1.5em' }}>BeautyCounter is lorem ipsum. The last time
                        you had a cheeseburger
                        was too long ago. Try not to
                        drool when you think about the slightly charred, medium-rare meat nestled between soft brioche,
                        cradled in crisp iceberg lettuce and flavour amplifying condiments.</p>

                </div>
            </Column>
            <Column isSize={5}>
                <Image isRatio='3:2' src={img}/>
            </Column>
            <Column isSize={12} hasTextAlign='centered' isCentered={true}>
                <Button
                    style={{ marginTop: '1.5em', }}
                    isColor='primary'
                    href='https://www.beautycounter.com/carolinedelos-reyes'>Visit my BeautyCounter</Button>
            </Column>
        </Columns>
    </Container>
</Section>

BeautyCounterPage.propTypes = {}

export default BeautyCounterPage

