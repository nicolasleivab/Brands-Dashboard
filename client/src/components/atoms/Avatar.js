import React from 'react';

const Avatar = (props) => {
  const { avatarImg, username } = props;
  return (
    <div className='avatar-container' tabIndex={1}>
      <p className='username'>{username}</p>
      <div className='img-container'></div>
    </div>
  );
};

export default Avatar;
