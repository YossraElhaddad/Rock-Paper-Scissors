const choice = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * (choice.length));
    return choice[random];
}