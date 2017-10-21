import React from 'react';
import Symbol from './Symbol';
import dispatch from '../dispatch';

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
        <Symbol key={symbol.id} {...symbol} firstSymbol={!index} />
      ))}
      <div
        className="lindenmeyer-system-button add-symbol-button"
        onClick={addSymbol}
      >
        Add Symbol
      </div>
      <div className="lindenmeyer-system-start-settings">
        <div>
          <h3>Axiom (Start Value)</h3>
          Axiom:{' '}
          <input
            value={axiom}
            onChange={({ target: { value } }) =>
              updateSetting('axiom', value)}
          />
        </div>
        <div>
          <h3>Position</h3>
          <div>
            X:{' '}
            <input
              type="text"
              value={startX}
              onChange={({ target: { value } }) =>
                updateSetting('startX', value, true)}
            />
          </div>
          <div>
            Y:{' '}
            <input
              type="text"
              value={startY}
              onChange={({ target: { value } }) =>
                updateSetting('startY', value, true)}
            />
          </div>
        </div>
        <div>
          <h3>Presets</h3>
          <select
            value={preset}
            onChange={({ target: { value } }) => updatePreset(value)}
          >
            <option value="plant">Plant</option>
            <option value="triangle">Sierpinski Triangle</option>
            <option value="snowflake">Koch Snowflake</option>
            <option value="dragonCurve">Dragon Curve</option>
            <option value="triangleVarient">Sierpinski Triangle Varient</option>
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
            onChange={({ target: { value } }) =>
              updateSetting('iterations', value, true)}
          />
        </div>
        <div>
          <h3>Starting Angle</h3>
          Angle:{' '}
          <input
            type="text"
            className="lindenmeyer-system-angle"
            onChange={({ target: { value } }) =>
              updateSetting('startAngle', value, true)}
            value={startAngle}
          />
        </div>
        <div />
      </div>
    </div>
  );
}

function addSymbol() {
  dispatch({
    type: 'ADD_SYMBOL'
  });
}

function updateSetting(setting, value, isNumeric) {
  if (isNumeric && value) value = +value;
  if (isNumeric && isNaN(value)) value = 0;
  dispatch({
    type: 'UPDATE_SETTING',
    setting,
    value
  });
}

function updatePreset(value) {
  dispatch({
    type: 'SELECT_PRESET_SHAPE',
    shape: value
  });
}