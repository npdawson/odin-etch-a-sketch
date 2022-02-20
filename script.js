function createGrid(size) {
    const container = document.querySelector('#container');
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.gridArea = i / j;
            container.appendChild(square);
        }
    }
}

createGrid(16);
