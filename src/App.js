import React from 'react';
import { Router, RoutingProvider, Link } from 'tiny-universal';

import Routes from './Routes';

const Root = (serverProps) => (
  <RoutingProvider {...serverProps} routes={Routes}>
    <h1>Tiny Universal</h1>
    <ul>
      <li><Link to="/" text="Home" /></li>
      <li><Link to="/page/1?foo=foo&bar=bar" text="Page 1" /></li>
      <li><Link to="/no-route-resolve" text="No route resolve" /></li>
    </ul>
    <Router />
  </RoutingProvider>
);

export default Root;
