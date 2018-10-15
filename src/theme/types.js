import styled from 'styled-components';
import media from './media';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 66px;
  height: 26px;
  margin-right: ${({ marginRight }) => (marginRight ? '12px' : 'none')};
  line-height: 23px;
  color: ${({ bgNone }) => (bgNone ? '#000' : '#fff')};
  background: ${({ bgNone }) => (bgNone ? 'none' : '#330a6d')};
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: ${({ boxShadow }) => (boxShadow ? '0 4px 4px rgba(0, 0, 0, .25)' : 'none')};
  cursor: pointer;
  transition: all .3s;

  &:hover,
  &:active {
    color: ${({ bgNone }) => (bgNone ? '#fff' : '#330a6d')};
    border-color: ${({ bgNone }) => (bgNone ? '#330a6d' : '#000')};
    background-color: ${({ bgNone }) => (bgNone ? '#330a6d' : '#fff')};
  }
`;

export const FormWrapper = styled.div`
  width: 366px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #fff;

  form {
    width: 326px;

    div {
      position: relative;
    }
  }

  span {
    position: absolute;
    top: 7px;
    right: 7px;
    color: #fc0222;
  }

  label {
    display: block;
    font-weight: bold;
    padding-left: 5px;
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 5px;
    border: 2px solid #330a6d;

    &::placeholder {
      color: #000;
    }
  }

  h2 {
    margin-bottom: 18px;
    text-align: center;
    color: #330a6d;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 7px;
  }
`;

export const PositionWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 100;
  width: 400px;
  margin: 0 auto;
`;
