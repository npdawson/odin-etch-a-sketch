const container = document.querySelector('#container');

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.gridArea = i / j;
            square.addEventListener('mouseover', hoverOnSquare);
            container.appendChild(square);
        }
    }
}

function hoverOnSquare(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function clearGrid(e) {
    container.innerHTML = "";
    let answer = parseInt(window.prompt("Please enter the size of the new grid. (Max 100)", "16"));
    answer = Math.min(answer, 100)
    createGrid(answer);
}

createGrid(16);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);
