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

category1.addEventListener('click', () => {
    gameCategories.style.visibility ='hidden'
    showQuestion()
        
   
})




//Once the category is chosen the game starts 
const displayQuestion = document.getElementById('questions')


const displayQuestionNo = document.getElementById('num')


const displayTimer = document.querySelector('#time')


const displayScore = document.querySelector('#total')


const displayAnswers = document.querySelectorAll('.answers')

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


let currentQuestionIndex = 0

let score = 0;
const scoreBoard = document.querySelector('#score')



const showQuestion = () => {
    displayQuestion.textContent = questionArr[currentQuestionIndex].questions

    displayQuestionNo.textContent = currentQuestionIndex + 1
console.log(displayQuestionNo)

    displayImage.src =
    questionArr[currentQuestionIndex].imgFile

    console.log(displayAnswers)

    displayAnswers.forEach(function(element, index){
        element.textContent = questionArr[currentQuestionIndex].answers[index]
        
        element.addEventListener('click', function(evt){
            console.log(questionArr[currentQuestionIndex].correctAnswer)
            console.log(evt.target.getAttribute('data'))
        if(questionArr[currentQuestionIndex].correctAnswer == evt.target.getAttribute('data')){
            console.log(currentQuestionIndex)
            console.log(questionArr[currentQuestionIndex].correctAnswer)
           
            score++;
            scoreBoard.innerHTML = `Score: ${score}`
            displayQuestion.textContent = "Correct!"
            currentQuestionIndex++
            showQuestion()
        } else {
             displayQuestion.textContent = 'Wrong Answer!'
             currentQuestionIndex++
             showQuestion()

            
             
        }
    })

    })

}

    







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
       




