import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB!</h1>, root);
});

const store = configureStore();
window.login = login;
window.signup = signup;
window.logout = logout;
window.getState = store.getState;
window.dispatch = store.dispatch;