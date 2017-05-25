import React from 'react';
import map from 'lodash/map';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

import styles from './TableView.scss';

const mapDataSource = ds => map(ds, (item, key) => ({
  ...item,
  id: key,
}));

const cellRender = (value) => {
  if (isArray(value) || isObject(value)) {
    return (<div>Array / object</div>);
  }
  return value;
};

const getCustomCellClassName = property =>
  (styles[`cell_${property}`] || styles.defaultCell);

const TableView = ({ dataSource }) => {
  if (!dataSource) {
    return (<div>Loading</div>);
  }

  const mappedDataSource = mapDataSource(dataSource);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(mappedDataSource[0]).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mappedDataSource.map((source, key) => (
            <tr key={key}>
              {Object.values(source).map((value, index) => (
                <td key={index} className={getCustomCellClassName(Object.keys(source)[index])}>
                  {cellRender(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
