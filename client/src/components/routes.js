import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './routing/PrivateRouting';
import AuthContext from '../context/auth/authContext';

const Routes = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
