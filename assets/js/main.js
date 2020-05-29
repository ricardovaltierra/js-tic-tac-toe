const Gameboard = () => {
    let board = [null,null,null,null,null,null,null,null,null]
    let xSymbol = "<i class=\"fas fa-times fa-7x\">"
    let oSymbol = "<i class=\"far fa-circle fa-7x\"></i>"
    let movX = true;
    function move(index){
        console.log("move to ");
        console.log(index);
        if (movX) {
            board[index] = "X"
            movX = !movX;
        }else {
            board[index] = "O"
            movX = !movX;
        }
        console.log(board);
        console.log("---")
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

        
        document.getElementById("row-0").addEventListener("click",moveTo(0),true)
        document.getElementById("row-1").addEventListener("click",moveTo(1),true)
        document.getElementById("row-2").addEventListener("click",moveTo(2),true)
        document.getElementById("row-3").addEventListener("click",moveTo(3),true)
        document.getElementById("row-4").addEventListener("click",moveTo(4),true)
        document.getElementById("row-5").addEventListener("click",moveTo(5),true)
        document.getElementById("row-6").addEventListener("click",moveTo(6),true)
        document.getElementById("row-7").addEventListener("click",moveTo(7),true)
        document.getElementById("row-8").addEventListener("click",moveTo(8),true)


    }


    return {startGame}
}