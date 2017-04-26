// @flow
import React, { PropTypes } from 'react';
import styles from './Layout.css';

type Props = {
  children: string,
}

const LayoutContainer = ({ children }: Props) => (
  <div className={styles.container}>
    {children}
  </div>
);

LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LayoutContainer;
