import React from 'react';

import TableView from './../../common/TableView/TableView';
import styles from './Admin.scss';

const Admin = ({ routeParams, resolvedData }) => {
  const { refId } = routeParams;

  return (
    <div className={styles.admin}>
      <h1>Feedbag: {refId}</h1>
      <TableView dataSource={resolvedData} />
    </div>
  );
};

export default Admin;
