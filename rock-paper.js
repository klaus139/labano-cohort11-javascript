//lets play rock paper scissors
let playGame = confirm("shall we play a game of rock, paper, scissors");

if (playGame) {
  let playerChoice = prompt("please enter rock, paper or scissors");
  let playerOne = playerChoice.trim().toLowerCase();
  if (
    playerOne === "rock" ||
    playerOne === "paper" ||
    playerOne === "scissors"
  ) {
    //create a random computer choice
    let computerChoice = Math.floor(Math.random() * 3 + 1);


    let computer;

    if(computerChoice === 1){
        computer = "rock"
    }else if(computerChoice === 2){
        computer = "paper"
    }else{
        computer = "scissors"
    }
    let result;

    if(playerOne === computer){
        result = `computer chooses ${computer} its a tie`
    }else if(playerOne === "rock" && computer === "paper"){
        result = `computer chooses ${computer} paper covers rock, computer wins`
    }else if(playerOne === "paper" && computer === "scissors"){
        result = `computer chooses ${computer} scissors cuts paper, computer wins`
    }else if(playerOne === "scissors" && computer === "rock"){
        result = ` computer chooses ${computer} rock breaks scissors, computer wins`
    }else{
        result = `computer chooses ${computer} you win`
    }
    alert(result)
    let playAgain = confirm("would you like to play again?");
    if(playAgain){
        location.reload();
    }else{
        alert("ok, thanks for playing")
    }

} else {
  alert("ok, maybe next time");
}
}

//guessing game the user will pick a value from 1 - 10 
//the computer will pick a value from 1 - 10, 
//if the user gets the same value the user wins else 
//the computer wins
