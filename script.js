let colorPicker = document.getElementById('colorPicker');
let color = 'black';
function makeGrid(size) {
    let grid = document.getElementById('grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
    }
}
makeGrid(16);
function changeSize(input) {
    if (input >= 1 && input <= 100) {
        makeGrid(input);
    }
    else {
        console.log("Please enter correct number")
    }
}
function colorSquare() {
    this.style.backgroundColor = color;
}
function changeColor(choice) {
    color = choice;
}
function colorByPicker() {
    colorPicker.addEventListener("input", () => {
        let colorInput = colorPicker.value;
        changeColor(colorInput);
    }, false);
}
colorPicker.addEventListener("input", () => {
    let colorInput = colorPicker.value;
    changeColor(colorInput);
}, false);
// function clearGrid() {
//     squares.forEach((div) => {
//         div.style.backgroundColor = 'white';
//     });
// }