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
let computerselection = getComputerChoice();
let playerselection = prompt("Choose among Rock/Paper/Scissors");
playerselection = playerselection[0].toUpperCase() + playerselection.slice(1);

function playRound(computerselection,playerselection){
    if(computerselection === playerselection){
        alert('Tie');
    }
    else if(computerselection == 'Rock' && playerselection == 'Paper'){
        alert("You Win, Paper beats Rock");
    }
    else if(computerselection == 'Paper' && playerselection=='Scissors'){
        alert("You Win, Scissors beats Paper");
    }
    else if(computerselection == 'Scissors' && playerselection == 'Rock'){
        alert("You win, Rock beats Scissors");
    }
    else{
        alert(`You lose "${computerselection} beats ${playerselection}"`);
    }

}

function game(){
    for(let i =0;i<5;i++){
    playRound(computerselection,playerselection);
}
}
game();