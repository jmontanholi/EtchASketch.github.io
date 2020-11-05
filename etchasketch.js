const pagediv = document.getElementById('pagediv');
const resetbtn = document.getElementById('resetbtn');
const colorbtn = document.getElementById('colorbtn')
const whitebtn = document.getElementById('whitebtn')
let playerInput = prompt('Choose a number between 1 and 100')
let cellNumber;


function createGrid(number) {
    pagediv.style.display = 'grid';
    pagediv.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    pagediv.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    
    for (let i = 0; i < (number ** 2); i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'black';
        square.classList.add('blank');
        pagediv.appendChild(square);
    }
    
    let squares = document.querySelectorAll('.blank');
    squares.forEach(blankSquare => {
        blankSquare.addEventListener('mouseover', function (e) {
            blankSquare.style.backgroundColor = 'rgb(255,255,255)';
        });
    });
}
function clearGrid() {
    cellNumber = Number(playerInput);
    if (cellNumber) {
        pagediv.innerHTML = '';
        createGrid(cellNumber);
    } else {
        pagediv.innerHTML = '';
        createGrid(originalGrid);
    }
}
function generateRandomColor(min = 0, max = 255) {
    let r = Math.floor(Math.random() * (max - min + 1) + min);
    let g = Math.floor(Math.random() * (max - min + 1) + min);
    let b = Math.floor(Math.random() * (max - min + 1) + min);
    return `rgb(${r},${g},${b})`;
}

resetbtn.addEventListener('click', clearGrid)

colorbtn.addEventListener('click', function (e) {
    let gridCells = document.querySelectorAll('.blank');
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', function (e) {
            cell.style.backgroundColor = generateRandomColor();
        });
    });
});

whitebtn.addEventListener('click', function (e) {
    let gridCells = document.querySelectorAll('.blank');
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            cell.style.backgroundColor = 'rgb(255,255,255)';
        });
    });
});
createGrid(playerInput)

