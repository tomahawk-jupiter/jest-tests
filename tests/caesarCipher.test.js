import caesarCipher from '../code/caesarCipher.js';

test('Caesar Cipher', () => {
  expect(caesarCipher('hello')).toBe('uryyb');
  expect(caesarCipher('zulu')).toBe('mhyh');
  expect(caesarCipher('apple')).toBe('nccyr');
  expect(caesarCipher('a,b,c')).toBe('n,o,p');
  expect(caesarCipher('Hello World!')).toBe('Uryyb Jbeyq!');
});
