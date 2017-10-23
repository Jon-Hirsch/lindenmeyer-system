import shortid from 'shortid';
import rootReducer from '../../../src/js/reducers/rootReducer';
import defaultShapes from '../../../src/js/defaultShapes';

jest.mock('shortid');

describe('rootReducer', () => {
  beforeEach(() => {
    shortid.generate.mockReturnValue('123');
  });

  describe('default', () => {
    test('return the the default shape', () => {
      expect(rootReducer(undefined, {})).toEqual(defaultShapes.plant);
    });
  });

  describe('SELECT_PRESET_SHAPE', () => {
    test('sets the state to the given default', () => {
      expect(
        rootReducer({}, { type: 'SELECT_PRESET_SHAPE', shape: 'snowflake' })
      ).toEqual(defaultShapes.snowflake);
    });
  });

  describe('REMOVE_SYMBOL', () => {
    test('removes the symbol with the given id', () => {
      expect(
        rootReducer(
          { symbols: [{ id: '123' }, { id: '456' }, { id: '789' }] },
          { type: 'REMOVE_SYMBOL', id: '456' }
        )
      ).toEqual({ symbols: [{ id: '123' }, { id: '789' }] });
    });
  });

  describe('ADD_SYMBOL', () => {
    test('removes the symbol with the given id', () => {
      expect(rootReducer({ symbols: [] }, { type: 'ADD_SYMBOL' })).toEqual({
        symbols: [
          {
            name: '',
            operation: 'none',
            amount: 0,
            productionRules: '',
            id: '123'
          }
        ]
      });
    });
  });

  describe('UPDATE_SETTING', () => {
    test('updates a setting with a new value', () => {
      expect(
        rootReducer(
          { axiom: 'a' },
          { type: 'UPDATE_SETTING', setting: 'axiom', value: 'xyz' }
        )
      ).toEqual({
        axiom: 'xyz'
      });
    });
  });

  describe('UPDATE_SYMBOL_SETTING', () => {
    test('updates a symbols setting with a new value', () => {
      expect(
        rootReducer(
          {
            symbols: [
              { id: '123', name: 'a' },
              { id: '456', name: 'b' },
              { id: '789', name: 'c' }
            ]
          },
          {
            type: 'UPDATE_SYMBOL_SETTING',
            setting: 'name',
            value: 'xyz',
            id: '456'
          }
        )
      ).toEqual({
        symbols: [
          { id: '123', name: 'a' },
          { id: '456', name: 'xyz' },
          { id: '789', name: 'c' }
        ]
      });
    });
  });
});
