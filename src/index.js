import "./assets/css/style.css";

import { validatePlayers, sendAlert } from "./helperFunctions";
import {
  getP1,
  getP2,
  setPlayerName,
  hidePlayersName,
  showPlayersLabel,
  showGameboard,
  hidePlayerLabel,
  setSubtitleLabel,
  showNewGameButton,
  displayTurn,
  hideNewGameButton,
  clearRows,
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
    setSubtitleLabel("Game Started");
  } else {
    sendAlert("Player's name can't be blank");
  }
}

function resetGame() {
  showPlayersLabel();
  hideNewGameButton();
  setPlayerName(gboard.getPlayer1());
  setSubtitleLabel("Game Started");
  gboard.clear();
  clearRows();
  p1Move = true;
}

function newGame() {
  document.location.reload();
}

function getFinalLabel(winner) {
  if (winner === "T") {
    return "It's a Tie!";
  } else {
    if (winner === "O") {
      if (gboard.getPlayer2().getSymbol() == "O") {
        return "You WIN " + gboard.getPlayer2().getName();
      } else {
        return "You WIN " + gboard.getPlayer1().getName();
      }
    } else {
      if (gboard.getPlayer2().getSymbol() == "X") {
        return "You WIN " + gboard.getPlayer2().getName();
      } else {
        return "You WIN " + gboard.getPlayer1().getName();
      }
    }
  }
}

function endGame() {
  hidePlayerLabel();
  showNewGameButton();
}

function moveTo(e) {
  const indx = event.target.id.match(/\d+/)[0];
  let winner = gboard.winstatus();
  if (!winner) {
    if (gboard.validateMove(indx)) {
      gboard.move(p1Move, indx);
      if (p1Move) {
        displayTurn(gboard.getPlayer1(), indx);
        setPlayerName(gboard.getPlayer2());
      } else {
        displayTurn(gboard.getPlayer2(), indx);
        setPlayerName(gboard.getPlayer1());
      }
      p1Move = !p1Move;
    } else {
      sendAlert("This place is already taken");
    }
  }
  winner = gboard.winstatus();
  if (winner) {
    setSubtitleLabel(getFinalLabel(winner));
    endGame();
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
