const Gameboard = (player1, player2) => {
  let board = [null, null, null, null, null, null, null, null, null];

  const getPlayer2 = () => {
    return player2;
  };

  const getPlayer1 = () => {
    return player1;
  };

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
        board[element[0]] === "X" &&
        board[element[1]] === "X" &&
        board[element[2]] === "X"
      ) {
        whowin = "X";
      } else if (
        board[element[0]] === "O" &&
        board[element[1]] === "O" &&
        board[element[2]] === "O"
      ) {
        whowin = "O";
      }
    });

    if (!board.includes(null) && !whowin) {
      whowin = "It's a Tie!";
    }
    return whowin;
  }

  const gameFinish = (winner) => {
    console.log(`gamefinish ${winner}`);
    changeSubtitleLabel(`YOU WIN ${winner}`);
  };

  const validateMove = (index) => {
    if (board[index] === null) {
      return true;
    } else {
      return false;
    }
  };

  const move = (turnP1, index) => {
    if (turnP1){
      board[index] = player1.getSymbol();
    } else {
      board[index] = player2.getSymbol();
    }
  }

  return { getPlayer1, getPlayer2, winstatus, gameFinish, validateMove, move };
};

export default Gameboard;
