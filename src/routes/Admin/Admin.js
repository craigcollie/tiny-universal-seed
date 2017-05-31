import React, { Component, PropTypes } from 'react';

import firebaseService from './../../services/firebaseService';
import TableView from './../../common/TableView/TableView';
import FormView from './../../common/FormView/FormView';

import styles from './Admin.scss';

class Admin extends Component {
  constructor(props) {
    super(props);
    const { resolvedData } = this.props;
    this.state = { data: resolvedData };

    this.fetchData = this.fetchData.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(nextProps) {
    if (this.props.activeRoute !== nextProps.activeRoute) {
      this.fetchData();
    }
  }

  fetchData() {
    const { routeParams } = this.props;
    const { refId } = routeParams;

    firebaseService.getDataByRef(refId)
      .then(data => this.setState({ data }));
  }

  deleteRow(rowId) {
    const { routeParams } = this.props;
    const { refId } = routeParams;

    firebaseService.deleteRefById(refId, rowId)
      .then(data => this.setState({ data }));
  }

  onSubmitHandler(formData) {
    const { routeParams } = this.props;
    const { refId } = routeParams;

    firebaseService.addRefById(refId, formData)
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    const { routeParams } = this.props;
    const { refId } = routeParams;

    return (
      <div className={styles.admin}>
        <h1>{refId}</h1>
        <TableView
          dataSource={data}
          onRowDelete={this.deleteRow}
        />
        <FormView
          refId={refId}
          onSubmitHandler={this.onSubmitHandler}
          dataSource={data}
        />
      </div>
    );
  }
}

Admin.propTypes = {
  activeRoute: PropTypes.string,
  routeParams: PropTypes.object,
  resolvedData: PropTypes.any,
};

export default Admin;
