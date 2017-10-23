import React from 'react';
import App from '../../../src/js/components/App';
import Symbol from '../../../src/js/components/Symbol';
import dispatch from '../../../src/js/dispatch';

jest.mock('../../../src/js/dispatch');

describe('App', () => {
  let shallowWrapper, state;

  function render() {
    return shallow(<App state={state} />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    state = {
      symbols: [
        {
          name: 'x',
          operation: 'move',
          amount: '2',
          productionRules: '+y-x-y+',
          id: '1'
        },
        {
          name: 'y',
          operation: 'move',
          amount: '2',
          productionRules: '-x+y+x-',
          id: '2'
        },
        {
          name: '+',
          operation: 'rotate',
          amount: '60',
          productionRules: '+',
          id: '3'
        },
        {
          name: '-',
          operation: 'rotate',
          amount: '-60',
          productionRules: '-',
          id: '4'
        }
      ],
      axiom: 'x',
      iterations: '8',
      startX: '150',
      startY: '20',
      startAngle: '0',
      preset: 'triangle'
    };

    shallowWrapper = render();
  });

  test('should match snapshot', () => {
    expect(shallowWrapper.getElement()).toMatchSnapshot();
  });

  test('should render a Symbol component for each symbol', () => {
    expect(shallowWrapper.find(Symbol).length).toEqual(4);
  });

  describe('axiom field', () => {
    test('should dispatch UPDATE_SETTING on change', () => {
      shallowWrapper
        .find('.lindenmeyer-system-axiom')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SETTING',
        setting: 'axiom',
        value: 'newValue'
      });
    });
  });

  describe('x field', () => {
    test('should dispatch UPDATE_SETTING on change', () => {
      shallowWrapper
        .find('.lindenmeyer-system-x')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SETTING',
        setting: 'startX',
        value: 'newValue'
      });
    });
  });

  describe('y field', () => {
    test('should dispatch UPDATE_SETTING on change', () => {
      shallowWrapper
        .find('.lindenmeyer-system-y')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SETTING',
        setting: 'startY',
        value: 'newValue'
      });
    });
  });

  describe('iterations field', () => {
    test('should dispatch UPDATE_SETTING on change', () => {
      shallowWrapper
        .find('.lindenmeyer-system-iterations')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SETTING',
        setting: 'iterations',
        value: 'newValue'
      });
    });
  });

  describe('angle field', () => {
    test('should dispatch UPDATE_SETTING on change', () => {
      shallowWrapper
        .find('.lindenmeyer-system-angle')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SETTING',
        setting: 'startAngle',
        value: 'newValue'
      });
    });
  });

  describe('preset dropdown', () => {
    test('should dispatch SELECT_PRESET_SHAPE on change', () => {
      shallowWrapper
        .find('.lindenmeyer-system-presets')
        .simulate('change', { target: { value: 'snowflake' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'SELECT_PRESET_SHAPE',
        shape: 'snowflake'
      });
    });
  });

  describe('add symbol button', () => {
    test('should dispatch ADD_SYMBOL on click', () => {
      shallowWrapper.find('.add-symbol-button').simulate('click');
      expect(dispatch).toHaveBeenCalledWith({
        type: 'ADD_SYMBOL'
      });
    });
  });
});
