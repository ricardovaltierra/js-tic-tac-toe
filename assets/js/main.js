const Gameboard = () => {
    let board = [null,null,null,null,null,null,null,null,null]
    function move(index,move){
        board[index] = move
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
            gameStart();
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

    function gameStart() {
        console.log("started")
    }

    return {startGame}
}