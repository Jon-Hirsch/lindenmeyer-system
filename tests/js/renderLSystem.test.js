import renderLSystem from '../../src/js/renderLSystem';
import defaultShapes from '../../src/js/defaultShapes';

describe('renderLSystem', () => {
  let context, shape;

  beforeEach(() => {
    context = {
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      fillRect: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn()
    };
    shape = Object.assign({}, defaultShapes.plant);
  });

  test('draw a shape', () => {
    const { symbols, axiom, iterations, startX, startY, startAngle } = shape;
    renderLSystem(
      symbols,
      axiom,
      iterations,
      startX,
      startY,
      startAngle,
      context
    );
    expect(context.stroke).toHaveBeenCalled();
  });

  test('limit the number of instructions to 100000', () => {
    shape.iterations = 20;
    const { symbols, axiom, iterations, startX, startY, startAngle } = shape;
    renderLSystem(
      symbols,
      axiom,
      iterations,
      startX,
      startY,
      startAngle,
      context
    );
    expect(context.stroke).toHaveBeenCalled();
  });

  test('should be able to handle non number values', () => {
    shape.startX = '-';
    shape.startY = '.';
    shape.startAngle = 'a';
    shape.symbols[0].amount = '-';
    const { symbols, axiom, iterations, startX, startY, startAngle } = shape;
    renderLSystem(
      symbols,
      axiom,
      iterations,
      startX,
      startY,
      startAngle,
      context
    );
    expect(context.stroke).toHaveBeenCalled();
  });

  test('should skip any characters that have not been defined as a symbol', () => {
    shape.symbols[0].productionRules += 'j';
    const { symbols, axiom, iterations, startX, startY, startAngle } = shape;
    renderLSystem(
      symbols,
      axiom,
      iterations,
      startX,
      startY,
      startAngle,
      context
    );
    expect(context.stroke).toHaveBeenCalled();
  });
});
