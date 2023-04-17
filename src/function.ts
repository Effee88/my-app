function add(a: number, b: number): number {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
  return result;
}

function subtract(a: number, b: number): number {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
  return result;
}

function multiply(a: number, b: number): number {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
  return result;
}

function divide(a: number, b: number): number {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
  return result;
}

add(2, 3);
subtract(5, 2);
multiply(4, 6);
divide(10, 2);