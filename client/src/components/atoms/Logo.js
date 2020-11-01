import React from 'react';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} width={170} alt='logo' />
    </div>
  );
};

export default Logo;
