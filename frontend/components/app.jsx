import React from 'react';
import { HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;