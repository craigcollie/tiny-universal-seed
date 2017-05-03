import React from 'react';
import fetch from 'isomorphic-fetch';

import { Route } from 'tiny-universal';

const Page = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  );
};

const BlankPage = ({ location }) => {
  const { pathname, search } = location;
  return (
    <div>
      Path: {pathname}<br/>
      Search: {search}<br/>
      <hr/>
      <h1>Just a blank page</h1>
      <img src="https://media2.giphy.com/media/YkZB63QKFfi3C/giphy.gif" width="100%" />
    </div>
  );
};

const Parent = () => (
  <div>
    Parent
  </div>
);

const Child = () => (
  <div>
    Child
  </div>
);

function getData({ id }) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'GET',
  }).then(res => res.json());
}

function getComplexData(routeParams) {
  console.log(routeParams);
  return Promise.resolve('it worked!')
}

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
      path="/no-route-resolve"
      component={BlankPage}
      meta={{
        title: 'No route resolve',
        description: 'Just a page'
      }}
    />
    <Route
      path="/parent"
      component={Parent}
    />
  </div>
);

export default Routes;
