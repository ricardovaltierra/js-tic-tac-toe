import Player from './player';

export function getP1(){
  let node = document.querySelector('#player1');
  let name = node.value;
  let symbol = document.getElementsByName('symbol')[0].checked ? 'X': 'O';
  let player = Player(name,symbol);
  return player;
}

export function getP2(){
  let node = document.querySelector('#player2');
  let name = node.value;
  let symbol = document.getElementsByName('symbol')[0].checked ? 'O' : 'X';
  let player = Player(name,symbol);
  return player;
}

export function setPlayerName(player){
  document.querySelector('.current-player').textContent = player.getName();
}

export function hidePlayersName(){
  document.querySelector('#players-name').classList.add('hide');
}

export function showGameboard(){
  document.querySelector('#game-board').classList.remove('hide');
}

export function changeSubtitleLabel(text){
  document.querySelector('#title-gameboard').textContent = text;
}

export function displayTurn(player, index){
  const elem = document.createElement('i');
  if (player.getSymbol() === 'X'){
    elem.classList = "fas fa-times fa-7x";
  }else {
    elem.classList = "far fa-circle fa-7x";
  }
  document.querySelector(`#row-${index}`).appendChild(elem);
}
