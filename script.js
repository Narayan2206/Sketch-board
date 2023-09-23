// let color = document.querySelector('#colorpicker').value;
let click = false;
const sliderOutput = document.querySelector('.slider-output');
const slider = document.querySelector('#slider');
sliderOutput.textContent = `${slider.value} x ${slider.value}`;

const pencilBtn = document.querySelector('#pencil');
const eraserBtn = document.querySelector('#eraser');
const rainbowBtn = document.querySelector('#rainbow');
const toggleGridBtn = document.querySelector('#togglegrid');
const clearBoardBtn = document.querySelector('#clearboard');


pencilBtn.addEventListener('click', () => {
    changeColor('black');
});
eraserBtn.addEventListener('click', () => {
    changeColor('white');
});

rainbowBtn.addEventListener('click', () => {
    changeColor('random');
});

toggleGridBtn.addEventListener('click', toggleGrid);
clearBoardBtn.addEventListener('click', clearBoard);

function populateBoard(size) {

    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

slider.oninput = function () {
    sliderOutput.textContent = `${this.value} x ${this.value}`;
    populateBoard(this.value);
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;

}

function clearBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Drawing Mode: On';
        }
        else {
            document.querySelector('.mode').textContent = 'Drawing Mode: Off';
        }

    }
})

function toggleGrid() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.classList.toggle('grid'));
}