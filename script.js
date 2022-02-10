/*const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('scissors');*/
const btns = document.querySelectorAll('button');
const body = document.querySelector('body');
const div = document.createElement('div');

div.setAttribute('style', 'width: 800px; height: 300px; font-weight: bold; background-color: lightblue; font-size: 22px; font-family: sans-serif; text-align:center;');
div.textContent = "";
body.appendChild(div);

let playerSelection;
let computerSelection;
let message;
let playerScore = 0;
let computerScore = 0;
let count = 0;

btns.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (count == 5) reset();
        playerSelection = this.className;
        computerSelection = computerPlay();
        game();


    });
});


function reset() {
    playerScore = computerScore = 0;
    count = 0;
    playerSelection = computerSelection = "";
    div.textContent = "";
}

function checkResult() {
    if (playerScore == computerScore)
        div.textContent += '\nIt is a draw!';

    else if (playerScore > computerScore)
        div.textContent += '\nYou win! :D';
    else
        div.textContent += '\nYou lose :(';


}


function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * (choice.length));
    return choice[random];
}

function game() {

    if (count <= 5) {
        let text = playRound(playerSelection, computerSelection);
        div.textContent += text;
        body.appendChild(div);
        count++;
    }

    if (count == 5) checkResult();

}

function playRound(playerSelection, computerSelection) {


    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        {
            playerScore += 1;
            computerScore += 1;
        }
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")) { computerScore += 1; } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors"))
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

    message = `Computer chose ${computerSelection}!\n
    Your score is ${playerScore}\n
    Computer score is ${computerScore}\n\n`;

    console.log(message);

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