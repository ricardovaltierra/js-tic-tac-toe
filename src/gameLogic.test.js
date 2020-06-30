import GameLogic from './gameLogic';

// Mockup required

test('it returns "YOU WIN (Player one\'s name)"', () => {
  expect(getFinalLabel('X')).toBe('YOU WIN David');
});

test('it returns "YOU WIN (Player two\'s name)"', () => {
  expect(getFinalLabel('O')).toBe('YOU WIN Ricardo');
});

test('it returns "It\'s a Tie!"', () => {
  expect(getFinalLabel('T')).toBe("It's a Tie!");
});