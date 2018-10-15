import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Button } from '../../../theme/types';
import { HomeContentWrapper } from './HomeContent.style';

const HomeContent = ({ onFormShown }) => (
  <HomeContentWrapper>
    <Container>
      <h2>Access top medical education now!</h2>
      <ul>
        <li>24-hour access on desktop & mobile devices</li>
        <li>82 presentations structured into 5 tracks</li>
        <li>40+ hours of CME</li>
      </ul>
      <Button onClick={onFormShown}>Create Account</Button>
      <p>Every year CORD selects the best Residency Educators from all over the country to share their expertise at Academic Assembly on topics that range from “Sustainability in Social Media” to “GME Financing” and so much more!</p>
    </Container>
  </HomeContentWrapper>
);

HomeContent.propTypes = {
  onFormShown: PropTypes.func.isRequired,
};

export default HomeContent;
