import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Backdrop, PositionWrapper } from '../../theme/types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeContent from './HomeContent/HomeContent';
import LoginForm from '../Auth/Login/LoginForm';
import RegisterForm from '../Auth/Register/RegisterForm';

class HomePage extends Component {
  state = {
    isLoginFormShown: false,
    isRegisterFormShown: false,
  };

  handleFormShown = (e) => {
    if (e.target.innerText === 'Log In') {
      this.setState({ isLoginFormShown: true, isRegisterFormShown: false });
    } else {
      this.setState({ isLoginFormShown: false, isRegisterFormShown: true });
    }
  }

  handleFormClose = (e) => {
    if (e.target.className.includes('Backdrop')) {
      this.setState({ isLoginFormShown: false, isRegisterFormShown: false });
    }
  }

  handleAuthFormClose = () => this.setState({ isLoginFormShown: false, isRegisterFormShown: false });

  render() {
    const { token, isLoginFormShown, isRegisterFormShown } = this.state;
    const { history: { push } } = this.props;
    return (
      <React.Fragment>
        <Header push={push} onFormShown={this.handleFormShown} onFormClose={this.handleAuthFormClose }/>
        <HomeContent onFormShown={this.handleFormShown} />
        <Footer />
        { isLoginFormShown && (
          <Backdrop onClick={this.handleFormClose}>
            <PositionWrapper>
              <LoginForm />
            </PositionWrapper>
          </Backdrop>
        )}
        { isRegisterFormShown && (
          <Backdrop onClick={this.handleFormClose}>
            <PositionWrapper>
              <RegisterForm />
            </PositionWrapper>
          </Backdrop>
        )}
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default HomePage;
