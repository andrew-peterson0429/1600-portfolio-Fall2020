// API endpoint
const quizAPI = 'https://quizzes.raineworks.com/api/old-greg/quiz';
let jsonData;

const getQuiz = function (url) {
    return new Promise(resolve => {
        axios.get(url).then()
    })
}


// Selects start button
const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// Whenever start button is click it executes code startGame
startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// What happens when you press start btn
function startGame() {
    console.log('Started')
    //hides button after pressed
    startButton.classList.add('hide')
    // equals to shuffled array, sorts  questions array and takes a negative number and sorts it one way and takes posives number and sorts another way. Math random gives number between 1 and 0, and if subtracted by .5 we will get a number that is below or above 0 half the time giving a random array
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    //question container is added and removes hide
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// What happens when you press next btn
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//takes a question to display
function showQuestion(question) {
    //resets everything back to def state everytime a new question is set
    resetState()
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.textbutton.classList.add('btn')
        //only affects if the button is correct when checking
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        //whenever click it takes event in as paramater
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList,add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

// What happens when you select an answer btn
function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    //sets the status on whether answer selected was correct or not
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //checks to see if we are on the last question, if not, shows next button or restart button if finished all questions
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    //if answer is correct it will add correct class
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    },
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    },
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    },
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    },
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    },
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    },
]