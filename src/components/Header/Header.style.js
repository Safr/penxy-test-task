import styled from 'styled-components';
import media from '../../theme/media';

export const HeaderWrapper = styled.header`
  padding-bottom: 15px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    display: block;
    text-align: center;
  `}
`;

export const NavLogo = styled.figure`
  svg {
    width: 293px;
    padding-top: 10px;
    ${media.tablet`
      width: 200px;
    `}
  }
`;

export const NavLoginWrapper = styled.div`
  line-height: 80px;
`;

export const NavRightWrapper = styled.div`
  display: flex;
  ${media.desktop`
    position: relative;
  `}
  ${media.tablet`
    display: block;
  `}
`;
