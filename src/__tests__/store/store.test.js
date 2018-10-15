import { createStore } from 'redux';
import reducer from '../../reducers';

describe('Store', () => {
  it('should set up default state', () => {
    const store = createStore(reducer);
    const actual = store.getState();
    const expected = {
      auth: {
        name: '',
        email: '',
        token: '',
      },
    };
    expect(actual).toEqual(expected);
  });
});
