import React from 'react';
import { Router, RoutingProvider } from 'tiny-universal';

import Header from './routes/common/Header';
import Routes from './routes/Routes';

//  Root router component
//  Data from the original isomorphic fetch
//  will be provided here along with location data
const Root = (serverProps) => (
  <RoutingProvider {...serverProps} routes={Routes}>
    <Header />
    <Router />
  </RoutingProvider>
);

export default Root;
