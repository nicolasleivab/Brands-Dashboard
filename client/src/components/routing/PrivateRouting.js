import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRouting = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  // const { isAuthenticated } = authContext;
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRouting;
