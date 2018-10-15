import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavLogo } from './Header.style';

const Logo = () => (
  <NavLogo>
    <span dangerouslySetInnerHTML={{ __html: require('../../images/logo.svg') }} />
  </NavLogo>
);

export default Logo;
