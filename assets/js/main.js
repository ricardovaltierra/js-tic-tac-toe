const DisplayController = () => {
  const xSymbol = '<i class="fas fa-times fa-7x">';
  const oSymbol = '<i class="far fa-circle fa-7x"></i>';
  const sclas = (s) => (s === 'X' ? xSymbol : oSymbol);
  function changeName(name) {
    document.getElementsByClassName('current-player')[0].innerHTML = name;
  }

  function addSymbol(symb, index) {
    document.getElementById(`row-${index}`).innerHTML = sclas(symb);
  }
  return { changeName, addSymbol };
};

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
    document.getElementById('newgame').innerHTML = '<button class="button is-success is-rounded" onclick="Game.newGame()" id="newgame">NewGame</button>';
  }

  return {
    move,
    winstatus,
    gameFinish,
    clear,
  };
};

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};


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
      const player1 = Player(
        document.getElementById('player1').value,
        p1symbol,
      );
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
  };
})();

Game.addListener();
