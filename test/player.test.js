import Player from '../src/player';

test('it returns player name', () => {
  const player = Player('Name', 'X');
  expect(player.getName()).toBe('Name');
});

test('it returns player symbol X', () => {
  const player = Player('name', 'X');
  expect(player.getSymbol()).toMatch(/X/);
});

test('it returns player name if is empty', () => {
  const player = Player('', 'X');
  expect(player.getName()).toBe('');
});

test('should get players symbols', () => {
  const player1 = Player('one', 'O');
  const player2 = Player('two', 'X');
  expect(player1.getSymbol()).toBe('O');
  expect(player2.getSymbol()).toBe('X');
});