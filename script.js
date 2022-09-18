//  home page of game 
const homePage = document.querySelector('.home-page')
const startButton = document.querySelector('.start-game')

//Making the next page appear after start trivia is pressed
const playerDetailsCont = document.querySelector('.player-details')

startButton.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    // playerDetailsCont.style.visibility = 'visible';

})

//Page where it asks you your name 
const inputPlayer = document.querySelector('.player-name')

const submitName = document.querySelector('.name-button')


const gameCategories = document.querySelector('.game-categories')

//When button is clicked the name gets stored in the game
submitName.addEventListener('click', () => {
    playerDetailsCont.style.visibility= 'hidden';
    gameCategories.style.visibility = 'visible'
})

// Player chooses which category they want to challenge 
const category1 = document.querySelector('.option-one')
const category2 = document.querySelector('.option-two')
const category3 = document.querySelector('.option-three')




//Once the category is chosen the game starts 
const displayQuestion = document.getElementById('questions')


const displayQuestionNo = document.getElementById('num')


const displayScore = document.querySelector('#total')



const displayImage = document.querySelector('.my-img')
console.log(displayImage)

//Game Logic

const quizOne = [
    {   
        questionNumber: 1,
        questions: 'Which designer logo is seen here?',
        answers: ['Chanel', 'Givenchy', 'Valentino', 'Gucci'],
        correctAnswer: 0,
        imgFile: './images/chanel-logo.webp',
    },
    {   
        questionNumber: 2,
        questions: 'What brand is associated with this logo?',
        answers: ['Versace', 'Hermes', 'Louis Vuitton', 'Burberry'],
        correctAnswer: 1,
        imgFile: './images/chanel-logo.webp',
    },
    {   
        questionNumber: 3,
        questions: 'Which logo is seen in the image?',
        answers: ['Alexander McQueen', 'Prada', 'Armani', 'Givenchy'],
        correctAnswer: 2,
        imgFile: './images/chanel-logo.webp',
    },
    {   
        questionNumber: 4,
        questions: 'The logo corresponds to the brand_______.',
        answers: ['Baleciaga', 'Pierre Cardin', 'Prada', 'Polo'],
        correctAnswer: 3,
        imgFile: './images/chanel-logo.webp',
    },
    {   
        questionNumber: 5,
        questions: 'The brand seen here is_________.',
        answers: ['Prada', 'Dior', 'Versace', 'Gucci'],
        correctAnswer: 2,
        imgFile: './images/chanel-logo.webp',
    }

]
console.log(quizOne)


class Question {
    constructor(questionNumber, questions, answers, correctAnswer, imgFile) { 
        this.questionNumber = questionNumber;
        this.questions = questions;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.imgFile = imgFile;

    }


    }


const questionArr = []

for(let i = 0; i < quizOne.length; i ++){
    const question = new Question (
        quizOne[i].questionNumber,
        quizOne[i].questions,
        quizOne[i].answers,
        quizOne[i].correctAnswer,
        quizOne[i].imgFile,
    )
    questionArr.push(question)
}
console.log(questionArr)


//score 
let score = 0;
const scoreBoard = document.querySelector('#score')


//timer 
const displayTimer = document.querySelector('#time')

let time = 10;
const timer = () => {
    intervalId = setInterval(function() {
        displayTimer.innerHTML = `${time}`;
        time--;
        if(time === -1){
            clearInterval(intervalId)
        }
       
        
    }, 1000)
}


// selecting answers 
const displayAnswers = document.querySelectorAll('.answers')
console.log(displayAnswers)
const answersText = document.querySelectorAll('.answers > span')
console.log(answersText)

//
let currentQuestionIndex = 0



// "start game button from categories"
category1.addEventListener('click', () => {
    gameCategories.style.visibility ='hidden'
    startGame()
        
   
})



const startGame = () => {
    generateQuestion()
    
    }

const generateQuestion = () => {
   displayQuestion.innerHTML = questionArr[currentQuestionIndex].questions;
    answersText[0].textContent = questionArr[currentQuestionIndex].answers[0];
    answersText[1].textContent = questionArr[currentQuestionIndex].answers[1];
    answersText[2].textContent = questionArr[currentQuestionIndex].answers[2];
    answersText[3].textContent = questionArr[currentQuestionIndex].answers[3];

}








//check selected options
const checkAnswer = (evt) => {
        answersText.textContent = questionArr[currentQuestionIndex].questions;

        answersText.forEach(function (element, index) {
            element.textContent = questionArr[currentQuestionIndex].answers[index]
            element.addEventListener('click', function () {
                if (questionArr[currentQuestionIndex].correctAnswer === index) {
                    alert('Correct!')
                    score++
                    scoreBoard.innerHTML = `Score:${score}`
                    currentQuestionIndex++
                    generateQuestion()
                    timer()
                } else {
                    alert('Wrong answer!')
                    'Wrong Answer!'
                    currentQuestionIndex++
                    generateQuestion()
                    timer()
                }
            })
        })
    }

    


checkAnswer()
   






//time is up 
const timeUp = () => {

}


//disable options after time is up
const disableOptions = () => {

}

//enable options when time starts again
const enableOptions = () => {

}



// display on screen 
const render = () => {

}









// correct & wrong answer choices 
// displayAnswers.forEach(function(element, index){
//     element.textContent = questionArr[currentQuestionIndex].answers[index]
    
//     console.log( element.textContent = questionArr[currentQuestionIndex].answers[index])
    
//     element.addEventListener('click', function(evt){
       
//         console.log(questionArr[currentQuestionIndex].correctAnswer)
//         console.log(evt.target.getAttribute('data'))

    
//     if(questionArr[currentQuestionIndex].correctAnswer == evt.target.getAttribute('data')){
//         console.log(currentQuestionIndex)
//         console.log(questionArr[currentQuestionIndex].correctAnswer)

//         console.log( element.textContent = questionArr[currentQuestionIndex].answers[index])

//         alert('correct you get a point!')
//         score++;
//         scoreBoard.innerHTML = `Score: ${score}`
//         currentQuestionIndex++
//         render()
    
//     } else {
//          alert('wrong answer!')
//          currentQuestionIndex++
//         render()

        
         
//     }
    
// })

// })

// const timer = document.querySelector('#time')
// console.log(timer)

// const startTimer = () => {
  
// }

// startTimer()






// const render = () => {
//     //renders the questions on screen
//     displayQuestion.textContent = questionArr[currentQuestionIndex].questions

//     // renders answer options
//     // displayAnswers.textContent = questionArr[currentQuestionIndex].answers

//     console.log(displayAnswers)

//     //renders which question we are at
//     displayQuestionNo.textContent = currentQuestionIndex + 1
//     console.log(displayQuestionNo)

//     //renders images
//     displayImage.src =
//     questionArr[currentQuestionIndex].imgFile



// }

    











// const showQuestion = () => {
//     for(let i = 0; i < questionArr.length; i++){
//         displayQuestion.textContent = questionArr[i].questions;

//         displayAnswers.forEach(function(element, index){
//             element.textContent = questionArr[i].answers[index]
//             element.addEventListener('click', function(){
//                 if(questionArr[i].correctAnswer === index){
//                     displayQuestion.textContent = "Correct!"
//                 } else {
//                    displayQuestion.textContent = 'Wrong Answer!'
//                 }
//             })
//         })
//     }  
// }


    
    // 10 second timer per questiion
    
    


    
            
        
      
        
    
    












  
   


        


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
       




