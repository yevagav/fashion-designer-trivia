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

const showName = document.querySelector('.game-categories > h1 span')
console.log(showName)

const nameVal = document.querySelector('#name')
console.log(nameVal)

//When button is clicked the name gets stored in the game
submitName.addEventListener('click', () => {
    playerDetailsCont.style.visibility= 'hidden';
    gameCategories.style.visibility = 'visible'

    showName.textContent = nameVal.value
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

const gameContainer = document.querySelector('.game-container')

//timer 
const displayTimer = document.querySelector('#time')

//Game Logic

// start game button from categories

//categorty one 'Do You Know The Logo'
category1.addEventListener('click', () => {
    gameCategories.style.visibility ='hidden';
    gameContainer.style.visibility = 'visible';
    startGame()
    
        
   
})


//Category 1 Questions 
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



//Class for all categories
class Question {
    constructor(questionNumber, questions, answers, correctAnswer, imgFile) { 
        this.questionNumber = questionNumber;
        this.questions = questions;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.imgFile = imgFile;

    }
}

// quiz One array
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


//score for all quizes
let score = 0;
const scoreBoard = document.querySelector('#score')



// variables for all the quiz categories 
let time = 10;
let intervalId;

//timer for quizOne
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



// current Question Index that will be tracked during the entire game 

let currentQuestionIndex = 0

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
                gameOver()
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
                gameOver()
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

//remove or show answers when question answered
function removeAnswers () {
    answersContainer.style.visibility = 'hidden'
}

function showAnswers () {
    answersContainer.style.visibility = 'visible'
}

    // start game function quiz One
const startGame = () => {
    generateQuestion();
    timer();
    checkAnswer();
    
    
    
}


//Quiz Two - Category 2 Trivia

//category two "Designer Fashion"
category2.addEventListener('click', () => {
    gameCategories.style.visibility ='hidden';
    gameContainer.style.visibility = 'visible';
    startGame2()
})

//quizTwo questions
const quizTwo = [

    {
        questionNumber: 1,
        questions: 'What is the name of this popular item from Gucci?',
        answers: ['Leather Loafer Slipper', 'PrinceTown Slipper', 'Horsebit Slipper ', 'Oz mule'],
        correctAnswer: 1,
        imgFile: './images/gucci.jpeg',
    },
    {
        questionNumber: 2,
        questions: 'Which designer brand is known for this popular trench coat?',
        answers: ['Alexander McQueen', 'Dior', 'Saint Laurent', 'Burberry'],
        correctAnswer: 3,
        imgFile: './images/burberry-trench.jpeg',
    },
    {
        questionNumber: 3,
        questions: 'Popular Hermès bag that is hard to get a hold of? ',
        answers: ['Constance', 'Birkin', 'Kelly', 'Jyspiere'],
        correctAnswer: 1,
        imgFile: './images/hermes-birkin.webp',
    },
    {
        questionNumber: 4,
        questions: 'Which designer sells this trendy summer bag?',
        answers: ['Loewe', 'Saint Laurent', 'Celine', 'Prada'],
        correctAnswer: 0,
        imgFile: './images/loewe-bag.jpeg',
    },
    {
        questionNumber: 5,
        questions: 'Which brand sells these trendy designer sunglasses?',
        answers: ['Celine', 'Isabel Marant', 'Versace', 'Prada'],
        correctAnswer: 3,
        imgFile: './images/prada-sunglasses.jpeg',
    },
    {
        questionNumber: 6,
        questions: 'The bag seen here is a classic _________, from Chanel.',
        answers: ['Boy Bag', 'Crossbody Bag', 'Flap Bag', 'Leather Bag'],
        correctAnswer: 2,
        imgFile: './images/chanel-bag.webp',

    },
    {
        questionNumber: 7,
        questions: 'The necklace shown here is a Vintage Alhambra Necklace by_________, worth $8,000',
        answers: ['Chloe', 'Tory Burch', 'Chanel', 'Van Cleef & Arpels'],
        correctAnswer: 3,
        imgFile: './images/vancleef.jpeg'
    },
    {
        questionNumber: 8,
        questions: 'The designer known for their polos?',
        answers: ['Ralph Lauren', 'Tommy', 'Tory Burch', 'Gucci'],
        correctAnswer: 0,
        imgFile: './images/polo-top.jpeg'
    },
    {
        questionNumber: 9,
        questions: 'Which brand created this tiny bag?',
        answers: ['Prada', 'Jacquemus', 'Dior', 'Oscar de La Renta'],
        correctAnswer: 1,
        imgFile: './images/tiny-bag.jpg'

    },
    {
        questionNumber: 10,
        questions: 'This ring by_____ is a popular wedding band choice ',
        answers: ['Tiffany', 'Van Cleef & Arpels', 'David Yurman', 'Cartier'],
        correctAnswer: 3,
        imgFile: './images/lovering.jpeg',
    },




]
console.log(quizTwo)

//

let questionArr2 = [];

for(let i = 0; i < quizTwo.length; i ++){
    const question = new Question (
        quizTwo[i].questionNumber,
        quizTwo[i].questions,
        quizTwo[i].answers,
        quizTwo[i].correctAnswer,
        quizTwo[i].imgFile,
    )
    questionArr2.push(question)
}
console.log(questionArr2)



function generateQuestion2 () {
    displayQuestionNo.innerHTML = questionArr2[currentQuestionIndex].questionNumber;

   displayQuestion.innerHTML = questionArr2[currentQuestionIndex].questions;

    answersText[0].textContent = questionArr2[currentQuestionIndex].answers[0];

    answersText[1].textContent = questionArr2[currentQuestionIndex].answers[1];

    answersText[2].textContent = questionArr2[currentQuestionIndex].answers[2];

    answersText[3].textContent = questionArr2[currentQuestionIndex].answers[3];
    
    displayImage.src = questionArr2[currentQuestionIndex].imgFile
   
   
}

//quiz2 Timer
const timer2 = () => {
    intervalId = setInterval(function() {
        displayTimer.innerHTML = `${time}`;
        time--;
        if(time < 0){
            clearInterval(intervalId)
            setTimeout(function(){
                showAnswers()
                currentQuestionIndex++
                generateQuestion2()
                time = 10;
                timer2()
            },600);

            
        } else if (time <= 5){
            displayTimer.style.color = 'red'
        }
        
       
        
    },1000)
}

//check selected options
const checkAnswer2 = (evt) => {
    answersText.textContent = questionArr2[currentQuestionIndex].questions;

    answersText.forEach(function (element, index) {
     element.textContent = questionArr2[currentQuestionIndex].answers[index]
      element.addEventListener('click', function () {
        if (questionArr2[currentQuestionIndex].correctAnswer === index) {
            clearInterval(intervalId);
            displayQuestion.innerText = "Correct! You're good at this!"
            removeAnswers()
            score++
            scoreBoard.innerHTML = `Score:${score}`
                    
            setTimeout(function(){
                gameOver()
                showAnswers()
                currentQuestionIndex++
                generateQuestion2()
                time = 10;
                timer2()
            },600);
                
                
        } else {
            clearInterval(intervalId);
            displayQuestion.innerText = "Sorry that answer is wrong!"
            removeAnswers()
            setTimeout(function(){
                gameOver()
                showAnswers()
                currentQuestionIndex++
                generateQuestion2()
                time = 10;
                timer2()
            },600);
            
        }
        
        })

    })
}     

// start game function quiz Two
const startGame2 = () => {
    generateQuestion2();
    timer2();
    checkAnswer2()
    
    
    
    
}



//Quiz Three - Category 3 Trivia

//category three "Which Designer Is This"
category3.addEventListener('click', () => {
    gameCategories.style.visibility ='hidden';
    gameContainer.style.visibility = 'visible';
    startGame3()
})

//quizThree questions
const quizThree = [

    {
        questionNumber: 1,
        questions: 'Who is this designer?',
        answers: ['Ralph Lauren', 'Tom Ford', 'Calvin Klien', 'Giorgio Armani'],
        correctAnswer: 0,
        imgFile: './images/ralph-designer.jpeg',
    },
    {
        questionNumber: 2,
        questions: 'Who is this designer?',
        answers: ['Tom Ford', 'Ralph Lauren', 'Giorgio Armani', 'Calvin Klein'],
        correctAnswer: 3,
        imgFile: './images/calvin.jpeg',
    },
    {
        questionNumber: 3,
        questions: 'Who is this designer?',
        answers: ['Vera Wang', 'Donatella Versace', 'Coco Chanel', 'Diane Von Furstenberg'],
        correctAnswer: 1,
        imgFile: './images/donatella.jpeg',
    },
    {
        questionNumber: 4,
        questions: 'Who is this designer?',
        answers: ['Tory Burch', 'Carolina Herrera', 'Coco Chanel', 'Vera Wang'],
        correctAnswer: 3,
        imgFile: './images/vera.jpeg',
    },
    {
        questionNumber: 5,
        questions: 'Who is this designer?',
        answers: ['Coco Chanel', 'Stella McCartney', 'Miuccia Prada', 'Diane von Furstenberg'],
        correctAnswer: 0,
        imgFile: './images/Coco-Chanel-1.jpeg',
    },
    {
        questionNumber: 6,
        questions: 'Who is this designer?',
        answers: ['Gianni Versace', 'Louis Vuitton', 'Tom Ford', 'Marc Jacobs'],
        correctAnswer: 2,
        imgFile: './images/tom.webp',

    },
    {
        questionNumber: 7,
        questions: 'Who is this designer?',
        answers: ['Karl Lagerfeld', 'Marc Jacobs', 'Oscar De LA Renta', 'Michael Kors'],
        correctAnswer: 1,
        imgFile: './images/marc.webp'
    },
    {
        questionNumber: 8,
        questions: 'Who is this designer?',
        answers: ['Tom Ford', 'Michael Kors', 'Vera Wang', 'Pierre Cardin'],
        correctAnswer: 3,
        imgFile: './images/pierre.jpeg'
    },
    {
        questionNumber: 9,
        questions: 'Who is this designer?',
        answers: ['Miuccia Prada', 'Yves Saint Laurent', 'Christian Dior', 'Oscar de La Renta'],
        correctAnswer: 0,
        imgFile: './images/prada.jpg'

    },
    {
        questionNumber: 10,
        questions: 'Who is this designer?',
        answers: ['Gianni Versace', 'Pierre Balmain', 'Giorgio Armani', 'Carolina Herrera'],
        correctAnswer: 2,
        imgFile: './images/armani.jpeg',
    },




]
console.log(quizThree)

let questionArr3 = [];

for(let i = 0; i < quizThree.length; i ++){
    const question = new Question (
        quizThree[i].questionNumber,
        quizThree[i].questions,
        quizThree[i].answers,
        quizThree[i].correctAnswer,
        quizThree[i].imgFile,
    )
    questionArr3.push(question)
}
console.log(questionArr3)


//renders questions on screen 
function generateQuestion3 () {
    displayQuestionNo.innerHTML = questionArr3[currentQuestionIndex].questionNumber;

   displayQuestion.innerHTML = questionArr3[currentQuestionIndex].questions;

    answersText[0].textContent = questionArr3[currentQuestionIndex].answers[0];

    answersText[1].textContent = questionArr3[currentQuestionIndex].answers[1];

    answersText[2].textContent = questionArr3[currentQuestionIndex].answers[2];

    answersText[3].textContent = questionArr3[currentQuestionIndex].answers[3];
    
    displayImage.src = questionArr3[currentQuestionIndex].imgFile
   
   
}

//quiz3 Timer
const timer3 = () => {
    intervalId = setInterval(function() {
        displayTimer.innerHTML = `${time}`;
        time--;
        if(time < 0){
            clearInterval(intervalId)
            setTimeout(function(){
                showAnswers()
                currentQuestionIndex++
                generateQuestion3()
                time = 10;
                timer3()
            },600);

            
        } else if (time <= 5){
            displayTimer.style.color = 'red'
        }
        
       
        
    },1000)
}

const checkAnswer3 = (evt) => {
    answersText.textContent = questionArr3[currentQuestionIndex].questions;

    answersText.forEach(function (element, index) {
     element.textContent = questionArr3[currentQuestionIndex].answers[index]
     
      element.addEventListener('click', function () {
        if (questionArr3[currentQuestionIndex].correctAnswer === index) {
            clearInterval(intervalId);
            displayQuestion.innerText = "Correct! You're good at this!"
            removeAnswers()
            score++
            scoreBoard.innerHTML = `Score:${score}`
                    
            setTimeout(function(){
                gameOver()
                showAnswers()
                currentQuestionIndex++
                generateQuestion3()
                time = 10;
                timer3()
            },600);
                
                
        } else {
            clearInterval(intervalId);
            displayQuestion.innerText = "Sorry that answer is wrong!"
            removeAnswers()
            setTimeout(function(){
                gameOver()
                showAnswers()
                currentQuestionIndex++
                generateQuestion3()
                time = 10;
                timer3()
            },600);
            
        }
        
        })

    })
}   

// start game function quiz One
const startGame3 = () => {
    generateQuestion3();
    timer3();
    checkAnswer3()
    
    
    
    
}

//game over applies to all categories
function gameOver () {
    if(currentQuestionIndex === 9){
     alert(`Game Over You Got ${score} points!`)
        document.location.reload()
    }
    
}
















    











           
    


    
            
        
      
        
    
    












  
   


  



