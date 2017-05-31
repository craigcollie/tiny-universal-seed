import React from 'react';
import Moment from 'moment';

import styles from './TableView.scss';

const renderFn = {
  date: value => (
    new Moment(value).format('DD/MM/YYYY')
  ),
  presentations: value => (
    <span>{JSON.stringify(value)}</span>
  ),
  default: value => (
    <span>{value}</span>
  ),
};

const Td = ({ type, value }) => (
  <td className={styles[`cell_${type}`]}>
    {renderFn[type] ?
      renderFn[type](value) :
      renderFn.default(value)
    }
  </td>
);

export default Td;
