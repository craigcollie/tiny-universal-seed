import React, { Component } from 'react';
import map from 'lodash/map';

import formSchemas from './formSchemas';
import styles from './FormView.scss';

class FormView extends Component {
  constructor() {
    super();
    this.state = {};

    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeHandler(event) {
    const { value, name } = event.target;
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  submitForm(event) {
    event.preventDefault();
    const { form } = this.state;
    const { onSubmitHandler } = this.props;
    onSubmitHandler(form);
  }

  render() {
    const { refId } = this.props;
    const { form } = this.state;
    const formSchema = formSchemas[refId];

    if (!formSchema) {
      return (<div>No schema available</div>);
    }

    return (
      <form>
        { map(formSchema, (element, property) => {
          const FormElement = element.component;
          return (
            <div className={styles.row} key={property}>
              <label className={styles.label}>
                {property}
              </label>
              <FormElement
                type={element.type}
                name={property}
                onChange={this.changeHandler}
              />
            </div>
          );
        })}
        <button type="submit" onClick={this.submitForm}>Add new</button>

        {JSON.stringify(form)}
      </form>
    );
  }
}

export default FormView;
