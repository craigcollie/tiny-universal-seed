import React from 'react';
import { Router, RouteProvider } from 'tiny-universal';

import Demo from './Demo';
import Routes from './Routes';

const Root = (serverProps) => (
  <RouteProvider {...serverProps} routes={Routes}>
    <Demo />
    <Router />
  </RouteProvider>
);

export default Root;
