import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Icon from 'react-icons-kit';
import Logo from './Logo';
import { Button } from '../../theme/types';
import { logout } from '../../actions';
import {
  HeaderWrapper, NavWrapper, NavRightWrapper, NavLoginWrapper,
} from './Header.style';

class Header extends Component {
  state = {
    token: '',
  }

  static getDerivedStateFromProps(props, state) {
    const { onFormClose, push } = props;
    if (props.token !== state.token) {
      onFormClose();
      return {
        token: props.token,
      };
    }
    return null;
  }

  render() {
    const { name, token, onFormShown, logout } = this.props;
    return (
      <HeaderWrapper>
        <Container>
          <NavWrapper>
            <Logo />
            <NavRightWrapper>
              <NavLoginWrapper>
                {
                  token ? <span style={{ marginRight: '12px' }}><Link to="/account">{name || 'Your name'}</Link></span> : <Button marginRight bgNone onClick={onFormShown}>Log In</Button>
                }
                <Button onClick={token ? logout : onFormShown}>{token ? 'Log Out' : 'Sign Up'}</Button>
              </NavLoginWrapper>
            </NavRightWrapper>
          </NavWrapper>
        </Container>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  token: PropTypes.string,
  onFormShown: PropTypes.func.isRequired,
  onFormClose: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  name: auth.name,
  token: auth.token,
});

export default connect(mapStateToProps, { logout })(Header);
