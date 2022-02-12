import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Primerio from './components/basics/Primeiro';

const tag = <strong>Olá React!</strong>

ReactDOM.render(
  <div>
    <Primerio />
  </div>,
  document.getElementById('root')
);
