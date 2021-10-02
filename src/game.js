const container = []
let playerTurn = 0;
const symbols = ['cross','circle']

function handleMove(index){
    container[index] = symbols[playerTurn];

    playerTurn == 0 ? playerTurn = 1 : playerTurn = 0
}

