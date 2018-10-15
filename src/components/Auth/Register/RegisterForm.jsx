import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { Button, FormWrapper, FormFooter } from '../../../theme/types';
import { register } from '../../../actions';

const isValidEmail = value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
};

const required = value => (value ? undefined : 'Required');
const minValue = min => value => isNaN(value) || value >= min ? undefined : `be greater than ${min}`;
const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);


class RegisterForm extends Component {
  handleSubmit = (values) => {
    const { register } = this.props;
    register(values);
  }

  render() {
    return (
      <FormWrapper>
        <Container>
          <Form
            onSubmit={this.handleSubmit}
            render={({
              handleSubmit,
              reset,
              submitting,
              pristine,
              validating,
              values,
              invalid,
            }) => (
              <form onSubmit={handleSubmit} encType="application/x-www-form-urlencoded">
                <h2>Create Account</h2>
                <Field
                  name="name"
                  validate={composeValidators(required)}
                >
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="Full Name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name="email"
                >
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="email" placeholder="Email" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name="password"
                  validate={composeValidators(required, minValue(5))}
                >
                  {({ input, meta }) => (
                    <div>

                      <input {...input} type="password" placeholder="Password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <FormFooter>
                  <p>Support: <a mailto="info@penxy.com">info@penxy.com</a></p>
                  <Button boxShadow type="submit" disabled={pristine || invalid}>
          Sign Up
                  </Button>
                </FormFooter>
              </form>
            )}
          />
        </Container>
      </FormWrapper>
    );
  }
}

export default connect(null, { register })(RegisterForm);
