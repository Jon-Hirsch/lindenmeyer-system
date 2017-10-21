const defaultShapes = {
  plant: {
    symbols: [
      { name: 'x', operation: 'move', amount: 2, productionRules: 'f-[[x]+x]+f[+fx]-x'},
      { name: 'f', operation: 'move', amount: 2, productionRules: 'ff' },
      { name: '+', operation: 'rotate', amount: 25, productionRules: '+' },
      { name: '-', operation: 'rotate', amount: -25, productionRules: '-' },
      { name: '[', operation: 'startBranch', amount: '', productionRules: '[' },
      { name: ']', operation: 'endBranch', amount: '', productionRules: ']' }
    ],
    axiom: 'x',
    iterations: 6,
    startX: 400,
    startY: 400,
    startAngle: -90,
    preset: 'plant'
  }
};

export default defaultShapes;