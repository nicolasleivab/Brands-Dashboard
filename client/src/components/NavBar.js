import React, { Fragment, useContext } from 'react';
import Logo from './atoms/Logo';
import Notifications from './atoms/Notifications';
import Avatar from './atoms/Avatar';
import AuthContext from '../context/auth/authContext';
import StackedOption from './atoms/StackedOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faThList,
  faChartPie,
  faCog,
  faLightbulb,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const authContext = useContext(AuthContext);
  // const { isAuthenticated } = authContext;
  const isAuthenticated = true;

  return (
    <div>
      <Logo />
      <nav className='side-nav'>
        <ul>
          <li tabIndex={1}>
            <div class='nav-option'>
              <FontAwesomeIcon icon={faHome} className='option-icon' />
              <p>Dashboard</p>
            </div>
          </li>
          <li tabIndex={1}>
            <div class='nav-option'>
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
