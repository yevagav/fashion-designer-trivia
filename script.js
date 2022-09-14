//  home page of game 
const homePage = document.querySelector('.home-page')
const startButton = document.querySelector('.start-game')

//Making the next page appear after start trivia is pressed
const playerDetailsCont = document.querySelector('.player-details')
console.log(playerDetailsCont)

startButton.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    // playerDetailsCont.style.visibility = 'visible';

})

//Page where it asks you your name 
const inputPlayer = document.querySelector('.player-name')
console.log(inputPlayer)
const submitName = document.querySelector('.name-button')
console.log(submitName)

//When button is clicked the name gets stored in the game
submitName.addEventListener('click', () => {
    playerDetailsCont.style.visibility= 'hidden';
})

// Player chooses which category they want to challenge 



