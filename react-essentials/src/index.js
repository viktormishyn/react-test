import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [,, thirdItem] = ["boots", "tent", "headlamp"]
console.log(thirdItem)

ReactDOM.render(
  <App authorized={false} />,
  document.getElementById('root')
);


