import reverseString from '../code/reverse.js';

test('String should be reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});
