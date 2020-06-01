const Gameboard = (player1, player2) => {
  let board = [null, null, null, null, null, null, null, null, null]
  let xSymbol = "<i class=\"fas fa-times fa-7x\">"
  let oSymbol = "<i class=\"far fa-circle fa-7x\"></i>"
  let movX = true;

  function clear() {
    for (let i = 0; i < 9; i++) {
      document.getElementById(`row-${i}`).innerHTML = "";
    }
    document.getElementById("title-gameboard").innerHTML = "Game Started"
    board = [null, null, null, null, null, null, null, null, null]
  }

  function move(index) {
    let icon = document.getElementById(`row-${index}`);
    if (board[index] === null) {
      if (movX) {
        board[index] = "X";
        if (player1.getSymbol() == "O") {
          DisplayController().changeName(player1.getName());
        } else {
          DisplayController().changeName(player2.getName());
        }
        icon.innerHTML = xSymbol;
        movX = !movX;
      } else {
        board[index] = "O";
        if (player1.getSymbol() == "X") {
          DisplayController().changeName(player1.getName());
        } else {
          DisplayController().changeName(player2.getName());
        }
        icon.innerHTML = oSymbol;
        movX = !movX;
      }
      console.log(board);
    }
    else {
      alert("This place is already taken");
    }
  }

  function winstatus() {
    let winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 4, 8], [0, 4, 8], [2, 4, 6]]
    let whowin = false;

    winner.forEach(element => {
      if (board[element[0]] === "X" && board[element[1]] === "X" && board[element[2]] === "X") {
        whowin = "X";
      }
      else if (board[element[0]] === "O" && board[element[1]] === "O" && board[element[2]] === "O") {
        whowin = "O";
      }
    });
    return whowin;
  }

  function gameFinish(winner){
    let winnerName = player1.getSymbol() === winner ? player1.getName() : player2.getName();
    document.getElementById("title-gameboard").innerHTML = `You are the winner ${winnerName}!`
    document.getElementsByClassName("h3")[0].innerHTML = "";
    document.getElementById('newgame').innerHTML = '<button class=\"button is-success is-rounded\" onclick=\"Game().startGame()\">New Game</button>';  }

  return { move, winstatus, gameFinish, clear }
}

const DisplayController = () => {
  function changeName(name){
    document.getElementsByClassName("current-player")[0].innerHTML = name;
  }
  return {changeName };
}

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol }
}

const Game = () => {
  function startGame() {
    if (validatePlayer()) {
      document.getElementById("players-name").classList.add("hide");
      document.getElementById("game-board").classList.remove("hide");
      const player1 = Player(document.getElementById("player1").value, "X");
      const player2 = Player(document.getElementById("player2").value, "O");
      gameStart(player1, player2);
    }
  }

  function resetGame(){
    board.clear();
    removeListener();
    startGame();
  }

  function validatePlayer() {
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    if (player1.value == "") {
      alert("player1 cant be blank")
      return false
    } else if (player2.value == "") {
      alert("player2 cant be blank")
      return false
    }
    return true
  }

  function addListener() {
    document.getElementById("row-0").addEventListener('click', moveTo, true)
    document.getElementById("row-1").addEventListener('click', moveTo, true)
    document.getElementById("row-2").addEventListener('click', moveTo, true)
    document.getElementById("row-3").addEventListener('click', moveTo, true)
    document.getElementById("row-4").addEventListener('click', moveTo, true)
    document.getElementById("row-5").addEventListener('click', moveTo, true)
    document.getElementById("row-6").addEventListener('click', moveTo, true)
    document.getElementById("row-7").addEventListener('click', moveTo, true)
    document.getElementById("row-8").addEventListener('click', moveTo, true)
  }

  function removeListener() {
    document.getElementById("row-0").removeEventListener('click', moveTo, true)
    document.getElementById("row-1").removeEventListener('click', moveTo, true)
    document.getElementById("row-2").removeEventListener('click', moveTo, true)
    document.getElementById("row-3").removeEventListener('click', moveTo, true)
    document.getElementById("row-4").removeEventListener('click', moveTo, true)
    document.getElementById("row-5").removeEventListener('click', moveTo, true)
    document.getElementById("row-6").removeEventListener('click', moveTo, true)
    document.getElementById("row-7").removeEventListener('click', moveTo, true)
    document.getElementById("row-8").removeEventListener('click', moveTo, true)
  }

  function gameStart(player1, player2) {
    board = Gameboard(player1, player2);
    board.clear();
    DisplayController().changeName(player1.getName());
    addListener();
  }

  function moveTo(event) {
    let i = event.target.id.slice(event.target.id.search(/\d+/));
    let winner = board.winstatus();
    if (!winner) {
      board.move(i);
    }
    winner = board.winstatus();
    if (winner) {
      board.gameFinish(winner);
    }
  }

  return { startGame, resetGame }
}