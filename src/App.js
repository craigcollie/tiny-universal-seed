import React from 'react';
import { Router, RoutingProvider, Link } from 'tiny-universal';

import Routes from './Routes';

const Root = (serverProps) => (
  <RoutingProvider {...serverProps} routes={Routes}>
    <ul>
      <li>
        <h2>Index route</h2>
        <Link to="/" text="Home" />
      </li>

      <li>
        <h2>Route with params /page/:id</h2>
        <p>Should create the route and pass <strong>{'/page/:id'}</strong> with the values
        in the URL</p>
        <ul>
          <li>
            <Link to="/page/1" text="Page 1" />
          </li>
          <li>
            <Link to="/page/2" text="page 2" />
          </li>
        </ul>
      </li>

      <li>
        <h2>Route with multiple params /page/:id</h2>
        <p>Should create the route and pass <strong>{'/:segment/:path/:blah'}</strong> with the values
        in the URL</p>
        <ul>
          <li>
            <Link to="/foo/bar/wee" text="/foo/bar/wee" />
          </li>
          <li>
            <Link to="/1/2/foo" text="/1/2/foo" />
          </li>
        </ul>
      </li>

      <li>
        <h2>Route with query params</h2>
        <Link to="/foo?page=1" text="/foo?page=1" />
      </li>

      <li>
        <h2>No data resolving</h2>
        <Link to="/no-route-resolve" text="No route resolve" />
      </li>
    </ul>
    <Router />
  </RoutingProvider>
);

export default Root;
