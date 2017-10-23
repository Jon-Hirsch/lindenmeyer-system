import shortid from 'shortid';

const defaultShapes = {
  plant: {
    symbols: [
      {
        name: 'x',
        operation: 'move',
        amount: '2',
        productionRules: 'y-[[x]+x]+y[+yx]-x',
        id: shortid.generate()
      },
      {
        name: 'y',
        operation: 'move',
        amount: '2',
        productionRules: 'yy',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: '25',
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: '-25',
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
    iterations: '6',
    startX: '400',
    startY: '400',
    startAngle: '-90',
    preset: 'plant'
  },
  triangle: {
    symbols: [
      {
        name: 'x',
        operation: 'move',
        amount: '2',
        productionRules: '+y-x-y+',
        id: shortid.generate()
      },
      {
        name: 'y',
        operation: 'move',
        amount: '2',
        productionRules: '-x+y+x-',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: '60',
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: '-60',
        productionRules: '-',
        id: shortid.generate()
      }
    ],
    axiom: 'x',
    iterations: '8',
    startX: '150',
    startY: '20',
    startAngle: '0',
    preset: 'triangle'
  },
  snowflake: {
    symbols: [
      {
        name: 'x',
        operation: 'move',
        amount: '5',
        productionRules: 'x+x--x+x',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: '60',
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: '-60',
        productionRules: '-',
        id: shortid.generate()
      }
    ],
    axiom: '+x--x--x',
    iterations: '4',
    startX: '200',
    startY: '122',
    startAngle: '0',
    preset: 'snowflake'
  },
  dragonCurve: {
    symbols: [
      {
        name: 'x',
        operation: 'none',
        amount: '0',
        productionRules: 'x+yf+',
        id: shortid.generate()
      },
      {
        name: 'y',
        operation: 'none',
        amount: '0',
        productionRules: '-fx-y',
        id: shortid.generate()
      },
      {
        name: 'f',
        operation: 'move',
        amount: '5',
        productionRules: 'f',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: '90',
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: '-90',
        productionRules: '-',
        id: shortid.generate()
      }
    ],
    axiom: 'xf',
    iterations: '10',
    startX: '400',
    startY: '240',
    startAngle: '0',
    preset: 'dragonCurve'
  },
  triangleVariant: {
    symbols: [
      {
        name: 'x',
        operation: 'move',
        amount: '1',
        productionRules: 'y[+x][-x]x',
        id: shortid.generate()
      },
      {
        name: 'y',
        operation: 'move',
        amount: '1',
        productionRules: 'yy',
        id: shortid.generate()
      },
      {
        name: '+',
        operation: 'rotate',
        amount: '120',
        productionRules: '+',
        id: shortid.generate()
      },
      {
        name: '-',
        operation: 'rotate',
        amount: '-120',
        productionRules: '-',
        id: shortid.generate()
      },
      {
        name: '[',
        operation: 'startBranch',
        amount: '0',
        productionRules: '[',
        id: shortid.generate()
      },
      {
        name: ']',
        operation: 'endBranch',
        amount: '0',
        productionRules: ']',
        id: shortid.generate()
      }
    ],
    axiom: '[+x][-x]x',
    iterations: '8',
    startX: '400',
    startY: '300',
    startAngle: '-90',
    preset: 'triangleVariant'
  }
};

export default defaultShapes;
