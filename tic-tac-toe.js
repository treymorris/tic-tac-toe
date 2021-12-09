
//set up array for gameboard
const gameBoard =  (() => {
    
    let squares = ["", "", "", "", "", "", "", "", ""];

    const setBoard = (index, mark) => {
        if (index > squares.length) return;
        squares[index] = mark;
    };

    const getBoard = (index) => {
        if (index > squares.length) return;
        return squares[index];
    };
    
    const reset = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i] = "";
        };
    };

    return { setBoard, getBoard, reset }
})();

const gamePlay = (() => {
    const boardCells = document.querySelectorAll(".cell");

    let isOver = false;

    boardCells.forEach((cell) => {
        cell.addEventListener("click", (e) => {console.log('click')
             if (isOver === true || e.target.textContent !== "") return;
             playRound(parseInt(e.target.dataset.index));
             updateGameboard();
             
        });
    });

    const playRound = (index) => {
        gameBoard.setBoard(index, getCurrentMark());
        if (checkWinner(index)) {
            setResultMessage(getCurrentMark());
            isOver = true;
            return;
        } else if (round === 9) {
            setResultMessage("Tie Game!");
            isOver = true;
            return;
        }
        round++;
        setMessage(`Player ${getCurrentMark()}'s Turn!'`);
    };

    

})();
//create players
const Player = (name, mark) => {

    this.name = name;
    this.mark = mark;

    const getName = () => name;
    const getMark = () => mark;

    return {getName, getMark}
};

const playerOne = Player('Player 1', "X");
const playerTwo = Player('Player 2', "O");

    