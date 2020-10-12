import React from 'react';
import Routes from './components/routes';
import AuthState from './context/auth/AuthState';
import ModalState from './context/modal/ModalState';

function App() {
  return (
    <AuthState>
      <ModalState>
        <Routes />
      </ModalState>
    </AuthState>
  );
}

export default App;
