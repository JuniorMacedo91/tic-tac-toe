//Load screen to get all game features
document.addEventListener('DOMContentLoaded', () =>{
    const squares = document.querySelectorAll('.square')

    let pos = 0;
    squares.forEach(square =>{
        pos++
        square.setAttribute('id', pos -1);
        square.addEventListener('click', handleClick);
    })
})

// Insert each position into container when clicked
function handleClick(event){
    let squareTarget = event.target;
    let position = squareTarget.id

    if(handleMove(position)){
        setTimeout(()=>{
            alert(`Game Over - O Vencedor foi ${playerTurn} ` )
        },20)
    }
    setSymbol(position);
}

// Display symbols

function setSymbol(pos){
    let square = document.getElementById(pos.toString());
    let symbol = container[pos];
    square.innerHTML = `<img src="./assets/${symbol}.svg" alt="">`
}
