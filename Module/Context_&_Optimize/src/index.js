import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import { useUser } from './context/UserContext';
import AllContext from './context/AllContext';
import './index.css';

function Root() {
  const user = useUser();
  return user ? <MainPage /> : <LoginPage />;
}

ReactDOM.render(
  <AllContext>
    <Root />
  </AllContext>,
  document.querySelector('#root')
);
