import fetch from 'isomorphic-fetch';

function timeout(ms) {
  return value => new Promise(resolve => setTimeout(() => resolve(value), ms));
}

function doSomethingAsync(params) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: 'GET',
    }
  ).then(res => res.json())
    //.then(timeout(300));
}

export default doSomethingAsync;
