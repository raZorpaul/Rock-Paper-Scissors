const prompt = require("prompt-sync")({sigint:true});

function getComputerChoice() {

    let computerChoice = ['Rock', 'Paper','Scissors'];

    let number = Math.floor(Math.random() * 3);

    return computerChoice[number];

}


function playRound(playerSelection, getComputerChoice) {
    getComputerChoice = getComputerChoice.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == getComputerChoice) {
        console.log("Tie");
    } else if(playerSelection == "rock" && getComputerChoice == "paper") {
        console.log("You lose, paper beats rock");
    }
     else if(playerSelection == "rock" && getComputerChoice == "scissors") {
        console.log("You win, rock beats scissors");
     } else if(playerSelection == "paper" && getComputerChoice == "rock") {
        console.log("You win, paper beats rock");
     } else if(playerSelection == "paper" && getComputerChoice == "scissors") {
        console.log("You lose, scissors beats paper");
     } else if(playerSelection == "scissors" && getComputerChoice == "rock") {
        console.log("You lose, rock beats scissors");
     } else if(playerSelection == "scissors" && getComputerChoice == "paper") {
        console.log("You win, scissors beats paper");
     } else {
        console.log("Error");
     }
}


let playerSelection = prompt("Enter Rock,Paper or Scissors ");
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

