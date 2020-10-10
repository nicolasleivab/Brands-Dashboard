import React, { Fragment, useContext } from 'react';
import Logo from './atoms/Logo';
import Notifications from './atoms/Notifications';
import Avatar from './atoms/Avatar';
import AuthContext from '../context/auth/authContext';

const NavBar = () => {
  const authContext = useContext(AuthContext);
  // const { isAuthenticated } = authContext;
  const isAuthenticated = true;

  return (
    <div>
      <Logo />
      <nav className='side-nav'></nav>
      <nav className='horizontal-nav'>
        {isAuthenticated && (
          <Fragment>
            <Notifications noteCount={3} />
            <Avatar username='NL' />
          </Fragment>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
