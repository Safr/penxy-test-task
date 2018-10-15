import styled from 'styled-components';
import media from '../../theme/media';

export const HeaderWrapper = styled.header`
  padding-bottom: 15px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 80px;
  ${media.tablet`
    display: block;
    text-align: center;
  `}

  h2 {
    line-height: 80px;
    color: #330a6d;
  }
`;

export const NavRightWrapper = styled.div`
  span {
    margin-right: 15px;
  }
`;
