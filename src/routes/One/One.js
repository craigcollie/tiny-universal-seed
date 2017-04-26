import React from 'react';
import Page from '../common/Page';

const One = ({ resolvedData }) => (
  <div>
    <h1>ONE</h1>
    <Page {...resolvedData} />
  </div>
);

export default One;