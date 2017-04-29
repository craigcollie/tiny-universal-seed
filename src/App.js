import React from 'react';
import { Router, RoutingProvider, Link } from 'tiny-universal';

import Routes from './Routes';

const Root = (serverProps) => (
  <RoutingProvider {...serverProps} routes={Routes}>
    <ul>
      <li><Link to="/" text="Home" /></li>
      <li><Link to="/page/1?foo=foo&bar=bar" text="Page 1" /></li>
    </ul>
    <Router />
  </RoutingProvider>
);

export default Root;
