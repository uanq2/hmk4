// define variables //////////////////////////////////
let startBtn = document.getElementById("start");
let saveScore = document.getElementById("save-score");
let choiceButton = document.getElementById("choices");
let questionTitle = document.getElementById("question-title");
let choicesDiv = document.getElementById("choices");
let description = document.getElementById("description")
let timer;
let timerCount;
let questionIndex = 0;
let countdown = 90;

// functions //////////////////////////////////

function init() {
    description.setAttribute("style", "display: block");
}

function startQuiz() {
    description.setAttribute("style", "display: none");
    getQuestion();
    startTimer()
    if (startBtn.style.display === 'none') {
        startBtn.style.display = 'block';
    } else {
        startBtn.style.display = 'none'
    }
}

function startTimer() {
    var interval = setInterval(function () {
        countdown--;
        document.getElementById("timer-count").textContent = countdown;

        if (countdown <= 0 || questionIndex >= questions.length) {
            clearInterval(interval);
            endGame();
        }
    }, 1000)
}


// get the next question
function getQuestion() {
    // get the current question
    let currentQuestion = questions[questionIndex];
    // show the question
    questionTitle.textContent = currentQuestion.title;
    // loop show the choices (buttons)
    currentQuestion.choices.forEach(choice => {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("value", choice);
        // add event listener for the each button created
        choiceButton.onclick = answerCheck;
        choicesDiv.appendChild(choiceButton);
    });
    answerCheck();
}

// check the user selection against correct answer
// incorrect remove seconds
// set score
// get next question
// showQuestion();
// if questions.length


// check user selection
function answerCheck() {
    if (this.value === questions[questionIndex].correctAnswer) {
        alert('correct');
        questionIndex++;
        if (questionIndex < questions.length) {
            getQuestion();
        } else {
            endGame();
        }
    }
    // check the user selection against correct answer
    // incorrect remove seconds
    // set score
    // get next question
    //getQuestion();
    // if questions.length
    //endGame();
}

// end game
function endGame() {
    //alert(Game is Over!);

    // show end screen
    // clear out timer
}

// save high score
function saveHighScore() {

    // prompt for initials
    // save score to localstorage
}

// event listeners //////////////////////////////////
// start button click

choiceButton.addEventListener("click", answerCheck);
startBtn.addEventListener("click", startQuiz);

// save high score
//saveScore.addEventListener("click", saveHighScore);

init();