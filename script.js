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

//Once the category is chosen the game starts 
const displayQuestion = document.getElementById('questions')
console.log(displayQuestion)

const displayQuestionNo = document.getElementById('num')
console.log(displayQuestionNo)

const displayTimer = document.querySelector('#time')
console.log(displayTimer)

const displayScore = document.querySelector('#total')
console.log(displayScore)

const displayAnswers = document.querySelectorAll('.answers')
console.log(displayAnswers)

//Game Logic

const quizOne = [
    {   
        questionNumber: 1,
        questions: 'Which designer logo is seen here?',
        answers: ['Chanel', 'Givenchy', 'Valentino', 'Gucci'],
        correctAnswer: 0,
    },
    {   
        questionNumber: 2,
        questions: 'What brand is associated with this logo?',
        answers: ['Versace', 'Hermes', 'Louis Vuitton', 'Burberry'],
        correctAnswer: 1,
    },
    {   
        questionNumber: 3,
        questions: 'Which logo is seen in the image?',
        answers: ['Alexander McQueen', 'Prada', 'Armani', 'Givenchy'],
        correctAnswer: 2,
    },
    {   
        questionNumber: 4,
        questions: 'The logo corresponds to the brand_______.',
        answers: ['Baleciaga', 'Pierre Cardin', 'Prada', 'Polo'],
        correctAnswer: 3,
    },
    {   
        questionNumber: 5,
        questions: 'The brand seen here is_________.',
        answers: ['Prada', 'Dior', 'Versace', 'Gucci'],
        correctAnswer: 2,
    }

]
console.log(quizOne)

class Question {
    constructor(questionNumber, questions, answers, correctAnswer, image) { 
        this.questionNumber = questionNumber;
        this.questions = questions;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.image = image;

    }
    logCorrect () {

        console.log(this.correctAnswer)
    }
}

const questionArr = []

for(let i = 0; i < quizOne.length; i ++){
    const question = new Question (
        quizOne[i].questionNumber,
        quizOne[i].questions,
        quizOne[i].answers,
        quizOne[i].correctAnswer,
        quizOne[i].image
    )
    questionArr.push(question)
}
console.log(questionArr)

const generateQuestions = () => {
    for(let i =0; i < questionArr.length; i ++){
        if(questionArr[0]){
            displayQuestionNo.innerHTML = questionArr[0].questionNumber;
        displayQuestion.innerHTML = questionArr[0].questions; 
        }
    
    }

}

const generateAnswers = () => {


}




generateQuestions()
    
// const generateAnswers = () => {
//     for(let i=0; i < questionArr.length; i ++){

//     }
// }
//     console.log(questionArr)


// class Player {
//    this.timer--
//             displayTimer.innerText = `${newPlayer.timer}`
//         // },1000)
        
//     }

//     setScore () {
//         this.score++
//         displayScore.innerText = `${newPlayer.score}`
//     }
// }

// const newPlayer = new Player(0);



// const startGame = () => {
//         quizOne.forEach(function(){
//             if(quizOne[0].questionNumber) {
//              displayQuestionNo.innerText = quizOne[0].questionNumber
     
//              newPlayer.setScore()
//             } 
//          }) constructor(score, timer){
//         this.score = 0;
//         this.timer = 10;
//     }
//     setTimer () {
        // setInterval(function(){
            
  
   


        // displayQuestionNo.innerText = quizOne[0].questionNumber;

        // displayQuestion.innerText = quizOne[0].questions;

        // displayAnswers.forEach(function(element, index) {
        //     element.textContent = quizOne[0].answers[index];

        //     element.addEventListener('click', () => {
        //         if(quizOne[0].correctAnswer === index) {
        //             displayQuestion.innerText = 'Correct Answer!'
        //         } else {
        //             displayQuestion.innerText = 'Wrong Its Chanel'
        //         }
        //     })
        
        // })




    // }


    // startGame()



    // {
    //     questionNumber: 2,
    //     questions: 'What brand is associated with this logo?'
    // }
    // {
    //     questionNumber: 3,
    //     questions: 'Which logo is seen in the image?'
    // }
    // {
    //     questionNumber: 4,
    //     questions: 'The logo corresponds to the brand_______.'
    // },
    // {
    //     questionNumber: 5,
    //     questions: 'Which of the following brands is seen here?'
    // },
    // {
    //     questionNumber: 6,
    //     questions:'Which of these designer brand logos is seen in the picture?'

    // },
    // {
    //     questionNumber: 7,
    //     questions:'The brand seen here is______.'
    // },
    // {
    //     questionNumber: 8,
    //     questions: 'The logo shown is of the brand____.'
    // },
    // {
    //     questionNumber: 9,
    //     questions: 'The brand represented in the image is______.'

    // },
    // {
    //     questionNumber: 10,
    //     questions: 'What brand logo is shown here?'
    // }
       









