import { css } from 'styled-components';

const sizes = {
  phone: 480,
  tablet: 576,
  tabletLarge: 768,
  desktop: 992,
  giant: 1170,
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size](...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    },
  };
}, {});

export default media;
