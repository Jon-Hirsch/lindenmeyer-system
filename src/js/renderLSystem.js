export default function renderLSystem(
  symbols,
  axiom,
  iterations,
  startX,
  startY,
  startAngle,
  context
) {
  const angleInRadians = startAngle * (Math.PI / 180);
  const sequence = generateSequence(symbols, axiom, iterations);
  drawSequence(sequence, symbols, startX, startY, angleInRadians, context);
}

function generateSequence(symbols, axiom, iterations) {
  let sequence = axiom;
  const ruleMap = symbols.reduce((map, symbol) => {
    map[symbol.name] = symbol.productionRules;
    return map;
  }, {});

  for (let i = 0; i < iterations; i++) {
    sequence = sequence.split('').reduce((acc, symbolName) => {
      if (acc.length > 100000) return acc; //prevents the app from getting hung up on a crazy number of operations
      return acc + ruleMap[symbolName];
    }, '');
  }
  return sequence.slice(0, 100000);
}

function drawSequence(sequence, symbols, startX, startY, startAngle, context) {
  let currentX = startX;
  let currentY = startY;
  let currentAngle = startAngle;
  let branches = [];
  context.strokeStyle = '#fff';
  context.fillStyle = '#202020';
  context.beginPath();
  context.moveTo(currentX, currentY);
  context.fillRect(0, 0, 800, 480);

  const symbolMap = symbols.reduce((map, symbol) => {
    map[symbol.name] = symbol;
    return map;
  }, {});

  sequence.split('').forEach(symbolName => {
    let symbol = symbolMap[symbolName];

    if (!symbol) return;

    switch (symbol.operation) {
      case 'move':
        currentX += Math.cos(currentAngle) * symbol.amount;
        currentY += Math.sin(currentAngle) * symbol.amount;
        context.lineTo(currentX, currentY);
        break;
      case 'rotate':
        currentAngle += symbol.amount * Math.PI / 180;
        break;
      case 'startBranch':
        branches.push({ x: currentX, y: currentY, angle: currentAngle });
        break;
      case 'endBranch':
        const branch = branches.pop();
        currentX = branch.x;
        currentY = branch.y;
        currentAngle = branch.angle;
        context.moveTo(currentX, currentY);
        break;
    }
  });
  context.stroke();
}
