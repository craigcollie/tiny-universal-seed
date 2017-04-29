import React from 'react';
import fetch from 'isomorphic-fetch';

import { Route } from 'tiny-universal';

const Page = ({ resolvedData }) => {
  const { title, body } = resolvedData;
  return (
    <div>
      <h1>{title}</h1>
      {body}
    </div>
  );
};

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
      meta={{
        title: 'Two - Dynamic route',
        description: 'Two - Lorem ipsum'
      }}
    />
  </div>
);

export default Routes;
