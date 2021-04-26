let highScores = document.getElementById("highscore-display");
let highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];

function displayScores() {
    highScores.innerHTML = highScoresArr
        .map((score) => {
            return `<li>${score.name}<span> - </span>${score.score}</li>`;
        })
        .join("");
}
displayScores();