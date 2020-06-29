import DisplayController from './displayController';

const Gameboard = (player1, player2) => {
    let board = [null, null, null, null, null, null, null, null, null];
    let movX = true;
  
    function clear() {
      for (let i = 0; i < 9; i += 1) {
        document.getElementById(`row-${i}`).innerHTML = '';
      }
      document.getElementById('title-gameboard').innerHTML = 'Game Started';
      board = [null, null, null, null, null, null, null, null, null];
      movX = player1.getSymbol() === 'X';
    }
  
    function move(index) {
      if (board[index] === null) {
        if (movX) {
          board[index] = 'X';
          if (player1.getSymbol() === 'O') {
            DisplayController().changeName(player1.getName());
          } else {
            DisplayController().changeName(player2.getName());
          }
          DisplayController().addSymbol('X', index);
          movX = !movX;
        } else {
          board[index] = 'O';
          if (player1.getSymbol() === 'X') {
            DisplayController().changeName(player1.getName());
          } else {
            DisplayController().changeName(player2.getName());
          }
          DisplayController().addSymbol('O', index);
          movX = !movX;
        }
      } else {
        alert('This place is already taken'); // eslint-disable-line no-alert
      }
    }
  
    function winstatus() {
      const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      let whowin = false;
  
      winner.forEach((element) => {
        if (
          board[element[0]] === 'X'
          && board[element[1]] === 'X'
          && board[element[2]] === 'X'
        ) {
          whowin = 'X';
        } else if (
          board[element[0]] === 'O'
          && board[element[1]] === 'O'
          && board[element[2]] === 'O'
        ) {
          whowin = 'O';
        }
      });
  
      if (!board.includes(null) && (!whowin)) {
        whowin = "It's a Tie!";
      }
      return whowin;
    }
  
    function gameFinish(winner) {
      const winnerName = player1.getSymbol() === winner ? player1.getName() : player2.getName();
      if (winner.includes('Tie')) {
        document.getElementById('title-gameboard').innerHTML = winner;
      } else {
        document.getElementById(
          'title-gameboard',
        ).innerHTML = `You are the winner ${winnerName}!`;
      }
      document.getElementsByClassName('h3')[0].innerHTML = '';
      document.querySelector('#newgame .button').classList.remove('hide');
    }
  
    return {
      move,
      winstatus,
      gameFinish,
      clear,
    };
  };
  
  export default Gameboard;