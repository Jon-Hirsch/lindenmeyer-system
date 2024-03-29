export default function renderLSystem(
  symbols,
  axiom,
  iterations,
  startX,
  startY,
  startAngle,
  context,
  scale = 1
) {
  const angleInRadians = startAngle * (Math.PI / 180);
  const sequence = generateSequence(symbols, axiom, iterations);
  drawSequence(
    sequence,
    symbols,
    startX,
    startY,
    angleInRadians,
    context,
    scale
  );
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

function drawSequence(
  sequence,
  symbols,
  startX,
  startY,
  startAngle,
  context,
  scale
) {
  let currentX = isNaN(startX) ? 0 : +startX * scale;
  let currentY = isNaN(startY) ? 0 : +startY * scale;
  let currentAngle = isNaN(startAngle) ? 0 : +startAngle;
  let branches = [];
  context.strokeStyle = '#fff';
  context.fillStyle = '#202020';
  context.beginPath();
  context.moveTo(currentX, currentY);
  context.fillRect(0, 0, 800 * scale, 480 * scale);

  const symbolMap = symbols.reduce((map, symbol) => {
    map[symbol.name] = symbol;
    return map;
  }, {});

  sequence.split('').forEach((symbolName) => {
    let symbol = symbolMap[symbolName];

    if (!symbol) return;

    const amount = isNaN(symbol.amount) ? 0 : +symbol.amount;

    switch (symbol.operation) {
      case 'move':
        currentX += Math.cos(currentAngle) * amount * scale;
        currentY += Math.sin(currentAngle) * amount * scale;
        context.lineTo(currentX, currentY);
        break;
      case 'rotate':
        currentAngle += (amount * Math.PI) / 180;
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
