function makeBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(16, 1fr)`;
    //Makes the board with input size
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
}
}

makeBoard(16);

function changeSize(input) {
    if(input >=2 && input <= 100) {
        makeBoard(input);
    }
    else {
        console.log('Pick between 2 and 100');
    }
}