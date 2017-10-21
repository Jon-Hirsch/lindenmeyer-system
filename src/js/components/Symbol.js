import React from 'react';

export default function Symbol({
  name,
  operation,
  amount,
  productionRules,
  firstSymbol
}) {
  const showAmount = ['move', 'rotate'].includes(operation);
  return (
    <div className="lindenmeyer-system-symbol">
      Name:{' '}
      <input type="text" className="symbol-name" maxLength={1} value={name} /> |
      Operation:{' '}
      <select value={operation}>
        <option value="none">None</option>
        <option value="move">Move Foward</option>
        <option value="rotate">Rotate</option>
        <option value="startBranch">Start Branch</option>
        <option value="endBranch">End Branch</option>
      </select>{' '}
      {showAmount && (
        <input type="text" className="symbol-amount" value={amount} />
      )}{' '}
      | Production Rules:{' '}
      <input type="text" className="symbol-rules" value={productionRules} />
      {!firstSymbol && (
        <div className="lindenmeyer-system-button delete-symbol-button">
          Remove Symbol
        </div>
      )}
    </div>
  );
}
