import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Avatar = (props) => {
  const { avatarImg, username } = props;
  const authContext = useContext(AuthContext);
  const { logoutUser } = authContext;

  return (
    <div className='avatar-container' tabIndex={1}>
      <p className='username'>{username}</p>
      <div className='img-container'></div>
      <FontAwesomeIcon
        onClick={() => logoutUser()}
        onKeyDown={(e) => (e.key === 'Enter' ? logoutUser() : null)}
        icon={faSignOutAlt}
        className='option-icon'
        tabIndex={1}
      />
    </div>
  );
};

export default Avatar;
