import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { Button, FormWrapper } from '../../../theme/types';
import { update } from '../../../actions';

const isValidEmail = value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
};

const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);


class AccountForm extends Component {
  handleSubmit = (values) => {
    const { goBack, update } = this.props;
    update(values);
    goBack();
  }

  render() {
    const { email, password } = this.props;
    return (
      <FormWrapper>
        <Container>
          <Form
            onSubmit={this.handleSubmit}
            initialValues={{ email, password }}
            render={({
              handleSubmit,
              reset,
              submitting,
              pristine,
              validating,
              values,
              invalid,
            }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  validate={composeValidators(isValidEmail)}
                >
                  {({ input, meta }) => (
                    <div>
                      <label>Email</label>
                      <input {...input} type="email" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name="password"
                >
                  {({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <input {...input} type="password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Button type="submit" disabled={pristine || invalid}>
          Save
                </Button>
              </form>
            )}
          />
        </Container>
      </FormWrapper>
    );
  }
}

AccountForm.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default connect(null, { update })(AccountForm);
