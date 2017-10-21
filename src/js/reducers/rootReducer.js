import defaultShapes from '../defaultShapes';

const defaultState = defaultShapes.plant;

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SELECT_PRESET_SHAPE': {
      return Object.assign({}, state, defaultShapes[action.shape]);
    }
    default: {
      return state;
    }
  }
}