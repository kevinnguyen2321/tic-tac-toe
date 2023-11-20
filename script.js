   const boardOne = document.getElementById('one');
   const boardTwo = document.getElementById('two'); 
   const boardThree = document.getElementById('three');
   const boardFour =document.getElementById('four');
   const boardFive = document.getElementById('five');
   const boardSix =document.getElementById('six');
   const boardSeven = document.getElementById('seven');
   const boardEight = document.getElementById('eight');
   const boardNine = document.getElementById('nine');

   const gameBoard = {
    boards: [
        boardOne,
        boardTwo,
        boardThree,
        boardFour,
        boardFive,
        boardSix,
        boardSeven,
        boardEight,
        boardNine
    ]
}








    


function createPlayer (name, marker) {
   
    
    
}




const gameFlow = (function () {
    const {boards} = gameBoard;
    boards.forEach((board) => {
        board.addEventListener('click', (e) => {
            
                const playerMarker = 'X';
                const computerMarker = 'O'


                function checkForWin(direction) {
                    for (let i = 0; i < 3; i++) {
                      const values = [];
                  
                      for (let j = 0; j < 3; j++) {
                        const index = 
                        direction === 'row' ? i * 3 + j: 
                        direction === 'column' ? j * 3 + i:
                        direction === 'diagonalOne' ? j * 4:
                        // direction ===  'diagonalTwo' ? (2 - j) * 3 + (2 - i) :
                        -1;
                        
                        
                        if (index !== -1) {
                            const cellValue = boards[index].textContent;
                            values.push(cellValue);
                        
                        }
                        
                    }
                  
                      // Check for a win (you can customize this part based on your win conditions)
                      if (values.every(value => value === 'X') || values.every(value => value === 'O')) {
                        return true; // Indicates a win
                      }
                      
                    }
                  
                    return false; // No win found
                  }
            
                  

            // Example usage:
                  if (checkForWin('row') || checkForWin('column') 
                  || checkForWin('diagonalOne')) {
                    alert('Player 1 Wins!')
                    resetGame();
                    // Perform actions when a player wins
                  }
                        
                    board.style.fontSize = '8rem'
                    board.style.textAlign = 'center'
                    board.textContent = playerMarker;

                    
                    let randomNum = Math.floor(Math.random() * 10);
                        boards[randomNum].style.fontSize = '8rem'
                        boards[randomNum].style.textAlign = 'center'
                        boards[randomNum].textContent = computerMarker
                            
                            
                 
                    
        })
    })
    

    function resetGame() {
        boards.forEach((board) => {
            board.textContent = '';

        })
    }

})()





