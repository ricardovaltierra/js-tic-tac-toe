const Gameboard = () => {
    let board = [null,null,null,null,null,null,null,null,null]
    let xSymbol = "<i class=\"fas fa-times fa-7x\">"
    let oSymbol = "<i class=\"far fa-circle fa-7x\"></i>"
    let movX = true;

    function move(index){
        console.log("move to ");
        console.log(index);
        if (!winstatus()) {
          if (board[index] === null) {
            let icon = document.getElementById(`row-${index}`);
            if (movX) {
              board[index] = "X";
              icon.innerHTML = xSymbol;
              movX = !movX;
            }else {
                board[index] = "O";
                icon.innerHTML = oSymbol;
                movX = !movX;
            }
            console.log(board);
          }
          else {
            alert("This position is taken");  
          }
        }
        else {
          alert("YOU WIN");
        }
        console.log("---");
    }

    let winstatus = () => {
      if (board[0] === board[1] && board[0] === board[2] && board[2] !== null) {
        return true;
      }
      else {
        return false;
      }
    }

    return { move }
}

const DisplayController = () => {
    
}

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol }
}

const Game = () => {
    function startGame(){
        if (validatePlayer()){
            document.getElementById("players-name").classList.add("hide");
            document.getElementById("game-board").classList.remove("hide");
            const player1 = Player(document.getElementById("player1").value, "X");
            const player2 = Player(document.getElementById("player2").value, "O");
            gameStart(player1, player2);
        }
    }

    function validatePlayer(){
        player1 = document.getElementById("player1");
        player2 = document.getElementById("player2");
        if (player1.value == ""){
            alert("player1 cant be blank")
            return false
        } else if(player2.value == ""){
            alert("player2 cant be blank")
            return false
        }
        return true
    }
    

    function gameStart(player1, player2) {
        board = Gameboard();


        document.getElementById("row-0").addEventListener("click",(e) => moveTo(0),true)
        document.getElementById("row-1").addEventListener("click",(e) => moveTo(1),true)
        document.getElementById("row-2").addEventListener("click",(e) => moveTo(2),true)
        document.getElementById("row-3").addEventListener("click",(e) => moveTo(3),true)
        document.getElementById("row-4").addEventListener("click",(e) => moveTo(4),true)
        document.getElementById("row-5").addEventListener("click",(e) => moveTo(5),true)
        document.getElementById("row-6").addEventListener("click",(e) => moveTo(6),true)
        document.getElementById("row-7").addEventListener("click",(e) => moveTo(7),true)
        document.getElementById("row-8").addEventListener("click",(e) => moveTo(8),true)

        function moveTo(i){
            board.move(i);
        }
    }


    return {startGame}
}