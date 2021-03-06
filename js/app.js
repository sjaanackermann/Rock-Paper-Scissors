let computerScore = 0;
let playerScore = 0;
const choices = ["rock", "paper", "scissors"];

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

function game() {
    for (let i=0;i<5;i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        while(playerSelection == null) {
            playerSelection = prompt('Rock, Paper, or Scissors?');
        }
        playerSelection = playerSelection.toLowerCase().trim();
        let check = validateInput(playerSelection);
        while (check == false){
            playerSelection = prompt(
              'Rock, Paper, or Scissors? Check your spelling, capitalization does not matter'
            );
            while(playerSelection == null) {
                playerSelection = prompt('Rock, Paper, or Scissors?');
            }
            playerSelection = playerSelection.toLowerCase().trim();
            check = validateInput(playerSelection);
        }        
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: Total Score ${playerScore}`);
        console.log(`Computer: Total Score ${computerScore}`);
    
        if (playerScore > computerScore) {
            console.log("Congratulations, You are the Winner!");
        } else if (computerScore > playerScore) {
            console.log("Too bad, the Computer won");
        } else {
            console.log("No one wins... You are tied with the Computer");
        }
        if (playerScore > computerScore) {
            alert("Congratulations, You are the Winner!");
        } else if (computerScore > playerScore) {
            alert("Too bad, the Computer won");
        } else {
            alert("No one wins... You are tied with the Computer");
        }
    }
}

function validateInput(input){
    if(choices.includes(input)){
        return true;
    } 
    return false;
}

game()