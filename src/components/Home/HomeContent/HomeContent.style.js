import styled from 'styled-components';
import media from '../../../theme/media';

export const HomeContentWrapper = styled.div`
  padding: 80px;
  color: #fff;
  background-image: url('${require('../../../images/background.jpg')}');
  background-size: cover;
  text-align: center;
  ${media.tabletLarge`
    padding: 70px;
  `}
  ${media.tablet`
    padding: 50px;
  `}

  @media screen and (min-resolution: 192dpi) {
    background-image: url('${require('../../../images/background@2x.jpg')}');
  }

  ul {
    width: 334px;
    margin: 0 auto 20px;
    text-align: left;
    ${media.phone`
      width: auto;
    `}

    li {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 7px;
        left: -15px;
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }

  h2 {
    margin-bottom: 70px;
    text-align: center;
    ${media.tabletLarge`
      margin-bottom: 40px;
      font-size: 30px;
    `}
    ${media.tablet`
      margin-bottom: 30px;
      font-size: 25px;
    `}
  }

  p {
    width: 451px;
    margin: 30px auto 0;
    ${media.tabletLarge`
      width: auto;
    `}
  }
`;
