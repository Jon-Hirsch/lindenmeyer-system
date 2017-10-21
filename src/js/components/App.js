import React from 'react';
import Symbol from './Symbol';

export default function App({ state }) {
  const {
    symbols,
    axiom,
    iterations,
    startX,
    startY,
    startAngle,
    preset
  } = state;
  return (
    <div>
      <h3>Symbols</h3>
      {symbols.map((symbol, index) => (
        <Symbol key={symbol.name + index} {...symbol} firstSymbol={!index} />
      ))}
      <div className="lindenmeyer-system-button add-symbol-button">Add Symbol</div>
      <div className="lindenmeyer-system-start-settings">
        <div>
          <h3>Axiom (Start Value)</h3>
          Axiom: <input value={axiom} />
        </div>
        <div>
          <h3>Position</h3>
          <div>
            X: <input type="text" value={startX} />
          </div>
          <div>
            Y: <input type="text" value={startY} />
          </div>
        </div>
        <div>
          <h3>Presets</h3>
          <select value={preset}>
            <option value="plant">Plant</option>
          </select>
        </div>
      </div>
      <div className="lindenmeyer-system-start-settings">
        <div>
          <h3>Number of Iterations</h3>
          Iterations:{' '}
          <input
            type="text"
            className="lindenmeyer-system-iterations"
            value={iterations}
          />
        </div>
        <div>
          <h3>Starting Angle</h3>
          Angle:{' '}
          <input
            type="text"
            className="lindenmeyer-system-angle"
            value={startAngle}
          />
        </div>
        <div />
      </div>
    </div>
  );
}
