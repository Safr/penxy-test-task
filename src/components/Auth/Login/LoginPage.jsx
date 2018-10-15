import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <React.Fragment>
    <Header />
    <Container>
      <LoginForm />
    </Container>
    <Footer />
  </React.Fragment>
);


export default LoginPage;
