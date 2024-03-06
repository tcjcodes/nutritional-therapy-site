import React from 'react';
import PropTypes from 'prop-types';
import { Button, Notification } from 'react-bulma-components';

const NotificationContainer = ({ isShown, color, onDelete, children }) => (
  <div css={{ marginBottom: '1rem' }}>
    <Notification
      display={isShown ? 'block' : 'hidden'}
      color={color}
      light={color === 'light'}
    >
      <Button remove onClick={onDelete} />
      {children}
    </Notification>
  </div>
);

NotificationContainer.propTypes = {
  isShown: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default NotificationContainer;
