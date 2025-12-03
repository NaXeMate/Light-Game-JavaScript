const numAttempts = document.getElementById('num-attempts');
const timerSpan = document.getElementById('spent-time');
const generateGridButton = document.getElementById('generate-grid-button');
const boardContainer = document.querySelector(".board");
const statusMessage = document.getElementById("statusMessage");

let rows = 5;
let columns = 6
let lightsOn;

let board = [];

let attempts = 0;
let spentTime = 0;
let timer = null;

let ongoingGame = false;

const tile = {
    isOn: true
}

let message;

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
        message = "Welcome to the Light Game! Good luck in your games!"
        statusMessage.textContent = message;
    }
}

document.addEventListener('DOMContentLoaded', initialBoard);

function generateGameBoard() {
    boardContainer.innerHTML = "";
    board = [];

    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        board[i] = [];
        
        for (let j = 0; j < columns; j++) {
            const button = document.createElement('button');
            button.classList.add('dark');
            button.dataset.row = i;
            button.dataset.column = j;
            
            button.addEventListener('click', () => click(i, j))

            rowDiv.appendChild(button);
            board[i][j] = button;
        }
        boardContainer.appendChild(rowDiv);
        message = "The game has begun. Good luck!"
        statusMessage.textContent = message;
    }

    let on = 0;
        while (on < lightsOn) {
            const i = Math.floor(Math.random() * rows);
            const j = Math.floor(Math.random() * columns);
            const button = board[i][j];
            console.log(button);
            console.log(i);
            console.log(j);
            

            if (button.classList.contains('dark')) {
                button.classList.remove('dark');
                button.classList.add('light');
                on++;
            }
        }
}

const startGame = () => {
    const difficultLevel = document.querySelector('input[name="option"]:checked').id;

    switch (difficultLevel) {
        case 'easy-option' :
            rows = 5;
            columns = 6;
            lightsOn = 10;
            break;
        case 'medium-option' :
            rows = 6;
            columns = 6;
            lightsOn = 6;
            break;
        case 'hard-option' :
            rows = 10;
            columns = 10;
            lightsOn = 20;
            break;
        case 'personalized-option' :
            rows = Number(document.querySelector("#num-rows").value);
            columns = Number(document.querySelector("#num-columns").value);
            lightsOn = Number(document.querySelector("#num-lights").value);
            break;
    }

    if (rows >= 15 || columns >= 15) {
            alert("The max number of rows and columns supported by the game is 15.");
            return;
        } else if (lightsOn >= (rows * columns)) {
            alert("At least, one light off is needed in order to play the game.");
            return;
    }

    generateGameBoard();
    attempts = 0;
    restartTimer();
    startTimer();
    ongoingGame = true;
}

generateGridButton.addEventListener('click', startGame);

function click(i, j) {
    if (!ongoingGame) {
        return;
    }

    switchLight(i, j);
    switchLight(i-1, j);
    switchLight(i+1, j);
    switchLight(i, j-1);
    switchLight(i, j+1);

    attempts++;
    numAttempts.textContent = attempts;
    checkWinner();
}

function switchLight(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= columns) {
        return;
    }

    const button = board[i][j];

    if (button.classList.contains('dark')) {
        button.classList.remove('dark');
        button.classList.add('light');
    } else {
        button.classList.remove('light');
        button.classList.add('dark');
    }
}

function checkWinner() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if (board[i][j].classList.contains('dark')) {
                return false;
            }
        }
    }
    message = "You win! Congratulations! Now, you can leave or play again."
    statusMessage.textContent = message;

    ongoingGame = false;
    clearInterval(timer);
    return true;
}

function startTimer() {
    timer = setInterval(() => {
        spentTime++;
        timerSpan.textContent = spentTime;
    }, 1000);
}

function restartTimer() {
    clearInterval(timer);
    spentTime = 0;
    timerSpan.textContent = spentTime;
}