import React from 'react';
import ReactDOM from 'react-dom';

import { createTinyApp } from 'tiny-universal';

import App from './App';

ReactDOM.render(
  createTinyApp(App),
  document.getElementById('root')
);
