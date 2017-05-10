import React from 'react';
import { Router } from 'tiny-universal';

import Demo from '../Demo/Demo';

const Root = () => (
  <div>
    <Demo />
    <Router />
  </div>
);

export default Root;
