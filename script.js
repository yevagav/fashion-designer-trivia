//  home page of game 
const homePage = document.querySelector('.home-page')
const startButton = document.querySelector('.start-game')

//Making the next page appear after start trivia is pressed
const playerDetailsCont = document.querySelector('.player-details')

startButton.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    playerDetailsCont.style.visibility = 'visible';

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
        imgFile: './images/hermes-logo.jpeg',
    },
    {   
        questionNumber: 3,
        questions: 'Which logo is seen in the image?',
        answers: ['Alexander McQueen', 'Prada', 'Armani', 'Givenchy'],
        correctAnswer: 2,
        imgFile: './images/GA-logo.jpeg',
    },
    {   
        questionNumber: 4,
        questions: 'The logo corresponds to the brand_______.',
        answers: ['Baleciaga', 'Pierre Cardin', 'Prada', 'Polo'],
        correctAnswer: 3,
        imgFile: './images/rl-logo.png',
    },
    {   
        questionNumber: 5,
        questions: 'The brand seen here is_________.',
        answers: ['Prada', 'Dior', 'Versace', 'Gucci'],
        correctAnswer: 2,
        imgFile: './images/versace-logo.png',
    },
    {
        questionNumber: 6,
        questions:'Which of these designer brand logos is seen in the picture?',
        answers: ['Tory Burch', 'Yves Saint Laurent', 'Dior', 'Carolina Herrera'],
        correctAnswer: 1,
        imgFile: './images/ysl-logo.png',

    },
    {
        questionNumber: 7,
        questions:'The brand seen here is______.',
        answers: ['Chloe', 'Polo', 'Chanel', 'Burberry'],
        correctAnswer: 0,
        imgFile: './images/chloe-logo.jpeg'
    },
    {
        questionNumber: 8,
        questions: 'The logo shown is of the brand____.',
        answers: ['Prada', 'Dior', 'Vera Wang', 'Gucci'],
        correctAnswer: 1,
        imgFile: './images/dior0logo.png'
    },
    {
        questionNumber: 9,
        questions: 'The brand represented in the image is______.',
        answers: ['Tory Burch', 'Yves Saint Laurent', 'Dior', 'Oscar de La Renta'],
        correctAnswer: 3,
        imgFile: './images/oscar-logo.jpeg'

    },
    {
        questionNumber: 10,
        questions: 'What brand logo is shown here?',
        answers: ['Gucci', 'Balmain', 'Givenchy', 'Carolina Herrera'],
        correctAnswer: 2,
        imgFile: './images/givenchy-logo.png',
    },
       

    

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
let intervalId;

const timer = () => {
    intervalId = setInterval(function() {
        displayTimer.innerHTML = `${time}`;
        time--;
        if(time < 0){
            clearInterval(intervalId)
            setTimeout(function(){
                showAnswers()
                currentQuestionIndex++
                generateQuestion()
                time = 10;
                timer()
            },600);

            
        } else if (time <= 5){
            displayTimer.style.color = 'red'
        }
        
       
        
    },1000)
}


// selecting answers 
const displayAnswers = document.querySelectorAll('.answers')
console.log(displayAnswers)
const answersText = document.querySelectorAll('.answers > div')
console.log(answersText)

//
let currentQuestionIndex = 0

const gameContainer = document.querySelector('.game-container')

// start game button from categories
category1.addEventListener('click', () => {
    gameCategories.style.visibility ='hidden';
    gameContainer.style.visibility = 'visible';
    startGame()
    
        
   
})


// start game function 
const startGame = () => {
    generateQuestion();
    timer();
    checkAnswer();
    
    
    
}



function generateQuestion () {
    displayQuestionNo.innerHTML = questionArr[currentQuestionIndex].questionNumber;

   displayQuestion.innerHTML = questionArr[currentQuestionIndex].questions;

    answersText[0].textContent = questionArr[currentQuestionIndex].answers[0];

    answersText[1].textContent = questionArr[currentQuestionIndex].answers[1];

    answersText[2].textContent = questionArr[currentQuestionIndex].answers[2];

    answersText[3].textContent = questionArr[currentQuestionIndex].answers[3];
    
    displayImage.src = questionArr[currentQuestionIndex].imgFile
   
   
}








//check selected options
const checkAnswer = (evt) => {
    answersText.textContent = questionArr[currentQuestionIndex].questions;

    answersText.forEach(function (element, index) {
     element.textContent = questionArr[currentQuestionIndex].answers[index]
      element.addEventListener('click', function () {
        if (questionArr[currentQuestionIndex].correctAnswer === index) {
            clearInterval(intervalId);
            displayQuestion.innerText = "Correct! You're good at this!"
            removeAnswers()
            score++
            scoreBoard.innerHTML = `Score:${score}`
                    
            setTimeout(function(){
                showAnswers()
                currentQuestionIndex++
                generateQuestion()
                time = 10;
                timer()
            },600);
                
                
        } else {
            clearInterval(intervalId);
            displayQuestion.innerText = "Sorry that answer is wrong!"
            removeAnswers()
            setTimeout(function(){
                showAnswers()
                currentQuestionIndex++
                generateQuestion()
                time = 10;
                timer()
            },600);
            
        }
        
        })

    })
}        

    
//answers container
const answersContainer = document.querySelector('.answer-container')

function removeAnswers () {
    answersContainer.style.visibility = 'hidden'
}

function showAnswers () {
    answersContainer.style.visibility = 'visible'
}



//game over
function gameOver () {
    if(currentQuestionIndex === 9){
     alert(`Game Over You Got ${score} points!`)
        document.location.reload()
    }
    
}
    gameOver()

















    











           
    


    
            
        
      
        
    
    












  
   


  



