import React from 'react';
import { Router, RouteProvider } from 'tiny-universal';

import Demo from './Demo';
import Routes from './Routes';

const Root = () => (
  <div>
    <Demo />
    <Router />
  </div>
);

export default Root;
