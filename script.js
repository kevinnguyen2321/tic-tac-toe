   // DOM Elements//
   const boardOne = document.getElementById('one');
   const boardTwo = document.getElementById('two'); 
   const boardThree = document.getElementById('three');
   const boardFour =document.getElementById('four');
   const boardFive = document.getElementById('five');
   const boardSix =document.getElementById('six');
   const boardSeven = document.getElementById('seven');
   const boardEight = document.getElementById('eight');
   const boardNine = document.getElementById('nine');
   const resultDisplay = document.querySelector('.result');
   const newGameBtn = document.getElementById('new-btn');
   const dialog = document.querySelector('dialog');
   const startBtn = document.querySelector('.start-game');
   const nameInput = document.getElementById('name');
   const cancelBtn = document.querySelector('.cancel-btn');
   const resetBtn = document.querySelector('.reset-btn');
  
   

//Function to create game board//
function createGameBoard() {
  
  const boards = [
      document.getElementById('one'),
      document.getElementById('two'),
      document.getElementById('three'),
      document.getElementById('four'),
      document.getElementById('five'),
      document.getElementById('six'),
      document.getElementById('seven'),
      document.getElementById('eight'),
      document.getElementById('nine')
  ];

  function resetGame() {
      boards.forEach((board) => {
          board.textContent = '';
      });
  }

  return { boards, resetGame };
}




//Factory function for creating players//
function createPlayer (name,marker) {
   return {
    name,
    marker,
   }
}



// Function to control flow of game//
function gameFlow (player, gameBoard) {
    const {boards, resetGame} = gameBoard
    const computerPlayer = createPlayer('Computer', 'O')
     
    

    
   

      boards.forEach((board) => {
        board.addEventListener('click', (e) => {
          if (board.textContent === '') {
            const playerMarker = player.marker;
            const computerMarker = computerPlayer.marker;
            // const playerName = player.name;
            const playerName = nameInput.value;
            const computerName = computerPlayer.name;
          
          
            
                
                
                


                function checkForWin(direction) {
                    for (let i = 0; i < 3; i++) {
                      const values = [];
                  
                      for (let j = 0; j < 3; j++) {
                        const index = 
                        direction === 'row' ? i * 3 + j: 
                        direction === 'column' ? j * 3 + i:
                        direction === 'diagonalOne' ? j * 4:
                        direction ===  'diagonalTwo' ? (j + j) + 2:
                        -1;
                        
                        
                        if (index !== -1) {
                            const cellValue = boards[index].textContent;
                            values.push(cellValue);
                        
                        }
                        
                    }
                  
                      // Check for a win (you can customize this part based on your win conditions)
                      // if (values.every(value => value === 'X') || values.every(value => value === 'O')) {
                      //   return true; // Indicates a win
                      // }

                       if (values.every(value => value === 'X')) {
                        resultDisplay.textContent = `${playerName} wins!`
                        return true;
                      } else if (values.every(value => value === 'O')) {
                        resultDisplay.textContent = `${computerName} wins!`
                        return true
                        
                      }
                      
                    }
                  
                    return false; // No win found
                }
            
          

            
                  if (checkForWin('row') || checkForWin('column') 
                  || checkForWin('diagonalOne') || checkForWin('diagonalTwo')) {
                    setTimeout(() => {
                      resetGame();
                      resultDisplay.textContent = '';
                  }, 1000); // Adjust the delay time as needed
                    // Perform actions when a player wins
                  } else if (board.textContent === '' ) {
                      
                      board.style.fontSize = '8rem'
                      board.style.textAlign = 'center'
                      board.textContent = playerMarker
                  }
                  
                  let emptyCells = boards.filter(board => board.textContent === '').length;

                  if (emptyCells > 0) {
                    const boardIndex = boards.indexOf(board);
                    
                  
                  let randomNum;
                    do {
                    randomNum = Math.floor(Math.random () * 9);
                  } while (boards[randomNum]?.textContent !== '');
                    boards[randomNum].style.fontSize = '8rem'
                    boards[randomNum].style.textAlign = 'center'
                    boards[randomNum].textContent = computerMarker
                    
                } else {
                  console.log('No empty cells left')
                  if (!checkForWin('row') && !checkForWin('column') && !checkForWin('diagonalOne') && !checkForWin('diagonalTwo')) {
                    resultDisplay.textContent = 'Tie Game!'
                    setTimeout(() => {
                      gameBoard.resetGame();
                      resultDisplay.textContent = '';
                  }, 1000); 
                }

              }
              

          }           
        })
    })
    

}




// Self invoking function to iniate game//
const gameInitializer = (function () {
  
let gameBoard;
  
 // Event listener for new game button//
newGameBtn.addEventListener('click', (e) => {
  gameBoard = createGameBoard()

  gameBoard.resetGame()
  
  
  dialog.showModal();
})
// Event listener for reset button//
resetBtn.addEventListener('click', (e) => {
  gameBoard.resetGame();
})
 // Event listener for start button//
startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  playerName = nameInput.value;
  
  const player = createPlayer(playerName, 'X')
  gameBoard.resetGame();
  
  
  gameFlow (player, gameBoard)
  dialog.close()
})
//Event listener for cancel button//
cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  dialog.close()
})
return gameBoard

})()




