//
//declare a function to get a random choice from the computer
function getComputerChoice () {
    let randomNum = Math.floor(Math.random()*3);  //get random number
    let computerSelection;
    switch (randomNum) {   //applying a value depending of random number
        case 0: 
            computerSelection = "ROCK";
            break;
        case 1:
            computerSelection = "PAPER";
            break;
        case 2:
            computerSelection = "SCISSORS";
            break;
    }
    return computerSelection;
}

//function asking user to insert an option 
function userSelection () {
    let selection = window.prompt("Let's play, what do you choose?");
    selection = selection.toUpperCase();
    return selection;
}

//compare both options to see who is the winner
function playRound (playerSelection, computerSelection) { 
    playerSelection = userSelection(); 
    computerSelection = getComputerChoice();
    console.log("User input is: " + playerSelection);
    console.log("Computer selection is: "+ computerSelection);
    let gameState;
    switch (playerSelection) {
        case "PAPER":
            if (computerSelection === "PAPER") {
                console.log("Nobody won, good luck next time!!");
                return gameState = "tie"
            } else if (computerSelection === "ROCK") {
                console.log("Paper beats rock, you WON!!");
                return gameState = "won";
            } else if (computerSelection === "SCISSORS") {
                console.log("Scissors beats paper, you LOSE!!");
                return gameState = "lose";
            } 
            break;
        case "ROCK":
            if (computerSelection === "PAPER") {
                console.log("Paper beats rock, you LOSE!!");
                return gameState = "lose";
            } else if (computerSelection === "ROCK") {
                console.log("Nobody won, good luck next time!!");
                return gameState = "tie"
            } else if (computerSelection === "SCISSORS") {
                console.log("Rock beats scissors, you WON!!");
                return gameState = "won";
            }
            break;
        case "SCISSORS":
            if (computerSelection === "PAPER") {
                console.log("Scissors beats paper, you WON!!");
                return gameState = "won";
            } else if (computerSelection === "ROCK") {
                console.log("Rock beats scissors, you LOSE!!");
                return gameState = "lose";
            } else if (computerSelection === "SCISSORS") {
                console.log("Nobody won, good luck next time!!");
                return gameState = "tie"
            } 
            break;
    }
}

//play the game 5 times recording a score
function game () {
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 1; i <= 3; i++) {
        console.log("Let's play!")
        switch (playRound()) {
            case "won":
                win ++;
                break;
            case "lose":
                lose++;
                break;
            case "tie":
                tie++;
                break;
        }
    }
    console.log("You won "+ win + " times" )
    console.log("You lost "+ lose + " times" )
    console.log("You tied "+ tie + " times" )
}