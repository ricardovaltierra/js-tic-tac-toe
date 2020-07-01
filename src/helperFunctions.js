export function validatePlayers(player1, player2) {
  if (player1.getName() === '' || player2.getName() === '') {
    return false;
  }
  return true;
}

export function getFinalLabel(winner, gboard) {
  if (winner === 'T') {
    return "It's a Tie!";
  }
  if (winner === 'O') {
    if (gboard.getPlayer2().getSymbol() === 'O') {
      return `You WIN ${gboard.getPlayer2().getName()}`;
    }
    return `You WIN ${gboard.getPlayer1().getName()}`;
  }
  if (gboard.getPlayer2().getSymbol() === 'X') {
    return `You WIN ${gboard.getPlayer2().getName()}`;
  }
  return `You WIN ${gboard.getPlayer1().getName()}`;
}

export function sendAlert(text) {
  alert(text); // eslint-disable-line no-alert
}