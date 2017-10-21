import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './components/App';
import '../styles/app.scss';
import renderLSystem from './renderLSystem';
import dispatch, { initDispatch } from './dispatch';

document.addEventListener('DOMContentLoaded', initLSystem);

function initLSystem() {
  const container = document.getElementById('lSystemContainer');
  const controlsContainer = document.createElement('div');
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 480;
  const context = canvas.getContext('2d');
  container.appendChild(canvas);
  container.appendChild(controlsContainer);

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    const state = store.getState();
    ReactDOM.render(<App state={state} />, controlsContainer);
    const { symbols, axiom, iterations, startX, startY, startAngle } = state;
    renderLSystem(
      symbols,
      axiom,
      iterations,
      startX,
      startY,
      startAngle,
      context
    );
  });

  initDispatch(store);

  dispatch({
    type: 'SELECT_DEFAULT_SHAPE',
    shape: 'plant'
  });
}
