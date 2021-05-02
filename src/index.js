import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import './index.css';
import Maze from './source/Maze'

ReactDOM.render(
  <React.StrictMode>
    <Maze />
  </React.StrictMode>,
  document.getElementById('root')
);
