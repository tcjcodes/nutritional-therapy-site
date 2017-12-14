import React from 'react'
import PropTypes from 'prop-types'
import { Delete, Notification } from 'bloomer'

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isShown: !!props.isShown }
  }

  handleDelete = () => {
    this.setState({ isShown: false })
  }

  render() {
    return (
      <div css={{ marginBottom: '1rem', }}>
        <Notification
          isHidden={!this.state.isShown}
          isColor={this.props.isColor}
        >
          <Delete onClick={this.handleDelete} />
          {this.props.children}
        </Notification>
      </div>
    )
  }
}

NotificationContainer.propTypes = {
  isColor: PropTypes.string,
  isShown: PropTypes.bool,
}

export default NotificationContainer
