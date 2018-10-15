import styled from 'styled-components';
import media from '../../../theme/media';

export const FooterCopyrightWrapper = styled.div`
  padding: 30px 0;
  color: #000;
  font-size: 12px;
  ${media.tablet`
    padding: 20px 0;
  `}
`;

export const P = styled.p`
  text-align: right;
  ${media.tabletLarge`
    text-align: center;
  `}
`;
