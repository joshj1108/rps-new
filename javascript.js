//create function to randomize computerChoice
function getComputerChoice(){
    const choiceArr = [1, 2, 3]
    const choiceRandom = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    switch (choiceRandom){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

//single round of RPS
function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == computerSelection){
        return "Tie"
    } else if (playerChoice == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return "You lose, " + computerSelection + " beats " + playerChoice;
    } else if (playerChoice == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return "You win, " + playerChoice + " beats " + computerSelection;
    } else if (playerChoice == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return "You lose, " + computerSelection + " beats " + playerChoice;
    } else if (playerChoice == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return "You win, " + playerChoice + " beats " + computerSelection;
    } else if (playerChoice == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return "You lose, " + computerSelection + " beats " + playerChoice;
    } else if (playerChoice == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return "You win, " + playerChoice + " beats " + computerSelection;
    } else if (playerChoice !== 'rock' || 'paper' || 'scissors'){
        return "You can't use that weapon, choose again"
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt("Rock, Paper or Scissors? ")

function game(){
    for (let i = 0; i < 5; i++){
        playRound(playerSelection,getComputerChoice())
    }

    if (playerScore > computerScore){
        return "Congratulations, you win"
    } else if (playerScore < computerScore){
        return "You lost, better luck next time"
    } else if (playerScore == computerScore){
        return "Tie game"
    }
}


console.log(game());
console.log(computerScore);
console.log(playerScore);


