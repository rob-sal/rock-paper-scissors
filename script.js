function getComputerChoice () {
    let randomNum = Math.floor(Math.random()*3);  //get random number
    let computerSelection;
    switch (randomNum) {   
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

let info = document.querySelector('.info');
let results = document.querySelector('.results');

let playerScore = document.querySelector('.playerScore');
let playerSelection = document.querySelector('.playerSelection');
let computerScore = document.querySelector('.computerScore');
let computerSelection = document.querySelector('.computerSelection');

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissor = document.querySelector('#scissor');

btnPaper.addEventListener('click', () => btnClick('PAPER'));
btnRock.addEventListener('click', () => btnClick('ROCK'));
btnScissor.addEventListener('click', () => btnClick('SCISSORS'));

function btnClick (selection) {
    playRound (selection, getComputerChoice());
}

function playRound (playerChoice, computerChoice) { 
    console.log(playerChoice)
    console.log(computerChoice)
    switch (playerChoice) {
        case "PAPER":
            playerSelection.textContent = ("✋");
            if (computerChoice === "ROCK") {
                info.textContent = ("You WON!!");
                results.textContent = ("PAPER BEATS ROCK");
                computerSelection.textContent = ("👊");
                playerScore.textContent = parseInt(playerScore.textContent) +1 ;
            } else if (computerChoice === "SCISSORS") {
                info.textContent = ("You LOSE!!");
                results.textContent = ("SCISSORS BEATS PAPER");
                computerSelection.textContent = ("✌");
                computerScore.textContent = parseInt(computerScore.textContent) +1;
            } else {
                info.textContent = ("You Tied");
                results.textContent = ("Nobody won, good luck next time!!");
                computerSelection.textContent = ("✋");
            }
            break;
        case "ROCK":
            playerSelection.textContent = ("👊");
            if (computerChoice === "SCISSORS") {
                info.textContent = ("You WON!!");
                results.textContent = ("ROCK BEATS SCISSORS");
                computerSelection.textContent = ("✌");
                playerScore.textContent = parseInt(playerScore.textContent) +1 ;
            } else if (computerChoice === "PAPER") {
                info.textContent = ("You LOSE!!");
                results.textContent = ("PAPER BEATS ROCK");
                computerSelection.textContent = ("✋");
                computerScore.textContent = parseInt(computerScore.textContent) +1;
            } else {
                info.textContent = ("You Tied");
                results.textContent = ("Nobody won, good luck next time!!");
                computerSelection.textContent = ("👊");
            } 
            break;
        case "SCISSORS":
            playerSelection.textContent = ("✌");
            if (computerChoice === "PAPER") {
                info.textContent = ("You WON!!");
                results.textContent = ("SCISSORS BEATS PAPER");
                computerSelection.textContent = ("✋");
                playerScore.textContent = parseInt(playerScore.textContent) +1 ;
            } else if (computerChoice === "ROCK") {
                info.textContent = ("You LOSE!!");
                results.textContent = ("ROCK BEATS SCISSORS");
                computerSelection.textContent = ("👊");
                computerScore.textContent = parseInt(computerScore.textContent) +1;
            } else {
                info.textContent = ("You Tied");
                results.textContent = ("Nobody won, good luck next time!!");
                computerSelection.textContent = ("✌");
            } 
            break;
    }
    info.style.cssText = ("");
    results.style.cssText = ("");
    checkWinner();
}

function checkWinner () {
    if (parseInt(playerScore.textContent) === 5 ) {
        results.textContent = ("YOU WIN!! YOU SCORED 5 POINTS 👍");
        restart();
    }
    if (parseInt(computerScore.textContent) === 5 ) {
        results.textContent = ("YOU LOSE!! COMPUTER SCORED 5 POINTS 👎");
        restart ();
    }
}

function restart () {
    playerSelection.textContent = "🥊";
    computerSelection.textContent = "🥊";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    info.textContent = ("LET'S PLAY AGAIN! 💪");
    info.style.cssText = ("border-radius: 25px; background-color: midnightblue");
    results.style.cssText = ("border-radius: 25px; background-color: darkslategrey");

}