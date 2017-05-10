import React from 'react';
import fetch from 'isomorphic-fetch';

import { Route } from 'tiny-universal';

const Page = (props) => {
  return (
    <div>
      Route props: {JSON.stringify(props)}
    </div>
  );
};

const Err = () => (
  <div>
    ERROR
  </div>
);

function getData({ id }) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'GET',
  }).then(res => res.json());
}

function getDataWithError() {
  return Promise.reject('ERROR!');
}

function getComplexData(routeParams) {
  return Promise.resolve('it worked!')
}

// const Routes = () => (
//   <Route path="/" />
// )

const Routes = () => (
  <div>
    <Route
      path="/"
      component={Page}
      meta={{
        title: 'One - Dynamic route',
        description: 'One - Lorem ipsum'
      }}
    />

    <Route
      path="/page/:id"
      component={Page}
      resolve={getData}
      cache={true}
      meta={{
        title: 'Two - Dynamic route',
        description: 'Two - Lorem ipsum'
      }}
    />

    <Route
      path="/:segment/:path/:blah"
      component={Page}
      resolve={getComplexData}
    />

    <Route
      path="/foo"
      component={Page}
    />

    <Route
      path="/error"
      component={Err}
      resolve={getDataWithError}
    />

    <Route
      path="/no-route-resolve"
      component={Page}
      meta={{
        title: 'No route resolve',
        description: 'Just a page'
      }}
    />

    <Route
      path="/parent"
      component={Page}
    />
  </div>
);

export default Routes;
