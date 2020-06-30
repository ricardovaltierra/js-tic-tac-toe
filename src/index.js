import "./assets/css/style.css";

import { validatePlayers, sendAlert } from "./helperFunctions";
import {
  getP1,
  getP2,
  setPlayerName,
  hidePlayersName,
  showGameboard,
  changeSubtitleLabel,
  displayTurn,
} from "./domHandler";
import Gameboard from "./gameboard";

let gboard;
let p1Move = true;

function startGame() {
  let player1 = getP1();
  let player2 = getP2();
  if (validatePlayers(player1, player2)) {
    gboard = Gameboard(player1, player2);
    setPlayerName(player1);
    hidePlayersName();
    showGameboard();
    changeSubtitleLabel("Game Started");
  } else {
    sendAlert("Player's name can't be blank");
  }
}

function resetGame() {
  console.log("resetGame");
}

function newGame() {
  console.log("newGame");
}

function moveTo(e) {
  const indx = event.target.id.match(/\d+/)[0];
  let winner = gboard.winstatus();
  if (!winner) {
    if (gboard.validateMove(indx)) {
      gboard.move(p1Move, indx);
      if (p1Move) {
        displayTurn(gboard.getPlayer1(), indx);
        setPlayerName(gboard.getPlayer2().getName());
      } else {
        displayTurn(gboard.getPlayer2(), indx);
        setPlayerName(gboard.getPlayer1().getName());
      }
      p1Move = !p1Move;
    } else {
      sendAlert("This place is already taken");
    }
  }
  winner = gboard.winstatus();
  if (winner) {
    gboard.gameFinish(winner);
  }
}

function addAllListeners() {
  document
    .querySelector(".button.is-primary.is-inverted")
    .addEventListener("click", startGame);
  document
    .querySelector(".button.is-danger.is-rounded")
    .addEventListener("click", resetGame);
  document.querySelector("#newgame .button").addEventListener("click", newGame);
  document.getElementById("row-0").addEventListener("click", moveTo);
  document.getElementById("row-1").addEventListener("click", moveTo);
  document.getElementById("row-2").addEventListener("click", moveTo);
  document.getElementById("row-3").addEventListener("click", moveTo);
  document.getElementById("row-4").addEventListener("click", moveTo);
  document.getElementById("row-5").addEventListener("click", moveTo);
  document.getElementById("row-6").addEventListener("click", moveTo);
  document.getElementById("row-7").addEventListener("click", moveTo);
  document.getElementById("row-8").addEventListener("click", moveTo);
}

addAllListeners();

// Player
// receives -> name, symbol
// returns -> getName, getSymbol

// validatePlayer
// receives -> player1, player2
// returns -> flag (player variables valid)

// gameStart
// receives -> player1, player2
// function -> set gameboaard with players, clear board and set dom field
// returns -> null

// startGame
// receives -> validatePlayer's flag
// returns -> send player1 and player2 objects to gameStart

// resetGame
// receives -> null
// returns -> null

// moveTo
// receives -> event (click), index from cliked cell, winstatus flag
// function -> evaluates from winstatus if executes move function on board, or setwinner and finish game
// returns -> null

// Gameboard

// GameLogic

// DisplayController (dom manipulation) set-get data from DOM

// extra-handler -- ??
