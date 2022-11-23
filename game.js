function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice ==0){
        return 'Rock';
    }
    else if(choice == 1){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}
let playerwin = 0;
let compwin = 0;
function playRound(computerselection,playerselection){
    if(computerselection === playerselection){
        playerwin++;
        compwin++;
        alert(`Tie\n player: ${playerwin}        computer: ${compwin}`);
    }
    else if(computerselection == 'Rock' && playerselection == 'Paper'){
        playerwin++;
        alert(`You Win, Paper beats Rock\n player: ${playerwin}        computer: ${compwin}`);
    }
    else if(computerselection == 'Paper' && playerselection=='Scissors'){
        playerwin++;
        alert(`You Win, Scissors beats Paper\n player: ${playerwin}        computer: ${compwin}`);
    }
    else if(computerselection == 'Scissors' && playerselection == 'Rock'){
        playerwin++;
        alert(`You win, Rock beats Scissors\n player: ${playerwin}        computer: ${compwin}`);
    }
    else{
        compwin++;
        alert(`You lose ${computerselection} beats ${playerselection}\n player ${playerwin}        computer: ${compwin}`);
    }

}

function game(){
    for(let i =0;i<5;i++){
    let computerselection = getComputerChoice();
    let playerselection = prompt("Rock/Paper/Scissors");
    let plchoice = playerselection[0].toUpperCase() + playerselection.slice(1);;
    playRound(computerselection,plchoice);
}
if(compwin < playerwin)
    alert("You win");
else{
    alert("You lose");
}
}
game();