import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import Board from './components/Board';

import {observe} from './utils/Game'

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition = {knightPosition} />,
    rootEl
  )
);
