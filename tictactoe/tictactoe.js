/*
 1 | 2 | 3 => (0,0) | (0,1) | (0,2) 
 ---------
 4 | 5 | 6 => (1,0) | (1,1) | (1,2)
 ---------
 7 | 8 | 9 => (2,0) | (2,1) | (2,2)
*/
  // Create a 2d array that will represent the state of the game board
  // this is just rendering the board 
 
function Gameboard() {
    const rows = 3;
    const squares = 3;
    const board = [];

    let count = 1;
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < squares; j++) {
            board[i].push(count);
            count++; 
        }
    }
    console.log(board);
    // This will be the method of getting the entire board that our UI will eventually need to render it.
    const getBoard = () => board;

    const isValid = 1; // this will eventually be used to determine if the player who delcared to play this space is a valid square
  // This method will be used to print our board to the console after each player takes their turn
    const printBoard = () => {
        const boardWithCellValues = board.map(row => {row.map(value => { console.log(value); // Prints each individual value
        });
    });
    console.log(boardWithCellValues);
    };

  // Here, we provide an interface for the rest of our
  // application to interact with the board
    return { getBoard, printBoard };
}

/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player 1's token,
** 2: Player 2's token
*/

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

/* 
** The GameController will be responsible for controlling the 
** flow and state of the game's turns, as well as whether
** anybody has won the game
*/
function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 'X'
    },
    {
      name: playerTwoName,
      token: 'O'
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn. Select Square to drop token in (row,col)`);
  };

  const playRound = ((row,square) => {
    // Drop a token for the current player
    console.log(
      `Dropping ${getActivePlayer().name}'s token into square ${square}...`
    );
    //board.placeMarker(square, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  });

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}
Gameboard(); // generate the initial board
//const game = GameController();