let container = ['','','','','','','','',''];
let playerTurn = 0;
const symbols = ['cross','circle']
let gameOver = false;

const winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(index){
    
    if(gameOver){
        return;
    }

    if(container[index] == ''){
        container[index] = symbols[playerTurn];
        gameOver = isWin()

        if(!gameOver){
            playerTurn = playerTurn == 0 ? 1 :0;
        }
    }
    return gameOver
}

function isWin(){
    for( let i = 0; i < winStates.length; i++){
        let position = winStates[i]

        let firstPostion = position[0];
        let secondPosition = position[1];
        let thirdPosition = position[2]

        if(container[firstPostion] == container[secondPosition] && 
            container[secondPosition] == container[thirdPosition] && 
            container[firstPostion] != ''){
            return true
        }
    }
    return false
}


