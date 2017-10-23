import React from 'react';
import Symbol from '../../../src/js/components/Symbol';
import dispatch from '../../../src/js/dispatch';

jest.mock('../../../src/js/dispatch');

describe('Symbol', () => {
  let shallowWrapper, props;

  function render() {
    return shallow(<Symbol {...props} />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    props = {
      name: 'x',
      operation: 'none',
      amount: '2',
      productionRules: '+y-x-y+',
      id: '1',
      firstSymbol: true
    };

    shallowWrapper = render();
  });

  test('should match snapshot', () => {
    expect(shallowWrapper.getElement()).toMatchSnapshot();
  });

  test('should render a remove symbol button if firstSymbol is false', () => {
    props.firstSymbol = false;
    shallowWrapper = render();
    expect(shallowWrapper.find('.delete-symbol-button').length).toEqual(1);
  });

  test('should render a symbol amount if the operation is move', () => {
    props.operation = 'move';
    shallowWrapper = render();
    expect(shallowWrapper.find('.symbol-amount').length).toEqual(1);
  });

  test('should render a symbol amount if the operation is rotate', () => {
    props.operation = 'rotate';
    shallowWrapper = render();
    expect(shallowWrapper.find('.symbol-amount').length).toEqual(1);
  });

  describe('the remove symbol button', () => {
    test('should dispatch REMOVE_SYMBOL on click', () => {
      props.firstSymbol = false;
      shallowWrapper = render();
      shallowWrapper.find('.delete-symbol-button').simulate('click');
      expect(dispatch).toHaveBeenCalledWith({
        type: 'REMOVE_SYMBOL',
        id: '1'
      });
    });
  });

  describe('name field', () => {
    test('should dispatch UPDATE_SYMBOL_SETTING on change', () => {
      shallowWrapper
        .find('.symbol-name')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SYMBOL_SETTING',
        setting: 'name',
        value: 'newValue',
        id: '1'
      });
    });
  });

  describe('operation dropdown', () => {
    test('should dispatch UPDATE_SYMBOL_SETTING on change', () => {
      shallowWrapper
        .find('select')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SYMBOL_SETTING',
        setting: 'operation',
        value: 'newValue',
        id: '1'
      });
    });
  });

  describe('amount input', () => {
    test('should dispatch UPDATE_SYMBOL_SETTING on change', () => {
      props.operation = 'move';
      shallowWrapper = render();
      shallowWrapper
        .find('.symbol-amount')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SYMBOL_SETTING',
        setting: 'amount',
        value: 'newValue',
        id: '1'
      });
    });
  });

  describe('rules input', () => {
    test('should dispatch UPDATE_SYMBOL_SETTING on change', () => {
      shallowWrapper
        .find('.symbol-rules')
        .simulate('change', { target: { value: 'newValue' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_SYMBOL_SETTING',
        setting: 'productionRules',
        value: 'newValue',
        id: '1'
      });
    });
  });
});
