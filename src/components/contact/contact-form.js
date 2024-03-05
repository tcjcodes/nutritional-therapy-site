import React from 'react';
import { Button, Form } from 'react-bulma-components';
import ExternalLink from '../shared/external-link';
import StyledIcon from '../shared/styled-icon';
import NotificationContainer from './notification-container';

const {
  Control,
  Field,
  FieldBody,
  FieldLabel,
  Input,
  Select,
  TextArea,
} = Form;

const formId = 'contact';
const email = 'caroline@boisewgw.com';

const extractData = (fd) => {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return data;
};

const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';

const FIELD_NAME_OTHER_SUBJ = 'otherSubject';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: null, showOtherSubject: false };
    this.formRef = React.createRef();

    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteNotification = this.handleDeleteNotification.bind(this);
  }

  handleSubjectChange(e) {
    this.setState({
      showOtherSubject: e.target.value === FIELD_NAME_OTHER_SUBJ,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = extractData(fd);
    const { current } = this.formRef;
    this.setState({ formData: data });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': formId,
        ...data,
      }).toString(),
    })
    .then(() => {
      this.setState({ status: STATUS_SUCCESS });
      current.reset();
    })
    .catch((error) => {
      this.setState({ status: STATUS_ERROR });
      console.error('form submit error', error);
    });
  }

  handleDeleteNotification() {
    this.setState({ status: null });
  }

  render() {
    return (
      <div>
        <div css={{ margin: '1rem 0' }}>
          <NotificationContainer
            isShown={this.state.status === STATUS_SUCCESS}
            onDelete={this.handleDeleteNotification}
            isColor='light'
          >
            <StyledIcon name='paper-plane' />
            <strong>Sent!</strong> Thank you, I will get back to you shortly.
          </NotificationContainer>
          <NotificationContainer
            isShown={this.state.status === STATUS_ERROR}
            onDelete={this.handleDeleteNotification}
            isColor='light'
          >
            <StyledIcon name='exclamation-triangle' />
            <strong>Oh no!</strong> Something went wrong. Please try again later
            or contact me directly at{' '}
            <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>.
          </NotificationContainer>
        </div>

        <form
          id={formId}
          name={formId}
          onSubmit={this.handleSubmit}
          method='post'
          data-netlify='true'
          netlify-honeypot='bot-field'
          data-netlify-recaptcha='true'
          ref={this.formRef}
        >
          <input type='hidden' name='form-name' value='contact' />

          <Field>
            <FieldBody>
              <Field isGrouped>
                <Control isExpanded hasIcons='right'>
                  <Input
                    name='firstName'
                    isSize='small'
                    required
                    placeholder='First Name*'
                  />
                </Control>
              </Field>
              <Field>
                <Control hasIcons={['right']}>
                  <Input
                    name='lastName'
                    isSize='small'
                    required
                    placeholder='Last Name*'
                  />
                </Control>
              </Field>
            </FieldBody>
          </Field>

          <Field>
            <Control>
              <Input
                name='email'
                isSize='small'
                type='email'
                required
                placeholder='E-mail Address*'
              />
            </Control>
          </Field>

          <Field>
            <Control>
              <Select
                defaultValue=''
                name='subject'
                required
                isSize='small'
                onChange={this.handleSubjectChange}
              >
                <option value='' disabled>
                  Subject*
                </option>
                <option value='Questions'>Questions</option>
                <option value='Request Free Consultation'>
                  Request Free Consultation
                </option>
                <option value={FIELD_NAME_OTHER_SUBJ}>Other</option>
              </Select>
            </Control>
          </Field>

          {this.state.showOtherSubject && (
            <Field>
              <Control>
                <Input
                  name={FIELD_NAME_OTHER_SUBJ}
                  isSize='small'
                  type='text'
                  placeholder='Subject'
                />
              </Control>
            </Field>
          )}

          <Field>
            <FieldLabel />
            <FieldBody>
              <Field>
                <Control>
                  <TextArea
                    name='message'
                    isSize='small'
                    placeholder='Message*'
                    required
                    rows='5'
                  />
                </Control>
              </Field>
            </FieldBody>
          </Field>

          <div data-netlify-recaptcha='true'></div>

          <Field>
            <FieldBody>
              <Field>
                <Control>
                  <Button type='submit' isColor='primary'
                          disabled={this.state.status === STATUS_ERROR}>
                    <StyledIcon name='envelope' />
                    submit
                  </Button>
                </Control>
              </Field>
            </FieldBody>
          </Field>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
