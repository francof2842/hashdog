import React from 'react';
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';
import './Header.css';

const headerStyle = {
  display: 'flex',
  backgroundColor: '#26c6da',
  justifyContent: 'space-between',
  padding: 10
}

const linkStyle = {
  color: 'white',
  textDecoration: 'underline'
}

export default () => (
  <header>
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        <div>
          <h3>
            <Link to="/">
            HOME

            </Link>
          </h3>

          {isAuth ? (
            <ul>
              <Link to="/dashboard">
              Dashboard

              </Link>
              <Button type="primary" onClick={logout}>
              logout

              </Button>
            </ul>
          ) : (
            <Button type="primary" onClick={login}>
            login

            </Button>
            
          )}
        </div>
      )}
    </AuthConsumer>
  </header>
);
