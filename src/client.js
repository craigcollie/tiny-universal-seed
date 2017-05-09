import React from 'react';
import ReactDOM from 'react-dom';
import { createTinyApp } from 'tiny-universal';

import App from './App';
import Routes from './Routes';

const tinyApp = createTinyApp(App, Routes);

ReactDOM.render(tinyApp, document.getElementById('root'));
