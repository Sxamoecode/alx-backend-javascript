function calculateNumber(type, a, b) {
  const num_a = Math.round(a);
  const num_b = Math.round(b);
  let c = 0;
  switch (type) {
  case 'SUM':
    c = num_a + num_b;
    break;
  case 'SUBTRACT':
    c = num_a - num_b;
    break;
  case 'DIVIDE':
    if (num_b === 0) {
          c = "Error";
    } else {
          c = num_a / num_b;
    }
    break;
  }
  return c;
}

module.exports = calculateNumber;
