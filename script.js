/*const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('scissors');*/
const btn = document.querySelector('button');
const body = document.querySelector('body');
const div = document.createElement('div');
div.setAttribute('style', 'width: 500px; height: 100px; font-weight: bold;');
div.textContent = "";
body.appendChild(div);

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let count = 0;

btn.addEventListener('click', game);

function reset() {
    playerScore = computerScore = 0;
    count = 0;
    playerSelection = computerSelection = "";
}

function checkResult() {
    if (playerScore == computerScore)
        div.textContent += "It is a draw!";
    else if (playerScore > computerScore)
        div.textContent += "You win! :D";
    else
        div.textContent += "You lose :(";

    reset();
}


function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * (choice.length));
    return choice[random];
}

function game() {

    playerSelection = `${btn.textContent}`;
    computerSelection = computerPlay();
    div.textContext += playRound(playerSelection, computerSelection);
    count++;
    if (count % 5 == 0)
        checkResult();

}

function playRound(playerSelection, computerSelection) {
    let message = `Computer chose ${computerSelection}!
    Your score is ${playerScore} <br> Computer score is ${computerScore} <br><br>`;

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) { playerScore += 1;
        computerScore += 1; } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")) { computerScore += 1; } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors"))
        playerScore += 1;

    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "rock"))
        computerScore += 1;

    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "paper"))
        playerScore += 1;

    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock"))
        playerScore += 1;

    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors"))
        computerScore += 1;

    else message = "Choice unavailable! Please try again";

    return message;

}

/*function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
        message = "This is a draw!";

    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper"))
        message = "YOU LOSE! Paper beats Rock!";

    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors"))
        message = "YOU WIN! Rock beats Scissors!";

    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "rock"))
        message = "YOU LOSE! Rock beats Scissors!";

    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "paper"))
        message = "YOU WIN! Scissors beat Paper!";

    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock"))
        message = "YOU WIN! Paper beats Rock!";

    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors"))
        message = "YOU LOSE! Scissors beat Paper!";

    else message = "Choice unavailable! Please try again";

    return message;

}*/