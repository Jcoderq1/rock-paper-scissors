
// function to pick random choice between rock, paper, scissors.
function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
};

function getPlayerSelection() {
    let playerChoice = prompt("what do you choose?").toLocaleLowerCase();
    return playerChoice.toLocaleLowerCase()
};
let computerSelection = getComputerChoice();
let playerChoice = getPlayerSelection();


function checkWinner(computerSelection, playerChoice) {
    if(playerChoice == computerSelection) {
        return "Tie";
    }
    else if(
        (playerChoice == "rock" && computerSelection == "scissors") ||
        (playerChoice == "scissors" && computerSelection == "paper") ||
        (playerChoice == "paper" && computerSelection == "rock")
    ){
        return "Player"
    } 
    else {
        return "Computer"
    }

}

function playRound(computerSelection, playerChoice){
    const result = checkWinner(computerSelection, playerChoice);
    if(result == "Tie") {
     return "It's a Tie"

    } 
    else if(result == "Player") {
        return `You Win! ${playerChoice} beats ${computerSelection}`

    } else {
        return `You loose! ${computerSelection} beats ${playerChoice}`
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerChoice)); 
        if(checkWinner(computerSelection, playerChoice) == "Player") {
            playerScore++;
        } 
        else if(checkWinner(computerSelection, playerChoice) == "Computer") {
            computerScore++;
        }
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);   
    }
    console.log("game over")
    if(playerScore > computerScore) {
        console.log("Player was the winner");
    }
    else if(playerScore < computerScore) {
        console.log("Computer was the winner");
    }
    else{ 
        console.log("We have a Tie!");
}
}
game();



// make 2 variables for keeping track of player score and computer score
//let playerScore = 0;
//let computerScore = 0;
// create function that increases playerScore/computerScore values by 1 on each win
function increasePlayerScore() {
    playerScore++;
}
function increaseComputerScore(){
    computerScore++;
}
//let computerWinsRound = increaseComputerScore();
//let playerWinsRound = increasePlayerScore();

// when either score reaches five display message you win
function currentScore() {
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}
currentScore();

let cScore = currentScore();



function playGame() {
    while(cScore < 5) {

    }
}