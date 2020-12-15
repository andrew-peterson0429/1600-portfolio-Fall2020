const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
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
      { text: 'Lake Cumberland', correct: false },
      { text: 'Purple Lake', correct: false }
    ]
  },
  {
    question: 'Old Gregg showed Howard his...',
    answers: [
      { text: 'Baileys supply', correct: false },
      { text: 'Tutu collection', correct: false },
      { text: 'Down stairs mix-up', correct: true }
    ]
  },
  {
    question: 'Howard pulled up Old Gregg with...',
    answers: [
      { text: 'His fishing net', correct: false },
      { text: 'His strong arms', correct: true },
      { text: 'His harpoon', correct: false }
    ]
  },
  {
    question: 'What drink does Old Gregg offer Howard?',
    answers: [
      { text: 'Tea', correct: false },
      { text: 'Baileys', correct: true },
      { text: 'Pepsi', correct: false }
    ]
  },
  {
    question: 'What is the name of Old Greggs water color painting?',
    answers: [
      { text: 'Old Gregg', correct: true },
      { text: 'Queen Elizabeth', correct: false },
      { text: 'Starry Night', correct: false }
    ]
  },
  {
    question: 'What is Old Gregg?',
    answers: [
      { text: 'Mermaid', correct: false },
      { text: 'Man fish', correct: true },
      { text: 'Lady', correct: false }
    ]
  },
  {
    question: 'What does Old Gregg have that no one else does?',
    answers: [
      { text: 'Curly Jefferson', correct: false },
      { text: 'Baileys', correct: false },
      { text: 'The Funk', correct: true }
    ]
  },
  {
    question: 'Its attached to ya rod...',
    answers: [
      { text: 'sucka', correct: false },
      { text: 'daddy-o', correct: false },
      { text: 'mutha licka', correct: true }
    ]
  },
  {
    question: 'What is the song called that Old Gregg sings?',
    answers: [
      { text: 'Do ya love me', correct: true },
      { text: 'Do ya hate me', correct: false },
      { text: 'Loving Baileys', correct: false }
    ]
  },
  {
    question: 'What does Old Gregg call his home?',
    answers: [
      { text: 'Greggs Lair', correct: false },
      { text: 'Mi Casa', correct: false },
      { text: 'Greggs Place', correct: true }
    ]
  }
]