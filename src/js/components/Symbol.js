import React from 'react';
import PropTypes from 'prop-types';
import dispatch from '../dispatch';

export default function Symbol({
  name,
  operation,
  amount,
  productionRules,
  id,
  firstSymbol
}) {
  const showAmount = ['move', 'rotate'].includes(operation);
  return (
    <div className="lindenmeyer-system-symbol">
      Name:{' '}
      <input
        type="text"
        className="symbol-name"
        maxLength={1}
        value={name}
        onChange={({ target: { value } }) => updateSetting(id, 'name', value)}
      />{' '}
      | Operation:{' '}
      <select
        value={operation}
        onChange={({ target: { value } }) =>
          updateSetting(id, 'operation', value)}
      >
        <option value="none">None</option>
        <option value="move">Move Foward</option>
        <option value="rotate">Rotate</option>
        <option value="startBranch">Start Branch</option>
        <option value="endBranch">End Branch</option>
      </select>{' '}
      {showAmount && (
        <input
          type="text"
          className="symbol-amount"
          value={amount}
          onChange={({ target: { value } }) =>
            updateSetting(id, 'amount', value)}
        />
      )}{' '}
      | Production Rules:{' '}
      <input
        type="text"
        className="symbol-rules"
        value={productionRules}
        onChange={({ target: { value } }) =>
          updateSetting(id, 'productionRules', value)}
      />
      {!firstSymbol && (
        <div
          className="lindenmeyer-system-button delete-symbol-button"
          onClick={() => removeSymbol(id)}
        >
          Remove Symbol
        </div>
      )}
    </div>
  );
}

function removeSymbol(id) {
  dispatch({
    type: 'REMOVE_SYMBOL',
    id
  });
}

function updateSetting(id, setting, value) {
  dispatch({
    type: 'UPDATE_SYMBOL_SETTING',
    id,
    setting,
    value
  });
}

Symbol.propTypes = {
  name: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  productionRules: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  firstSymbol: PropTypes.bool.isRequired
};
