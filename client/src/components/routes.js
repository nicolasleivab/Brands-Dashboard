import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import PrivateRoute from './PrivateRouting';

const Routes = () => {
  return (
    <div>
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/register' component={Dashboard} />
            <PrivateRoute exact path='/login' component={Login} />
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
};

export default Routes;
