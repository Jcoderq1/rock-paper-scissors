
// function to pick random choice between rock, paper, scissors.
function getComputerChoice() {
    const choices = ['rock','paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
};


//let computerSelection = getComputerChoice();
//let playerSelection = prompt("please choose rock, paper, scissors");
function playerSelection() {
    let playerChoice = prompt("what do you choose?")
    return playerChoice.toLocaleLowerCase()
};
let computerSelection = getComputerChoice();
let playerChoice = playerSelection();

function playRound(computerSelection, playerChoice){
    if(computerSelection === 'rock' && playerChoice === 'Scissors') {
     console.log('You Loose! rock beats Scissors');
    } else if(computerSelection === 'rock' && playerChoice === 'paper') {
        console.log("You Win! paper beats rock");
    } else if (computerSelection === 'rock' && playerChoice === 'rock') {
        console.log("It's a Tie!");
    } else if (computerSelection === 'paper' && playerChoice === 'rock') {
        console.log("You loose! paper beats rock");
    } else if(computerSelection === 'paper' && playerChoice === 'Scissors') {
        console.log("You Win! Scissors beats paper");
    } else if (computerSelection === 'paper' && playerChoice === 'paper') {
        console.log("It's a Tie!");
    } else if (computerSelection === 'Scissors' && playerChoice === 'rock') {
        console.log("You loose! scissors beats paper");
    } else if(computerSelection === 'Scissors' && playerChoice === 'Scissors') {
        console.log("You Win! rock beats Scissors");
    } else { (computerSelection === 'Scissors' && playerChoice === 'paper')
        console.log("It's a Tie!");
} 
};
playRound(computerSelection, playerChoice);
