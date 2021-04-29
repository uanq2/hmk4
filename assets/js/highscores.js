let highScores = document.getElementById("high-scores");
let highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];

function displayScores() {
    highScores.innerHTML = highScoresArr
        .map((score) => {
            return `<li>${score.name} ${score.score}</li>`;
        })
        .join("");
}
displayScores();