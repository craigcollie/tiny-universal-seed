import React, { PureComponent } from 'react';
import map from 'lodash/map';

import firebaseService from './../../services/firebaseService';

export const Input = ({ name, onChange }) => (
  <input type="text" name={name}  onChange={onChange} />
);

export class Select extends PureComponent {
  constructor() {
    super();
    this.state = {
      options: null,
    };
    this.asyncUpdateState = this.asyncUpdateState.bind(this);
  }

  async componentDidMount() {
    const { name } = this.props;
    const data = await firebaseService.getDataByRef(`${name}s`); // Super fugly
    this.asyncUpdateState({ options: data });
  }

  asyncUpdateState(state) {
    return new Promise((r => this.setState(state, r)));
  }

  render() {
    const { name, onChange } = this.props;
    const { options } = this.state;

    if (!options) {
      return (<div>Fetching {name}</div>);
    }

    return (
      <select name={name} onChange={onChange}>
        { map(options, (option, index) =>
          (<option value={option.id} key={option.id}>{option.name}</option>))
        }
      </select>
    );
  }
}

export const Default = () => (
  <div>
    NO FORM ELEMENT
  </div>
);
