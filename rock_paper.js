
// function to pick random choice between rock, paper, scissors.
function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
};

function playerSelection() {
    let playerChoice = prompt("what do you choose?").toLocaleLowerCase();
    return playerChoice.toLocaleLowerCase()
};
let computerSelection = getComputerChoice();
let playerChoice = playerSelection();

// make 2 variables for keeping track of player score and computer score

let playerScore = 0;
let computerScore = 0;

// create function that increases playerScore/computerScore values by 1 on each win

//function increasePlayerScore() {
    //playerScore++;
//}
//function increaseComputerScore() {
   //computerScore++;
//}
let computerWinsRound;
let playerWinsRound;

function scoreUpPlayer() {
    if(playerWinsRound) {
    return playerScore+= 1;
    }

}
function scoreUpComputer() {
    if(computerWinsRound) {
        return computerScore+= 1;
     } 
}
//let scoreUpC = scoreUpComputer();
//let scoreUpP = scoreUpPlayer();


function playRound(computerSelection, playerChoice){
    const result = checkWinner(playerChoice, computerSelection);
    if(computerSelection === 'rock' && playerChoice === 'scissors') {
     return (console.log('You Loose! rock beats Scissors') && scoreUpComputer());

    } else if(computerSelection === 'rock' && playerChoice === 'paper') {
        return (console.log("You Win! paper beats rock") && scoreUpPlayer());

    } else if (computerSelection === 'paper' && playerChoice === 'rock') {
        return (console.log("You loose! paper beats rock") && scoreUpComputer());

    } else if(computerSelection === 'paper' && playerChoice === 'scissors') {
        return(console.log("You Win! scissors beats paper") && scoreUpPlayer());

    } else if (computerSelection === 'scissors' && playerChoice === 'rock') {
       return (console.log("You loose! scissors beats paper") && scoreUpComputer());

    } else if(computerSelection === 'scissors' && playerChoice === 'scissors') {
        return (console.log("You Win! rock beats Scissors") && scoreUpPlayer());

    } else { console.log("It's a tie");
} 
    
};

//check who the winner is 
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

playRound(computerSelection, playerChoice);
function currentScore() {
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}
currentScore();


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