import React, { Fragment, useContext, useState } from 'react';
import Logo from './atoms/Logo';
import Notifications from './atoms/Notifications';
import Avatar from './atoms/Avatar';
import AuthContext from '../context/auth/authContext';
import ModalContext from '../context/modal/modalContext';
import StackedOption from './atoms/StackedOption';
import useWindowSize from '../hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faThList,
  faChartPie,
  faCog,
  faLightbulb,
  faUserFriends,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const modalContext = useContext(ModalContext);
  const { modal, hideModal } = modalContext;

  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <div>
      <Logo />
      {(windowWidth > 850 || modal) && isAuthenticated && (
        <nav className='side-nav'>
          {windowWidth < 850 && (
          <FontAwesomeIcon icon={faWindowClose} className='close-icon' onClick={()=> hideModal()} />
          )}
          <ul>
            <li tabIndex={1}>
              <div className='nav-option'>
                <FontAwesomeIcon icon={faHome} className='option-icon' />
                <p>Dashboard</p>
              </div>
            </li>
            <li tabIndex={1}>
              <div className='nav-option'>
                <FontAwesomeIcon icon={faThList} className='option-icon' />
                <p>Content Management</p>
              </div>
            </li>
            <StackedOption
              firstOption='Monitoring'
              firstIcon={faChartPie}
              secondOption='Content'
              secondIcon={faLightbulb}
            />
            <StackedOption
              firstOption='Account'
              firstIcon={faCog}
              secondOption='Users'
              secondIcon={faUserFriends}
            />
          </ul>
        </nav>
      )}
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
