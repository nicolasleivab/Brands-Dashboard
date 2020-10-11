import React from 'react';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} width={120} alt='logo' />
    </div>
  );
};

export default Logo;
