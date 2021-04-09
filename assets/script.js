window.addEventListener('load', function (){
    const restartButton = document.getElementById('restart-btn')
    const nextButton = document.getElementById('next-btn')
    const questionsSectionElement = document.getElementById('questions-section')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answers-section')
    const answerButtonsEl = window.document.getElementsByClassName('answerBtn')
    const gameOverEl = window.document.getElementsByClassName('gameOver')
    const answerContainer = window.document.getElementById('containerTwo')
    const initialsDiv = window.document.getElementById('initialsDiv')
    const initials = window.document.getElementById('initials')
    const saveInitials = window.document.getElementById('initialsButton')
    const initialsStorage = window.document.getElementById('initialsStorage')
    const scoreStorage = window.document.getElementById('scoreStorage')
    let currentQuestionIndex = 0
    const counterEl = document.querySelector('.counter');
    let score = document.getElementById('score')
    let currentScore = 0
    console.log(answerButtonsEl)
    const questions = [
      {
        numb: 1,
        question: 'Commonly used data types DO NOT include:',
        answer: 'Booleans',
        answers: [
          'Strings',
          'Booleans',
          'Alerts',
          'Numbers',
        ]
      },
      {
          numb: 2,
          question: "What does HTML stand for?",
          answer: "Hyper Text Markup Language",
          answers: [
              "Hyper Text Preprocessor",
              "Hyper Text Markup Language",
              "Hyper Text Multiple Language",
              "Hyper Tension May Linger"
          ]
      },
      {
          numb: 3,
          question: "What does CSS stand for?",
          answer: "Cascading Style Sheet",
          answers: [
              "Common Style Sheet",
              "Colorful Style Sheet",
              "Computer Style Sheet",
              "Cascading Style Sheet"
          ]
      },
      {
          numb: 4,
          question: "What does PHP stand for?",
          answer: "Hypertext Preprocessor",
          answers: [
              "Hypertext Preprocessor",
              "Hypertext Programming",
              "Hypertext Preprograming",
              "Hypertext Preprocessor"
          ]
      },
      {
          numb: 5,
          question: "What does SQL stand for?",
          answer: "Structured Query Language",
          answers: [
              "Stylish Question Language",
              "Stylesheet Query Language",
              "Statement Question Language",
              "Structured Query Language"
          ]
      },
      {
          numb: 6,
          question: "What does XML stand for?",
          answer: "eXtensible Markup Language",
          answers: [
              "eXtensible Markup Language",
              "eXecutable Multiple Language",
              "eXtra Multi-Program Language",
              "eXamin Multiple Language"
          ]
      },
    
    ]
    
    const shuffledQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffledQuestions)
    console.log(shuffledQuestions[0].numb) 
    
    restartButton.addEventListener('click', startGame)
  
    init()
  
    function init() {
      var initStore = localStorage.getItem("initials")
      var scoreStore = localStorage.getItem("score")
  
      initialsStorage.innerText = initStore
      scoreStorage.innerText = scoreStore
  
  
    }
  
    
    // set the timer
  
    function countdown() {
      var timeLeft = 90;
      var timeInterval = setInterval(function () {
        
          counterEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
          if (timeLeft === 0) {
            counterEl.textContent = '';
            clearInterval(timeInterval);
          }
      }, 1000)
    }
    
    //start quiz
  
    function startGame() {
      console.log("Started")
      countdown ();
      restartButton.classList.add("hide")
      questionsSectionElement.classList.remove("hide")
      
      nextQuestion()
    }
    
    function nextQuestion() {
     // resetState()
      console.log(currentQuestionIndex)
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }
  
    function checkAnswers(event) {
      console.log(event.target.innerText)
      console.log(shuffledQuestions[currentQuestionIndex].answer)
      if (event.target.innerText === shuffledQuestions[currentQuestionIndex].answer) {
        currentScore += 1
        alert("correct!")
      } else {
      alert("incorrect")
    }
  
    score.innerText = currentScore
    console.log(currentQuestionIndex)
    if (currentQuestionIndex === 5) {
      endGame()
    }
    currentQuestionIndex++
    nextQuestion()
  
  
    }
    
    function showQuestion(question) {
      questionElement.innerText = question.question
  
  
      // for (var i = 0; i < questions.length; i++) {
      //   questionElement.innerText = shuffledQuestions[i].question
      //     for (var j = 0; j < answerButtonsEl.length; j++) {
      //       answerButtonsEl[i].innerText = questions[currentQuestionIndex].answers[i]
      //     }
      //     console.log(i)
      //   currentQuestionIndex++
      //   console.log(answerButtonsEl[i])
      // }
      
      for (var i = 0; i < answerButtonsEl.length; i++) {
        answerButtonsEl[i].innerText = questions[currentQuestionIndex].answers[i]
        // answerButtonsEl[i].addEventListener('click', function (event){
        //     checkAnswers(event)
        // })
      }
  
      
  
      answerContainer.addEventListener("click", checkAnswers)
      
  
      
  
  
    }
  
    function selectAnswer(e) {
    
    }
  
    function endGame() {
      alert("Game over!")
      initialsDiv.classList.remove("hide")
  
      saveInitials.addEventListener('click', function (){
  
          localStorage.setItem("score", JSON.stringify(currentScore))
          localStorage.setItem("initials", initials.value)
  
          var initStore = localStorage.getItem("initials")
          var scoreStore = localStorage.getItem("score")
      
          initialsStorage.innerText = initStore
          scoreStorage.innerText = scoreStore
  
  
      })
  
    }
    
  })
  
  function scoreBoard () {
  
  }
  
      /*answerButtonsEl.forEach((answer, i) => {
        
        answer.innerText = questions[currentQuestionIndex].answers[i]
    
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      }
      )*/
    
    
    /*function resetState() {
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
    }*/
    
    
  
  /*
  const restartButton = document.getElementById('restart-btn')
  const nextButton = document.getElementById('next-btn')
  const questionsSectionElement = document.getElementById('questions-section')
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('answers-section')
  const answerButtonsEl = document.getElementsByClassName('answerBtn')
  let currentQuestionIndex = 0
  const counterEl = document.querySelector('.counter');
  console.log(answerButtonsEl)
  const questions = [
    {
      numb: 1,
      question: 'Commonly used data types DO NOT include:',
      answers: [
        { text: 'Strings', correct: false },
        { text: 'Booleans', correct: true },
        { text: 'Alerts', correct: false },
        { text: 'Numbers', correct: false },
      ]
    },
    {
        numb: 2,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        answers: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tension May Linger"
        ]
    },
    {
        numb: 3,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 4,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprograming",
            "Hypertest Preprocessor"
        ]
    },
    {
        numb: 5,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 6,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXtra Multi-Program Language",
            "eXamin Multiple Language"
        ]
    },
  
  ]
  
  const shuffledQuestions = questions.sort(() => Math.random() - .5)
  
  
  // let shuffledQuestions, currentQuestionIndex
  
  
  restartButton.addEventListener('click', startGame)
  
  function countdown() {
    var timeLeft = 15;
    var timeInterval = setInterval(function () {
      
        counterEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        if (timeLeft === 0) {
          counterEl.textContent = '';
          clearInterval(timeInterval);
        }
    }, 1000)
  }
  
  //start quiz
  function startGame() {
    console.log("Started")
    countdown ();
    restartButton.classList.add("hide")
    questionsSectionElement.classList.remove("hide")
    nextQuestion()
  }
  
  function nextQuestion() {
   // resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question
    console.log(answerButtonsEl);
    answerButtonsEl.forEach((answer, i) => {
      
      answer.innerText = questions[currentQuestionIndex].answers[i]
  
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  /*function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }*/
  
  
  
  