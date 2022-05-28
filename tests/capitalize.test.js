import capitalize from '../code/capitalize.js';

test('Word should be Capitalized', () => {
  expect(capitalize('hello')).toMatch(/^[A-Z][a-z]*/);
  expect(capitalize('HeLlO')).toMatch(/^[A-Z][a-z]*/);
});
