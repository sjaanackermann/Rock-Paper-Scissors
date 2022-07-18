let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors";
        } else if(computerSelection === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else {
            return "It's a Tie!"
        }
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if(computerSelection === "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else {
            return "It's a Tie!"
        }
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else if(computerSelection === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else {
            return "It's a Tie!"
        }
    }
}