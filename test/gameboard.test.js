import Gameboard from '../src/gameboard';
import Player from '../src/player';

let player1 = Player('Name',"X");
let player2 = Player('Name2', 'O');
let gboard = Gameboard(player1, player2);

test('it returns player 1', () => {
  expect(JSON.stringify(gboard.getPlayer1())).toBe(JSON.stringify(Player('Name', 'X')));
});

test('it returns player 2', () => { // Mockup required
  expect(JSON.stringify(gboard.getPlayer2())).toBe(JSON.stringify(Player('Name2', 'O')));
});

test('it returns winner symbol X', () => {
  gboard.clear();
  gboard.move(true, 0);
  gboard.move(false, 3);
  gboard.move(true, 1);
  gboard.move(false, 4);
  gboard.move(true, 2);
  expect(gboard.winstatus()).toMatch(/X/);
});

test('it returns winner symbol O', () => {
  gboard.clear();
  gboard.move(false, 0);
  gboard.move(true, 3);
  gboard.move(false, 1);
  gboard.move(true, 4);
  gboard.move(false, 2);
  expect(gboard.winstatus()).toMatch(/O/);
});

test('it return T for a tie', () => {
  gboard.clear();
  gboard.move(true,0);
  gboard.move(false,2);
  gboard.move(true,1);
  gboard.move(false,3);
  gboard.move(true,5);
  gboard.move(false,4);
  gboard.move(true,6);
  gboard.move(false,7);
  gboard.move(true,8);
  expect(gboard.winstatus()).toMatch(/T/);
})

test('it returns false (not valid move)', () => {
  gboard.clear();
  gboard.move(true, 0);
  gboard.move(false, 3);
  expect(gboard.validateMove(0)).toBeFalsy();
});

test('it returns true (a valid move)', () => {
  gboard.clear();
  gboard.move(true, 0);
  gboard.move(false, 3);
  expect(gboard.validateMove(2)).toBeTruthy();
});

test('it set array board position 3 with player 1 symbol', () => {
  gboard.clear();
  gboard.move(true, 3);
  expect(gboard.getBoard()).toStrictEqual([null, null, null, 'X', null, null, null, null, null]);
});

test('it set array board position 0 with player2 symbol', () => {
  gboard.clear();
  gboard.move(true, 4);
  gboard.move(false,0)
  expect(gboard.getBoard()).toStrictEqual(['O', null, null, null, 'X', null, null, null, null]);
});
