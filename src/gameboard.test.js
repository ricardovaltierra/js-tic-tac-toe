import Gameboard from './gameboard';

test('it returns player 1', () => { // Mockup required
  expect(Gameboard.getPlayer1()).toMatchObject(Player('Name', 'X'));
});

test('it returns player 2', () => { // Mockup required
  expect(Gameboard.getPlayer2()).toMatchObject(Player('Name2', 'O'));
});

test('it returns winner symbol X', () => { // Mockup required
  expect(Gameboard.winstatus()).toMatch(/X/);
});

test('it returns false (not valid move)', () => { // Mockup required
  expect(Gameboard.validateMove(2)).toBeFalsy();
});

test('it set array board position 3 with player 1 symbol', () => { // Mockup required
  
});