const container = document.querySelector('.container');
const playGameBtn = document.querySelector('.playgamebtn');
const newGame = document.createElement('button');
newGame.classList.add('button');
newGame.textContent = 'Play a Game?'
playGameBtn.appendChild(newGame);

const gameBoard = (() => {
    for (i=0; i < 9; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('squares');
    container.appendChild(squareDiv);
    }
})();