import Player from '../src/player';

test('it returns winner symbol X', () => { // Mockup required
  expect(Player.getName()).toBe("Name");
});

test('it returns winner symbol X', () => { // Mockup required
  expect(Player.getSymbol()).toMatch(/X/);
});