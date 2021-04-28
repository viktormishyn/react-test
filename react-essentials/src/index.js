import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function AppTwo() {
  return <h1>This is the second App</h1>
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment>,
  document.getElementById('root')
);

// or just <></>


