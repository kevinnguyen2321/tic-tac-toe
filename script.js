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
                    
                    
                    if (boards[0].textContent === playerMarker && 
                        boards[3].textContent === playerMarker &&
                        boards[6].textContent === playerMarker) {
                            console.log('Player 1 wins!');
                            resetGame ();
                            
                    } else {
                        
                        board.style.fontSize = '8rem'
                        board.style.textAlign = 'center'
                        board.textContent = playerMarker;

                        let randomNum = Math.floor(Math.random() * 10);
                        boards[randomNum].style.fontSize = '8rem'
                        boards[randomNum].style.textAlign = 'center'
                        boards[randomNum].textContent = computerMarker

                    }
                    
        })
    })


    function resetGame() {
        boards.forEach((board) => {
            board.textContent = '';

        })
    }
    
})()





