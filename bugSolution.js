function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero. Please provide a non-zero divisor.');
  }
  return a / b;
}

function calculate(a, b, operation) {
  try {
    switch (operation) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        throw new Error('Invalid operation. Please use +, -, *, or /.');
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

console.log(calculate(10, 5, '+')); //15
console.log(calculate(10, 5, '-')); //5
console.log(calculate(10, 5, '*')); //50
console.log(calculate(10, 5, '/')); //2
console.log(calculate(10, 0, '/')); // throws error
console.log(calculate(10,5,'%'));// throws error