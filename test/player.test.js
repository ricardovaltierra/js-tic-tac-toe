import Player from '../src/player';

test('it returns player name', () => {
  let player = Player('Name', 'X');
  expect(player.getName()).toBe("Name");
});

test('it returns player symbol X', () => {
  let player = Player('name', 'X');
  expect(player.getSymbol()).toMatch(/X/);
});

test('it returns player name if is empty', () => {
  let player = Player('', 'X');
  expect(player.getName()).toBe("");
});

test('should get players symbols', () => {
  let player1 = Player('one',"O");
  let player2 = Player('two', 'X');
  expect(player1.getSymbol()).toBe('O');
  expect(player2.getSymbol()).toBe('X');
});