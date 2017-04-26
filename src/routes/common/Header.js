import React from 'react';
import { Link } from 'tiny-universal';

const Header = () => (
  <div>
    <ul>
      <li><Link to="/one" text="One" /></li>
      <li><Link to="/two" text="Two" /></li>
      <li><Link to="/three/another" text="Three" /></li>
    </ul>
    <hr/>
  </div>
);

export default Header;