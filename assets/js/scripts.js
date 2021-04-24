// define variables //////////////////////////////////
let startBtn = document.getElementById("start");
let saveScore = document.getElementById("save-score");
let choiceButton = document.getElementById("choices");
let questionTitle = document.getElementById("question-title");
let choicesDiv = document.getElementById("choices");
var timer;
var timerCount;
let questionIndex = 0;


// functions //////////////////////////////////
// start quiz - init
function startQuiz() {
    // start timer
    // find dom element to show the question
    getQuestion();
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
    } else {
    }

    // check the user selection against correct answer
    // incorrect remove seconds
    // set score
    // get next question
    //getQuestion();
    // if questions.length
    endGame();
}

// end game
function endGame() {
    // set their score
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