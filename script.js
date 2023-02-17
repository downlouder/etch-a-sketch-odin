const defaultColor = 'black';
const defaultMode = 'painting';
const defaultSize = 16;
let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('painting');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => clearGrid();

function setCurrentColor(newColor) {
    currentColor = newColor;
}
function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}
function setCurrentSize(newSize) {
    currentSize = newSize;
}

function makeGrid(size) {
    let grid = document.getElementById('grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-element')
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } 
    else if (currentMode === 'painting') {
        e.target.style.backgroundColor = currentColor
    } 
    else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
    } 
    else if (currentMode === 'painting') {
        colorBtn.classList.remove('active')
    } 
    else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active')
    }
    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    } 
    else if (newMode === 'painting') {
        colorBtn.classList.add('active')
    } 
    else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    }
}

function changeSize(input) {
    if (input >= 1 && input <= 100) {
        makeGrid(input);
        setCurrentSize(value)
        reloadGrid()
    }
    else {
        alert('Please enter correct number')
    }
}

function colorSquare() {
    this.style.backgroundColor = currentColor;
}
function reloadGrid() {
    clearGrid()
    makeGrid(currentSize)
}

function clearGrid() {
    let grid = document.getElementById('grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}


makeGrid(defaultSize)
activateButton(defaultMode)