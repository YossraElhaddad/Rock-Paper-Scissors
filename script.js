const choice = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * (choice.length));
    return choice[random];
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Select your choice");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
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

}