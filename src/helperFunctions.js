export function validatePlayers(player1, player2) {
  if (player1.getName() === '' || player2.getName() === '') {
    return false;
  }
  return true;
}

export function sendAlert(text) {
  alert(text); // eslint-disable-line no-alert
}