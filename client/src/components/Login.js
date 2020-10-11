import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Register = (props) => {
  const authtContext = useContext(AuthContext);

  const [alert, setAlert] = useState('');
  const { loginUser, error, clearErrors, isAuthenticated } = authtContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error !== '') {
      setAlert(error);
      setTimeout(() => {
        clearErrors();
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill out all fields');
    } else {
      loginUser(user);
    }
  };

  return (
    <div className='login'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 100,
        }}
      >
        <p className='title-login'>Member Login</p>
        {alert && alert !== '' && (
          <p style={{ alignSelf: 'center', fontStyle: 'italic' }}>{alert}</p>
        )}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={onSubmit}
        >
          <div
            style={{
              position: 'relative',
              height: 'fitContent',
              width: 'fitContent',
            }}
          >
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              required='required'
              onChange={onChange}
              maxLength={35}
              style={{ paddingLeft: 35 }}
            />
            <FontAwesomeIcon icon={faEnvelope} className='icon' />

            <div
              style={{
                position: 'relative',
                height: 'fitContent',
                width: 'fitContent',
              }}
            >
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                required='required'
                onChange={onChange}
                maxLength={35}
                style={{ paddingLeft: 35 }}
              />
              <FontAwesomeIcon icon={faLock} className='icon' />
            </div>
            <input type='submit' value='LOGIN' className='main-btn' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
