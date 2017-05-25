import React from 'react';
import { Route } from 'tiny-universal';

import Admin from './routes/Admin/Admin';
import getData from './services/firebaseService';

const Routes = () => (
  <div>
    <Route
      path="/"
      component={() => (<div>Home</div>)}
    />

    <Route
      path="/admin/:refId"
      component={Admin}
      resolve={getData}
    />
  </div>
);

export default Routes;
