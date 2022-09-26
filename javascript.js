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

console.log(getComputerChoice())