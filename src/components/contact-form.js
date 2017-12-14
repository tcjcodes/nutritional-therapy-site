import React from 'react'
import { Button, Control, Field, FieldBody, FieldLabel, Input, Select, TextArea, } from 'bloomer'
import StyledIcon from './styled-icon'
import NotificationContainer from './notification-container'

const formName = 'contact'
const email = 'test@user.net'

const extractData = fd => {
  const data = {}
  for (let key of fd.keys()) {
    data[key] = fd.get(key)
  }
  return data
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const SUCCESS = 'success'
const ERROR = 'error'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: null }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ status: null })
    const fd = new FormData(event.target)
    const data = extractData(fd)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...data }),
    })
      .then(() => {
        this.setState({ status: SUCCESS })
      })
      .catch(error => {
        this.setState({ status: ERROR })
        console.error('form submit error', error)
      })
  }

  render() {
    return (
      <div>
        <form
          name={formName}
          onSubmit={this.handleSubmit}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Field>
            <FieldBody>
              <Field isGrouped>
                <Control isExpanded hasIcons="right">
                  <Input
                    name="firstName"
                    isSize="small"
                    required
                    placeholder="First Name*"
                  />
                </Control>
              </Field>
              <Field>
                <Control hasIcons={['right']}>
                  <Input
                    name="lastName"
                    isSize="small"
                    placeholder="Last Name"
                  />
                </Control>
              </Field>
            </FieldBody>
          </Field>

          <Field>
            <Control>
              <Input
                name="email"
                isSize="small"
                type="email"
                required
                placeholder="E-mail Address*"
              />
            </Control>
          </Field>

          <Field>
            <Control>
              <Select defaultValue="" name="subject" required isSize="small">
                <option value="" disabled>
                  Select Subject of Message
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
                  <TextArea
                    name="message"
                    isSize="small"
                    placeholder="Message*"
                    required
                    rows="5"
                  />
                </Control>
              </Field>
            </FieldBody>
          </Field>

          <Field>
            <FieldBody>
              <Field>
                <Control>
                  <Button type="submit" isColor="primary">
                    <StyledIcon name="envelope" />submit
                  </Button>
                </Control>
              </Field>
            </FieldBody>
          </Field>
        </form>

        <div css={{ marginTop: '1.5rem' }}>
          <NotificationContainer
            isShown={this.state.status === SUCCESS}
            isColor="light"
          >
            <StyledIcon name="paper-plane" />
            <strong>Sent!</strong> Thank you for contacting us, we will get back{' '}
            to you shortly.
          </NotificationContainer>
          <NotificationContainer
            isShown={this.state.status === ERROR}
            isColor="light"
          >
            <StyledIcon name="exclamation-triangle" />
            <strong>Oh no!</strong> Something went wreong. Please try again{' '}
            later or send us a direct e-mail us at{' '}
            <a href={`mailto:${email}`}>{email}</a>.
          </NotificationContainer>
        </div>
      </div>
    )
  }
}
ContactForm.propTypes = {}

export default ContactForm
