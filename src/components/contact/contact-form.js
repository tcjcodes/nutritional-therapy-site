import React from "react";
import {
  Button,
  Control,
  Field,
  FieldBody,
  FieldLabel,
  Input,
  Select,
  TextArea
} from "bloomer";
import ExternalLink from "../shared/external-link";
import StyledIcon from "../shared/styled-icon";
import NotificationContainer from "./notification-container";

const formId = "contact";
const email = "caroline@boisewgw.com";

const extractData = fd => {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return data;
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const STATUS_SUCCESS = "success";
const STATUS_ERROR = "error";

const SUBJECT_OTHER = "Other";

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
    this.setState({ showOtherSubject: e.target.value === SUBJECT_OTHER });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = extractData(fd);
    const { current } = this.formRef;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formId, ...data })
    })
      .then(() => {
        this.setState({ status: STATUS_SUCCESS });
        current.reset();
      })
      .catch(error => {
        this.setState({ status: STATUS_ERROR });
        console.error("form submit error", error);
      });
  }

  handleDeleteNotification() {
    this.setState({ status: null });
  }

  render() {
    return (
      <div>
        <div css={{ margin: "1rem 0" }}>
          <NotificationContainer
              isShown={this.state.status === STATUS_SUCCESS}
              onDelete={this.handleDeleteNotification}
              isColor="light"
          >
            <StyledIcon name="paper-plane" />
            <strong>Sent!</strong> Thank you for contacting me, I will get back{" "}
                                   to you shortly.
          </NotificationContainer>
          <NotificationContainer
              isShown={this.state.status === STATUS_ERROR}
              onDelete={this.handleDeleteNotification}
              isColor="light"
          >
            <StyledIcon name="exclamation-triangle" />
            <strong>Oh no!</strong> Something went wrong. Please try again later
                                    or send a direct e-mail instead at{" "}
            <ExternalLink href={`mailto:${email}`} text={email} />.
          </NotificationContainer>
        </div>

        <form
          id={formId}
          name={formId}
          onSubmit={this.handleSubmit}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          ref={this.formRef}
        >
          <input type="hidden" name="form-name" value="contact" />

          <Field>
            <FieldBody>
              <Field isGrouped>
                <Control isExpanded hasIcons="right">
                  <Input
                    name="fname"
                    isSize="small"
                    required
                    placeholder="First Name*"
                  />
                </Control>
              </Field>
              <Field>
                <Control hasIcons={["right"]}>
                  <Input
                    name="lname"
                    isSize="small"
                    required
                    placeholder="Last Name*"
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
            <FieldBody>
              <Field isGrouped>
                <Control isExpanded>
                  <Select
                    defaultValue=""
                    name="subject"
                    required
                    isSize="small"
                    onChange={this.handleSubjectChange}
                  >
                    <option value="" disabled>
                      Subject*
                    </option>
                    <option value="Questions">Questions</option>
                    <option value="Request Free Consultation">
                      Request Free Consultation
                    </option>
                    <option value={SUBJECT_OTHER}>Other</option>
                  </Select>
                </Control>
              </Field>
              {this.state.showOtherSubject && (
                <Field>
                  <Control isExpanded>
                    <Input
                      name="otherSubject"
                      isSize="small"
                      type="text"
                      placeholder="Subject"
                    />
                  </Control>
                </Field>
              )}
            </FieldBody>
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
                    <StyledIcon name="envelope" />
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
