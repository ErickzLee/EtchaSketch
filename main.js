let color = 'black';

function makeBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //Makes the board with input size
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
}
}

makeBoard(16);

function changeSize(input) {
    if(input >=2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        makeBoard(input);
    }
    else {
        console.log('Pick between 2 and 100');
        document.querySelector('.error').style.display = 'flex';

    }
}

//Squares color when hovered
function colorSquare() {
    //Found on Stackoverflow
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }
}

//Users choice of what color to use
function changeColor(choice) {
    color = choice;
}

//Resets the board
function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}