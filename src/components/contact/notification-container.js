import React from 'react';
import PropTypes from 'prop-types';
import { Button, Notification } from 'react-bulma-components';

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div css={{ marginBottom: '1rem' }}>
        <Notification
          isHidden={!this.props.isShown}
          color={this.props.isColor}
        >
          <Button remove onClick={this.props.onDelete} />
          {this.props.children}
        </Notification>
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  isShown: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default NotificationContainer;
