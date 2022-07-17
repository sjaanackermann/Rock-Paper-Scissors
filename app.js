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

