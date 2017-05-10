import React from 'react';
import ReactDOM from 'react-dom';
import { createTinyApp } from 'tiny-universal';

import config from './tinyConfig';

const tinyApp = createTinyApp(config);

ReactDOM.render(tinyApp, document.getElementById('root'));
