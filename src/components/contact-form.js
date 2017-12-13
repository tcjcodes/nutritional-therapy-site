import React from 'react'
import { Button, Control, Field, FieldBody, FieldLabel, Input, Select, TextArea } from 'bloomer'

const ContactForm = ({ }) => (<div>
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
                        />submit
                    </Button>
                </Control>
            </Field>
        </FieldBody>
    </Field>
</div>)

ContactForm.propTypes = {
}

export default ContactForm

