import React from 'react';
import { Router, RoutingProvider, Link } from 'tiny-universal';

import Routes from './Routes';

const Root = (serverProps) => (
  <RoutingProvider {...serverProps} routes={Routes}>
    <ul>
      <li><Link to="/" text="Home" /></li>
      <li><Link to="/page/1" text="Page 1" /></li>
      <li><Link to="/no-route-resolve" text="No route resolve" /></li>
      <li><Link to="/parent" text="Parent" /></li>
      <li><Link to="/parent/child" text="Child" /></li>
    </ul>
    <Router />
  </RoutingProvider>
);

export default Root;
