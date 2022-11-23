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
    return alert;

}

function game(){
    for(let i =0;i<5;i++){
    let computerselection = getComputerChoice();
    let playerselection = prompt("Rock/Paper/Scissor");
    let plchoice = playerselection[0].toUpperCase() + playerselection.slice(1);;
    playRound(computerselection,plchoice);
}
}
game();