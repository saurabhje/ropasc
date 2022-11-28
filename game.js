
const result = document.querySelector('.result');
const tempresult = document.querySelector('.tempresult');
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerchoice = document.querySelector('button');
let playerwin = 0;
let compwin = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function playRound(computerselection, playerselection) {
      if (computerselection === playerselection) {
        playerwin++;
        compwin++;
        tempresult.textContent = `Tie  player: ${playerwin}        computer: ${compwin}`;
    } else if (computerselection == 'Rock' && playerselection == 'Paper') {
            playerwin++;
            tempresult.textContent = `You Win, Paper beats Rock\n player: ${playerwin}        computer: ${compwin}`;

    } else if (computerselection == 'Paper' && playerselection == 'Scissors') {
            playerwin++;
            tempresult.textContent = `You Win, Scissors beats Paper\n player: ${playerwin}        computer: ${compwin}`;

    } else if (computerselection == 'Scissors' && playerselection == 'Rock') {
            playerwin++;
            tempresult.textContent = `You Win, Rock beats scissors\n player: ${playerwin}        computer: ${compwin}`;
        }

     else {
        compwin++;
        tempresult.textContent = `You Lose,${computerselection} beats ${playerselection} player: ${playerwin}        computer: ${compwin}`;
    }

    if(playerwin ==5 && compwin ==5){
        result.textContent = "-----------Tie---------------";
    }
    else if(playerwin ==5){
        result.textContent = "-----------You win--------------";
    }
    else if(compwin ==5){
        result.textContent = "-----------You lose-------------";
    }
}



rock.addEventListener("click", () => {
    if (playerwin < 5 && compwin < 5) {
        playRound(getComputerChoice(), "Rock");
    }
});
paper.addEventListener("click", () => {
    if (playerwin < 5 && compwin < 5) {
        playRound(getComputerChoice(), "Paper");
    }
});
scissor.addEventListener("click", () => {
    if (playerwin < 5 && compwin < 5) {
        playRound(getComputerChoice(), "Scissors");
    }
});

