import React from 'react';
import PropTypes from 'prop-types';
import Symbol from './Symbol';
import dispatch from '../dispatch';

export default function App({ state }) {
  const { symbols, axiom, iterations, startX, startY, startAngle, preset } =
    state;

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
            className="lindenmeyer-system-axiom"
            value={axiom}
            onChange={({ target: { value } }) => updateSetting('axiom', value)}
          />
        </div>
        <div>
          <h3>Position</h3>
          <div>
            X:{' '}
            <input
              className="lindenmeyer-system-x"
              type="text"
              value={startX}
              onChange={({ target: { value } }) =>
                updateSetting('startX', value)
              }
            />
          </div>
          <div>
            Y:{' '}
            <input
              className="lindenmeyer-system-y"
              type="text"
              value={startY}
              onChange={({ target: { value } }) =>
                updateSetting('startY', value)
              }
            />
          </div>
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
              updateSetting('iterations', value)
            }
          />
        </div>
        <div>
          <h3>Starting Angle</h3>
          Angle:{' '}
          <input
            type="text"
            className="lindenmeyer-system-angle"
            onChange={({ target: { value } }) =>
              updateSetting('startAngle', value)
            }
            value={startAngle}
          />
        </div>
      </div>
      <div className="lindenmeyer-system-start-settings">
        <div>
          <h3>Presets</h3>
          <select
            className="lindenmeyer-system-presets"
            value={preset}
            onChange={({ target: { value } }) => updatePreset(value)}
          >
            <option value="plant">Plant</option>
            <option value="triangle">Sierpinski Triangle</option>
            <option value="snowflake">Koch Snowflake</option>
            <option value="dragonCurve">Dragon Curve</option>
            <option value="triangleVariant">Sierpinski Triangle Variant</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function addSymbol() {
  dispatch({
    type: 'ADD_SYMBOL',
  });
}

function updateSetting(setting, value) {
  dispatch({
    type: 'UPDATE_SETTING',
    setting,
    value,
  });
}

function updatePreset(value) {
  dispatch({
    type: 'SELECT_PRESET_SHAPE',
    shape: value,
  });
}

App.propTypes = {
  state: PropTypes.shape({
    symbols: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        operation: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        productionRules: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
    axiom: PropTypes.string.isRequired,
    iterations: PropTypes.string.isRequired,
    startX: PropTypes.string.isRequired,
    startY: PropTypes.string.isRequired,
    startAngle: PropTypes.string.isRequired,
    preset: PropTypes.string.isRequired,
  }).isRequired,
};
