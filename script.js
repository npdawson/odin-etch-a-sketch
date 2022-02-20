// the div with id 'container' contains the grid
const container = document.querySelector('#container');

// creates a new grid of the desired size
function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            // for position (i,j) in the grid, create a new square div
            const square = document.createElement('div');
            square.classList.add('square');
            // set the coordinates of the square in the grid
            square.style.gridArea = i / j; 
            square.addEventListener('mouseover', hoverOnSquare);
            container.appendChild(square);
        }
    }
}

// callback function for when the mouse hovers over a square
function hoverOnSquare(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// callback function for the Clear button
function clearGrid(e) {
    // need to empty the container before we generate a new grid
    container.innerHTML = "";
    let answer = parseInt(window.prompt("Please enter the size of the new grid. (Max 100)", "16"));
    answer = Math.min(answer, 100)
    createGrid(answer);
}

// create the initial 16x16 grid
createGrid(16);

// attach the callback function to the Clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);
