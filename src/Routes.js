import React from 'react';
import { Route } from 'tiny-universal';

import Admin from './routes/Admin/Admin';
import firebaseService from './services/firebaseService';

const Routes = () => (
  <div>
    <Route
      path="/"
      component={() => (<div>Home</div>)}
    />

    <Route
      path="/admin/:refId"
      component={Admin}
    />
  </div>
);

export default Routes;
