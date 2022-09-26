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
        return "You lose, " + computerSelection + " beats " + playerChoice;
    } else if (playerChoice == 'rock' && computerSelection == 'scissors'){
        return "You win, " + playerChoice + " beats " + computerSelection;
    } else if (playerChoice == 'paper' && computerSelection == 'scissors'){
        return "You lose, " + computerSelection + " beats " + playerChoice;
    } else if (playerChoice == 'paper' && computerSelection == 'rock'){
        return "You win, " + playerChoice + " beats " + computerSelection;
    } else if (playerChoice == 'scissors' && computerSelection == 'rock'){
        return "You lose, " + computerSelection + " beats " + playerChoice;
    } else if (playerChoice == 'scissors' && computerSelection == 'paper'){
        return "You win, " + playerChoice + " beats " + computerSelection;
    }
}

console.log(playRound('paper',getComputerChoice()))
