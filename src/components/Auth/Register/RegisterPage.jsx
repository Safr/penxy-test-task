import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RegisterForm from './RegisterForm';

const RegisterPage = () => (
  <React.Fragment>
    <Header />
    <Container>
      <RegisterForm />
    </Container>
    <Footer />
  </React.Fragment>
);

export default RegisterPage;
