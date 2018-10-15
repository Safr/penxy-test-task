import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Button } from '../../theme/types';
import Header from '../Header/Header';
import AccountForm from './AccountForm/AccountForm';
import { logout } from '../../actions';
import {
  HeaderWrapper, NavWrapper, NavRightWrapper,
} from './AccountPage.style';

class AccountPage extends Component {
  handleLogout = () => {
    const { logout, history: { push } } = this.props;
    push('/');
    logout();
  }

  handleUpdate = () => {
    const { history: { goBack } } = this.props;
    goBack();
  }

  render() {
    const { name, email } = this.props;
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Container>
            <NavWrapper>
              <h2>Account</h2>
              <NavRightWrapper>
                <span>{name || 'Your name'}</span>
                <Button onClick={this.handleLogout}>Log Out</Button>
              </NavRightWrapper>
            </NavWrapper>
          </Container>
        </HeaderWrapper>
        <Container>
          <AccountForm goBack={this.handleUpdate} name={name} email={email} />
        </Container>
      </React.Fragment>
    );
  }
}
AccountPage.defaultProps = {
  name: '',
  email: '',
};

AccountPage.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({
  name: auth.name,
  email: auth.email,
});


export default connect(mapStateToProps, { logout })(AccountPage);
