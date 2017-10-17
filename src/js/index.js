import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../styles/app.scss';
import renderLSystem from './renderLSystem';

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

  ReactDOM.render(<App />, controlsContainer);

  const symbols = [];
  symbols.push({ name: 'x', operation: 'move', amount: 2, productionRules: 'f-[[x]+x]+f[+fx]-x' });
  symbols.push({ name: 'f', operation: 'move', amount: 2, productionRules: 'ff' });
  symbols.push({ name: '+', operation: 'rotate', amount: 25, productionRules: '+' });
  symbols.push({ name: '-', operation: 'rotate', amount: -25, productionRules: '-' });
  symbols.push({ name: '[', operation: 'startBranch', amount: '', productionRules: '[' });
  symbols.push({ name: ']', operation: 'endBranch', amount: '', productionRules: ']' });

  renderLSystem(symbols, 'x', 6, 400, 400, -0.5 * Math.PI, context);
}
