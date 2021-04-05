const btn = document.querySelector('.btn-toggle');

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    document.getElementById("rock").classList.toggle("dark-but");
    document.getElementById("paper").classList.toggle("dark-but");
    document.getElementById("scissors").classList.toggle("dark-but");
    document.getElementById("player-score").classList.toggle("dark-text");
    document.getElementById("comp-score").classList.toggle("dark-text");
    document.getElementById("output").classList.toggle("dark-text");
    
});

let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "Good luck!";

buttons.forEach((button)=>{button.addEventListener('click',()=>{
    
    playerChoice= button.id;
    compChoice = computerPlay();
    playGame();
})

})

function computerPlay(compChoice) {
    let choiceNum = (Math.floor(Math.random() * 3));

    if (choiceNum == 0) {
        compChoice = "rock";
    }

    else if (choiceNum == 1) {
        compChoice = "paper";
    }

    else if (choiceNum == 2) {
        compChoice = "scissors";
    }
    return compChoice;
}

function playRound() {
    if (playerChoice===compChoice) {
        output.textContent = `It's a tie! You chose ${playerChoice} and the computer chose ${compChoice}.`;
    }

    else if (playerChoice==='rock' && compChoice==='paper') {
        output.textContent = `YOU LOST! You chose ${playerChoice} and the computer chose ${compChoice}. haha..`;
        compScore++
    }
    
    else if (playerChoice==='rock' && compChoice==='scissors') {
        output.textContent = `YOU WON! You chose ${playerChoice} and the computer chose ${compChoice}.`;
        playerScore++
    }
    
    else if (playerChoice==='paper' && compChoice==='rock') {
        output.textContent = `YOU WON! You chose ${playerChoice} and the computer chose ${compChoice}.`;
        playerScore++
    }
    
    else if (playerChoice==='paper' && compChoice==='scissors') {
        output.textContent = `YOU LOST! You chose ${playerChoice} and the computer chose ${compChoice}. haha..`;
        compScore++
    }
    
    else if (playerChoice==='scissors' && compChoice==='rock') {
        output.textContent = `YOU LOST! You chose ${playerChoice} and the computer chose ${compChoice}. haha..`;
        compScore++
    }
    
    else if (playerChoice==='scissors' && compChoice==='paper') {
        output.textContent = `YOU WON! You chose ${playerChoice} and the computer chose ${compChoice}.`;
        playerScore++
        
    }
}

function playGame() {
    output.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;
    
    if (playerScore==5) {
        document.getElementById("output").innerHTML = '<span class= "green">YOU WON! </span>' + ` The score was ${playerScore} - ${compScore}.`
        
    }

    else if (compScore==5) {
        document.getElementById("output").innerHTML = '<span class= "red">YOU LOST! </span>' + ` The score was ${playerScore} - ${compScore}.`
    }

}