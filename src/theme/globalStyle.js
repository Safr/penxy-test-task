import { injectGlobal } from 'styled-components';
import media from './media';

/* esint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 100%;
  }

  body {
    position: relative;
    min-width: 320px;
    min-height: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-size: 14px;
    color: #555;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    background-color: #fff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  figure {
    margin: 0;
  }

  img {
    border: none;
    height: auto;
  }

  a {
    outline: 0;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: #222;

    &:hover span {
      color: #00a6eb;
    }

    &:hover {
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
      color: inherit;
      outline: none;
      outline-offset: initial;
      box-shadow: initial;
      border: 0;
    }
  }

  label {
    user-select: none;
  }

  input {
    outline: none;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  ul li,
  ol li {
    list-style: none;
  }
  /* input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: 0 15px;
    z-index: 1;
    font-style: normal;
    border: 1px solid #ededed;
    background-color: transparent;
  } */
`;
