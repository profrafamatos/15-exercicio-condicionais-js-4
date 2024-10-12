    // Não faça nada neste arquivo
const parOuImpar = require('./index');

test('verifica se 4 é par', () => {
  expect(parOuImpar(4)).toBe('Par');
});

test('verifica se 7 é ímpar', () => {
  expect(parOuImpar(7)).toBe('Ímpar');
});

test('verifica se 0 é par', () => {
  expect(parOuImpar(0)).toBe('Par');
});

test('verifica se -3 é ímpar', () => {
  expect(parOuImpar(-3)).toBe('Ímpar');
});

test('verifica se -8 é par', () => {
  expect(parOuImpar(-8)).toBe('Par');
});
