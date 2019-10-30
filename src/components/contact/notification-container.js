import React from 'react'
import PropTypes from 'prop-types'
import { Delete, Notification } from 'bloomer'

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div css={{ marginBottom: '1rem' }}>
        <Notification
          isHidden={!this.props.isShown}
          isColor={this.props.isColor}
        >
          <Delete onClick={this.props.onDelete} />
          {this.props.children}
        </Notification>
      </div>
    )
  }
}

NotificationContainer.propTypes = {
  isShown: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default NotificationContainer
