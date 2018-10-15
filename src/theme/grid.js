import styled, { css } from 'styled-components';
import media from './media';

// export const Div = styled.div`
//   ${({ marginBottom }) => marginBottom && css`
//     margin-bottom: ${marginBottom}
// `}
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    max-width: 960px;
  `}
  ${media.desktop`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    max-width: 960px;
  `}
`;

// export const MainWrapper = styled.div`
//   padding-top: 81px;
//   padding-bottom: ${({ pdBottomNone }) => (pdBottomNone ? '0' : '120px')};
//   ${media.desktop`
//     padding-bottom: ${({ pdBottomNone }) => (pdBottomNone ? '0' : '60px')};
//   `}
//   ${media.tablet`
//     padding-bottom: ${({ pdBottomNone }) => (pdBottomNone ? '0' : '30px')};
//   `}
// `;

// export const Relative = styled(Div)`
//   position: relative;
// `;

// export const Flex = styled(Div)`
//   display: flex;

//   ${({ column }) => column && css`
//     flex-direction: column;
// `}

//   ${({ justify }) => justify && css`
//     justify-content: ${justify};
//   `}

//   ${({ align }) => align && css`
//     align-content: ${align};
// `}

// ${({ justify }) => justify && css`
// justify-content: ${justify};
// `}
// `;