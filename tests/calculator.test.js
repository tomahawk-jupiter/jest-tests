import calculator from '../code/calculator.js';

test('Calculator.add()', () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test('Calculator.subtract()', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('Calculator.multiply()', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('Calculator.divide()', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
