import React from 'react';
import App from '../../src/js/components/App';

describe('App', () => {
  let shallowWrapper;

  function render() {
    return shallow(<App />);
  }

  beforeEach(() => {
    shallowWrapper = render();
  });

  test('should match snapshot', () => {
    expect(shallowWrapper.getElement()).toMatchSnapshot();
  });
});
