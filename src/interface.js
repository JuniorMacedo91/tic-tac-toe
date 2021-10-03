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
        setSymbol();
        setTimeout(()=>{
            alert('Game Over')
        },20)
    }
    setSymbol();
}

// Display symbols
function setSymbol(){
    const squares = document.querySelectorAll('.square')

    squares.forEach(square =>{
        let position = square.id;
        let symbol = container[position];

        if(symbol != ''){
            square.innerHTML = `<img src="./assets/${symbol}.svg" alt="">`
        }
    })
}
