import React from 'react';
import fetch from 'isomorphic-fetch';

import { Route } from 'tiny-universal';

const Page = ({ resolvedData, location }) => {
  const { title, body } = resolvedData;
  const { pathname, search } = location;
  return (
    <div>
      Path: {pathname}<br/>
      Search: {search}<br/>
      <hr/>
      <h1>{title}</h1>
      {body}
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
}

const getData = (params) => fetch(
  `https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
    method: 'GET',
  }
).then(res => res.json());

const Routes = () => (
  <div>
    <Route
      path="/"
      component={Page}
      resolve={getData}
      routeParams={{ postId: 1 }}
      meta={{
        title: 'One - Dynamic route',
        description: 'One - Lorem ipsum'
      }}
    />
    <Route
      path="/page/1"
      component={Page}
      resolve={getData}
      routeParams={{ postId: 2 }}
      cache={true}
      meta={{
        title: 'Two - Dynamic route',
        description: 'Two - Lorem ipsum'
      }}
    />
    <Route
      path="/no-route-resolve"
      component={BlankPage}
      meta={{
        title: 'No route resolve',
        description: 'Just a page'
      }}
    />
  </div>
);

export default Routes;
