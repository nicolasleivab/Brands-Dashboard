import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notifications = (props) => {
  const { noteCount } = props;
  return (
    <div className='notifications-container' tabIndex={1}>
      <div className='orange-circle'>{noteCount}</div>
      <FontAwesomeIcon icon={faBell} className='notifications-icon' />
    </div>
  );
};

export default Notifications;
