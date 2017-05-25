import React from 'react';
import { Router, Link } from 'tiny-universal';

const Root = () => (
  <div>
    <ul>
      <li>
        <Link to="/admin/groups">Groups</Link>
      </li>
      <li>
        <Link to="/admin/presenters">Presenters</Link>
      </li>
      <li>
        <Link to="/admin/events">Events</Link>
      </li>
    </ul>
    <Router />
  </div>
);

export default Root;
