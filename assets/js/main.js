const Gameboard = () => {
    let board = [null,null,null,null,null,null,null,null,null]
    let xSymbol = "<i class=\"fas fa-times fa-7x\">"
    let oSymbol = "<i class=\"far fa-circle fa-7x\"></i>"
    let movX = true;

    function move(index){
        let icon = document.getElementById(`row-${index}`);
        if(board[index] === null){
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
          console.log("icon set");
        }
        else {
          alert("This place is already taken");
        }
        let winner = winstatus()
        // console.log(`you are the winner: ${winner}`)
        if (winner !== false) {
          alert(`you are the winner: ${winner}`)
        }
    }

    function winstatus(){
        let winner= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,4,8],[0,4,8],[2,4,6]]
        let whowin = false;

        winner.forEach(element =>  {
          if (board[element[0]] === "X" && board[element[1]] === "X" && board[element[2]] === "X"){
            whowin = "X";
          }
          else if (board[element[0]] === "O" && board[element[1]] === "O" && board[element[2]] === "O"){
            whowin = "O";
          }                    
        });
        return whowin;
    }

    return { move, winstatus }
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
            let winner = board.winstatus();
            if (winner == false){
                board.move(i);   
            }
        }
    }

    return {startGame}
}