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
    if (playerSelection == computerSelection){
        return "Tie"
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return "You lose, " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return "You win, " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You lose, " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return "You win, " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You lose, " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return "You win, " + playerSelection + " beats " + computerSelection;
    }
}



console.log(playRound('paper',getComputerChoice()))
