import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { FooterCopyrightWrapper, P } from './FooterCopyright.style';


const FooterCopyright = () => (
  <FooterCopyrightWrapper>
    <Container>
      <P>2018 © Powered by SlideSpiel.com</P>
    </Container>
  </FooterCopyrightWrapper>
);

export default FooterCopyright;
