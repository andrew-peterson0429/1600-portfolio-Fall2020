// API endpoint
const quizAPI = 'quizzes.raineworks.com/api/old-greg/';

// Selects start button
const startButton = document.getElementById('start-btn')

const quiz = function (url) {
    axios.get(url).then((res) => {
        let data = res.data;
        console.log(data);
    }).catch((err) => {
        console.log(err);
    }); 
}(`${quizAPI}quiz`);

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// Whenever start button is click it executes code startGame
startButton.addEventListener('click', startGame)

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
    questionElement.innerText = question.question
}

// What happens when you select answer btn
function selectAnswer() {

}

const questions = [
    {
        question: 'What is the name of Old Greggs waters?',
        answers: [
            { text: 'Black Lake', correct: true },
            { text: 'Lake Cumberland', correct: false }
        ]
    }
]