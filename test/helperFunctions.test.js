import { validatePlayers, sendAlert } from '../src/helperFunctions';
import Player from '../src/player';

test('it returns false with player1 empty string', () => {
  const player1 = Player('', 'O');
  const player2 = Player('two', 'X');
  expect(validatePlayers(player1, player2)).toBeFalsy();
});

test('it returns false with player2 empty string', () => {
  const player1 = Player('one', 'O');
  const player2 = Player('', 'X');
  expect(validatePlayers(player1, player2)).toBeFalsy();
});

test('it returns true when player1 and player2 contains a valid name', () => {
  const player1 = Player('one', 'O');
  const player2 = Player('two', 'X');
  expect(validatePlayers(player1, player2)).toBeTruthy();
});

test('it returns false when player1 and player2 contains a invalid name', () => {
  const player1 = Player('', 'O');
  const player2 = Player('', 'X');
  expect(validatePlayers(player1, player2)).toBeFalsy();
});

test('alert is send', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => { sendAlert('try'); });
});