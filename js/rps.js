let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
var round = 0;
let winText;
let number;
let computerSelection;
let scoreText;
let loseText;
let tieText;
let i;

function computerPlay() {

    number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        return "lose";

    } else {
        return "win";
    }
}

buttons.forEach(function (button) {

    button.addEventListener("click", (e) => {

        ++round;

        if (button.id == "rock") {
            playerSelection = "rock";
        } else if (button.id == "paper") {
            playerSelection = "paper";
        } else {
            playerSelection = "scissors";
        }

        computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection) == "tie") {
            if (round > 1) {
                round--;
            } else {
                round = round;
            }

        } else if (playRound(playerSelection, computerSelection) == "lose") {
            computerScore++;
        } else {
            playerScore++;
        }

        scoreText = " | " + "Round: " + round + " | " + "<br>Your Choice:<br>" + playerSelection + "<br>Computers Choice:<br>" + computerSelection;
        document.getElementById("score").innerHTML = scoreText;

        if (round == 3) {
            if (playerScore > computerScore) {
                winText = document.createElement("p");
                winText.textContent = "You win! " + "Your Score: " + playerScore + " - " + "Computers Score: " +
                    computerScore;
                document.getElementById("score").append(winText);

            } else if (playerScore < computerScore) {
                loseText = document.createElement("p");
                loseText.textContent = "You lose! " + "Your Score: " + playerScore + " - " + "Computers Score: " + computerScore;
                document.getElementById("score").append(loseText);
            } else {
                tieText = document.createElement("p");
                tieText.textContent = "It's a tie! " + "Your Score: " + playerScore + " - " + "Computers Score: " + computerScore;
                document.getElementById("score").append(tieText);
            }
            round = 0;
            playerScore = 0;
            computerScore = 0;
        }
    })
})