import ReactDOM from 'react-dom';
import initLSystem from '../../src/js/index';
import renderLSystem from '../../src/js/renderLSystem';
import { initDispatch } from '../../src/js/dispatch';

jest.mock('react-dom');
jest.mock('../../src/js/renderLSystem');
jest.mock('../../src/js/dispatch');

describe('initLSystem', () => {
  beforeEach(() => {
    window.document.getElementById = jest.fn(() =>
      document.createElement('div')
    );
  });

  test('should call initDispatch', () => {
    initLSystem();
    expect(initDispatch).toHaveBeenCalled();
  });

  test('should call renderLSystem', () => {
    initLSystem();
    expect(renderLSystem).toHaveBeenCalled();
  });

  test('should call ReactDOM.render', () => {
    initLSystem();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
