//variables //////////////////////////////////
let startBtn = document.getElementById("start");
let saveScore = document.getElementById("save-score");
let choiceButton = document.getElementById("choices");
let questionTitle = document.getElementById("question-title");
let choicesDiv = document.getElementById("choices");
let description = document.getElementById("description")
let questionary = document.getElementById("question")
let form = document.getElementById("form");
let highScoresArr = JSON.parse(localStorage.getItem('highScoresArr')) || [];
let questionIndex = 0;
let time = 90;

//functions //////////////////////////////////
function init() {
    description.setAttribute("style", "display: block");
    form.setAttribute("style", "display: none");
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
        time--;
        document.getElementById("timer-count").textContent = time;
        if (time <= 0 || questionIndex >= questions.length) {
            clearInterval(interval);
            endGame();
        }
    }, 1000)
}

function getQuestion() {
    let currentQuestion = questions[questionIndex];
    questionTitle.textContent = currentQuestion.title;
    choicesDiv.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("value", choice);
        choiceButton.onclick = answerCheck;
        choicesDiv.appendChild(choiceButton);
    });
}

function answerCheck() {
    if (this.value === questions[questionIndex].correctAnswer) {
        alert('Yes, Goal!');
    } else {
        time -= 10;
        alert('No, Goal Against!');
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        getQuestion();
    }
}

// end game
function endGame() {
    alert('Game is Over!');
    questionary.setAttribute("style", "display: none");
    form.setAttribute("style", "display: block",);
}

// save high score
function saveHighScore(event) {
    event.preventDefault();
    let initialInput = document.getElementById('initials').value;
    let highScoreObj = {
        name: initialInput,
        score: time,
    };
    highScoresArr.push(highScoreObj);
    highScoresArr.sort((a, b) => b.highScoreObj - a.highScoreObj);
    localStorage.setItem('highScoresArr', JSON.stringify(highScoresArr));
    highScoresLink();
}

function highScoresLink() {
    window.location.href = "./highscores.html";
}

startBtn.addEventListener("click", startQuiz);
saveScore.addEventListener("click", saveHighScore);

init();