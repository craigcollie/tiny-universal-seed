import React from 'react';

import { Route } from 'tiny-universal';

import One from './One/One';
import Two from './Two/Two';
import Three from './Three/Three';

import doSomethingAsync from './../services/doSomethingAsync';

const Routes = () => (
  <div>
    <Route
      path="/one"
      component={One}
      resolve={doSomethingAsync}
      routeParams={{ postId: 1 }}
      meta={{
        title: 'One - Dynamic route',
        description: 'One - Lorem ipsum'
      }}
    />
    <Route
      path="/two"
      component={Two}
      resolve={doSomethingAsync}
      routeParams={{ postId: 2 }}
      meta={{
        title: 'Two - Dynamic route',
        description: 'Two - Lorem ipsum'
      }}
    />
    <Route
      path="/three/another"
      component={Three}
      resolve={doSomethingAsync}
      routeParams={{ postId: 3 }}
      cache={false}
      meta={{
        title: 'Three - Cached route',
        description: 'Three - Lorem ipsum'
      }}
    />
  </div>
);

export default Routes;