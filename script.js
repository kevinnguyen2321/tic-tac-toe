



const gameBoard = (function () {
    const boardOne = document.getElementById('one');
    const boardTwo = document.getElementById('two');
    const boardThree = document.getElementById('three');
    const boardFour = document.getElementById('four');
    const boardFive = document.getElementById('five');
    const boardSix = document.getElementById('six');
    const boardSeven = document.getElementById('seven');
    const boardEight = document.getElementById('eight');
    const boardNine = document.getElementById('nine');

     const boards = [
        boardOne, 
        boardTwo, 
        boardThree, 
        boardFour,
        boardFive,
        boardSix,
        boardSeven,
        boardEight,
        boardNine
    ];
}) ()


 function createPlayer (player) {
    const playerName = player
   console.log(`Hi my name is ${playerName}`)
}

const kevin = createPlayer('Kev')

