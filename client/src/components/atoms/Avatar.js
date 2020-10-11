import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Avatar = () => {
  const authContext = useContext(AuthContext);
  const { logoutUser, user } = authContext;
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (user) {
      let composedName = user.name[0];
      if (user.surname) {
        composedName = composedName + user.surname[0];
      }
      setUsername(composedName);
    }
  }, [user]);

  return (
    <div className='avatar-container' tabIndex={1}>
      <p className='username'>{username}</p>
      <div className='img-container'>
        <img
          src={
            user && user.imageUrl && user.imageUrl !== ''
              ? user.imageUrl
              : 'user.png'
          }
          alt='avatar'
          width={35}
        />{' '}
      </div>
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
