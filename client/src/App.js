import React from 'react';
import Routes from './components/routes';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AuthState>
      <Routes />
    </AuthState>
  );
}

export default App;
