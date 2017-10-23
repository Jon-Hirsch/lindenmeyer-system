import shortid from 'shortid';
import defaultShapes from '../defaultShapes';

const defaultState = defaultShapes.plant;

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SELECT_PRESET_SHAPE': {
      return Object.assign({}, state, defaultShapes[action.shape]);
    }
    case 'REMOVE_SYMBOL': {
      const symbols = state.symbols.filter(symbol => symbol.id !== action.id);
      return Object.assign({}, state, { symbols });
    }
    case 'ADD_SYMBOL': {
      const symbols = state.symbols.concat([
        {
          name: '',
          operation: 'none',
          amount: 0,
          productionRules: '',
          id: shortid.generate()
        }
      ]);
      return Object.assign({}, state, { symbols });
    }
    case 'UPDATE_SETTING': {
      return Object.assign({}, state, { [action.setting]: action.value });
    }
    case 'UPDATE_SYMBOL_SETTING': {
      const symbols = state.symbols.slice(0);
      const index = symbols.findIndex(symbol => symbol.id === action.id);
      symbols[index] = Object.assign({}, symbols[index], {
        [action.setting]: action.value
      });
      return Object.assign({}, state, { symbols });
    }
    default: {
      return state;
    }
  }
}
