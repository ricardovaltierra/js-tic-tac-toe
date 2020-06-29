import Player from './player';
import DisplayController from './displayController';
import Gameboard from './gameboard';

const Game = (() => {
    let board = {};
    const validatePlayer = () => {
      const player1 = document.getElementById('player1');
      const player2 = document.getElementById('player2');
      if (player1.value === '') {
        alert('player1 cant be blank'); // eslint-disable-line no-alert
        return false;
      }
      if (player2.value === '') {
        alert('player2 cant be blank'); // eslint-disable-line no-alert
        return false;
      }
      return true;
    };
  
    const gameStart = (player1, player2) => {
      board = Gameboard(player1, player2);
      board.clear();
      DisplayController().changeName(player1.getName());
    };
  
    const startGame = () => {
      if (validatePlayer()) {
        document.getElementById('players-name').classList.add('hide');
        document.getElementById('game-board').classList.remove('hide');
        const p1symbol = document.getElementsByName('symbol')[0].checked
          ? 'X'
          : 'O';
        const p2symbol = document.getElementsByName('symbol')[0].checked
          ? 'O'
          : 'X';
        const player1 = Player(document.getElementById('player1').value, p1symbol,);
        const player2 = Player(
          document.getElementById('player2').value,
          p2symbol,
        );
        
        gameStart(player1, player2);
      }
    };
  
    const resetGame = () => {
      const player = document.getElementById('player1').value;
      document.getElementsByClassName(
        'h3',
      )[0].innerHTML = `Current turn:&nbsp;<span class="current-player">${player}</span>`;
      board.clear();
      document.getElementById('newgame').innerHTML = '';
    };
  
    const moveTo = (event) => {
      const i = event.target.id.slice(event.target.id.search(/\d+/));
      let winner = board.winstatus();
      if (!winner) {
        board.move(i);
      }
      winner = board.winstatus();
      if (winner) {
        board.gameFinish(winner);
      }
    };

    const firstAddListener = () => {
        addListener();
        document.querySelector('.button.is-primary.is-inverted').addEventListener("click", startGame);
        document.querySelector('.button.is-danger.is-rounded').addEventListener("click", resetGame);
        document.querySelector('#newgame .button').addEventListener("click", newGame);
    }
  
    const addListener = () => {
      document.getElementById('row-0').addEventListener('click', moveTo, true);
      document.getElementById('row-1').addEventListener('click', moveTo, true);
      document.getElementById('row-2').addEventListener('click', moveTo, true);
      document.getElementById('row-3').addEventListener('click', moveTo, true);
      document.getElementById('row-4').addEventListener('click', moveTo, true);
      document.getElementById('row-5').addEventListener('click', moveTo, true);
      document.getElementById('row-6').addEventListener('click', moveTo, true);
      document.getElementById('row-7').addEventListener('click', moveTo, true);
      document.getElementById('row-8').addEventListener('click', moveTo, true);
    };
  
  
    const newGame = () => {
      document.location.reload();
    };
  
    return {
      startGame,
      resetGame,
      addListener,
      newGame,
      firstAddListener
    };
  })();

  export default Game;