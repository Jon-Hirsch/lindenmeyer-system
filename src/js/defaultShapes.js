import shortid from 'shortid';

const defaultShapes = {
  plant: {
    symbols: [
      {
        name: 'x',
        operation: 'move',
        amount: 2,
        productionRules: 'f-[[x]+x]+f[+fx]-x',
        id: shortid.generate()
      },
      {
        name: 'f',
        operation: 'move',
        amount: 2,
        productionRules: 'ff',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: 25,
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: -25,
        productionRules: '-',
        id: shortid.generate()
      },
      {
        name: '[',
        operation: 'startBranch',
        amount: '',
        productionRules: '[',
        id: shortid.generate()
      },
      {
        name: ']',
        operation: 'endBranch',
        amount: '',
        productionRules: ']',
        id: shortid.generate()
      }
    ],
    axiom: 'x',
    iterations: 6,
    startX: 400,
    startY: 400,
    startAngle: -90,
    preset: 'plant'
  },
  triangle: {
    symbols: [
      {
        name: 'x',
        operation: 'move',
        amount: 2,
        productionRules: '+y-x-y+',
        id: shortid.generate()
      },
      {
        name: 'y',
        operation: 'move',
        amount: 2,
        productionRules: '-x+y+x-',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: 60,
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: -60,
        productionRules: '-',
        id: shortid.generate()
      }
    ],
    axiom: 'x',
    iterations: 8,
    startX: 150,
    startY: 20,
    startAngle: 0,
    preset: 'triangle'
  }
};

export default defaultShapes;
