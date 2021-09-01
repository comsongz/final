import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
