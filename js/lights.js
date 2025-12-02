const numAttempts = document.getElementById('num-attempts');
const spentTime = document.getElementById('spent-time');
const generateGridButton = document.getElementById('generate-grid-button');
const boardContainer = document.querySelector(".board");

let rows = 5;
let columns = 6
let lightsOn;

const board = [];

const tile = {
    isOn: true
}

function initialBoard() {
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            const button = document.createElement('button');
            button.classList.add('light');
            button.dataset.row = i;
            button.dataset.column = j;

            rowDiv.appendChild(button);
            board[i][j] = button;
        }
        boardContainer.appendChild(rowDiv);
    }
}

document.addEventListener('DOMContentLoaded', initialBoard);