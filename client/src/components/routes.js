import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './routing/PrivateRouting';

const Routes = () => {
  return (
    <div>
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
};

export default Routes;
