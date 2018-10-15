/**
 * Defines the React 16 Adapter for Enzyme
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
import {
 configure, mount, render, shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import DotEnv from 'dotenv';

configure({ adapter: new Adapter() });
// DotEnv.config({ path: '.env.test' });

// make enzyme functions available in all test files
global.shallow = shallow;
global.mount = mount;
global.render = render;

// const { JSDOM } = require('jsdom');

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;

// function copyProps(src, target) {
//   const props = Object.getOwnPropertyNames(src)
//     .filter(prop => typeof target[prop] === 'undefined')
//     .reduce((result, prop) => ({
//       ...result,
//       [prop]: Object.getOwnPropertyDescriptor(src, prop),
//     }), {});
//   Object.defineProperties(target, props);
// }

// global.window = window;
// global.document = window.document;
// global.navigator = {
//   userAgent: 'node.js',
// };
// copyProps(window, global);
