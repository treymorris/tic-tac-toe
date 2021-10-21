//create a button to start a game
const container = document.querySelector('.container');

const playGameBtn = document.querySelector('.play-game-btn');
const playGame = document.createElement('button');
playGame.classList.add('button');
playGame.textContent = 'Play a Game?'
playGame.addEventListener('click', (e) => {document.getElementById("form-container").style.display = "block"});
playGameBtn.appendChild(playGame);

const submitbtn = document.getElementById('submit-btn');
//submitbtn.addEventListener('click', addBook);

//render a game board and add click listeners
const boardRender = (() => {
    for (i=0; i < 9; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('squares');
    container.appendChild(squareDiv);
    squareDiv.addEventListener('click', (e) => {squareDiv.textContent = 'X'});//testing marks
    }
})();

//set up array for gameboard
const gameBoard = (() => {
    
    const board = ['','','','','','','','',''];

    return {board}

})();
    

//function that displays results and asks to play again?
    const displayResults = () => {

        return {}
    };

//create players
const player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return {getName, getMark}
};

const playerOne = player('Player 1','X');
const playerTwo = player('Player 2', 'O');

    