const Gameboard = (player1, player2) => {
  let board = [null, null, null, null, null, null, null, null, null];

  // test
  const getPlayer1 = () => player1;
  // test
  const getPlayer2 = () => player2;

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

    if (!board.includes(null) && !whowin) {
      whowin = 'T';
    }
    return whowin;
  }

  const validateMove = (index) => {
    if (board[index] === null) {
      return true;
    }
    return false;
  };

  const move = (turnP1, index) => {
    if (turnP1) {
      board[index] = player1.getSymbol();
    } else {
      board[index] = player2.getSymbol();
    }
  };

  const clear = () => {
    board = [null, null, null, null, null, null, null, null, null];
  };

  const getBoard = () => {
    return board;
  }

  return {
    getPlayer1, getPlayer2, winstatus, validateMove, move, clear, getBoard
  };
};

export default Gameboard;
