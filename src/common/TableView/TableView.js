import React from 'react';
import map from 'lodash/map';

import Td from './Td';
import styles from './TableView.scss';

const mapDataSource = ds => map(ds, (item, key) => ({
  ...item,
}));

const getCustomHeaderCellName = property =>
  (styles[`header_${property}`] || styles.defaultHeader);


const TableView = ({
  dataSource,
  onRowDelete,
}) => {

  if (dataSource === null) {
    return (<div>Loading</div>);
  }

  const mappedDataSource = mapDataSource(dataSource);
  const headers = Object.keys(mappedDataSource[0]);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map(key => (
              <th
                className={getCustomHeaderCellName(key)}
                key={key}
              >
                {key}
              </th>
            ))}
            <th>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {mappedDataSource.map((entry, row) => (
            <tr key={row}>
              {Object.values(entry).map((value, index) => (
                <Td
                  key={index}
                  type={Object.keys(entry)[index]}
                  value={value}
                />
              ))}
              <td className={styles.delete}>
                <button onClick={() => onRowDelete(entry.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
