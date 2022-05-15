import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './components/App';
import '../styles/app.scss';
import renderLSystem from './renderLSystem';
import { initDispatch } from './dispatch';

export default function initLSystem() {
  const container = document.getElementById('lSystemContainer');
  const controlsContainer = document.createElement('div');
  const canvas = document.createElement('canvas');
  resizeCanvas(canvas);
  const context = canvas.getContext('2d');
  container.appendChild(canvas);
  container.appendChild(controlsContainer);

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(renderEverything);
  window.addEventListener('resize', () => {
    resizeCanvas(canvas);
    renderEverything();
  });

  function renderEverything() {
    const state = store.getState();
    ReactDOM.render(<App state={state} />, controlsContainer);
    const { symbols, axiom, iterations, startX, startY, startAngle } = state;
    const scale = canvas.width / 800;
    renderLSystem(
      symbols,
      axiom,
      iterations,
      startX,
      startY,
      startAngle,
      context,
      scale
    );
  }

  initDispatch(store.dispatch);

  store.dispatch({
    type: 'SELECT_DEFAULT_SHAPE',
    shape: 'plant',
  });
}

function resizeCanvas(canvas) {
  if (window.innerWidth < 375) {
    canvas.width = 300;
    canvas.height = 180;
  } else if (window.innerWidth < 1050) {
    const width = (window.innerWidth / 1050) * 800;
    const height = (window.innerWidth / 1050) * 480;
    canvas.width = width;
    canvas.height = height;
  } else {
    canvas.width = 800;
    canvas.height = 480;
  }
}
