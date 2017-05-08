import React from 'react';
import ReactDOM from 'react-dom';

import { createTinyApp } from 'tiny-universal';

import App from './App';
import Routes from './Routes';

ReactDOM.render(
  createTinyApp(App, Routes),
  document.getElementById('root')
);
