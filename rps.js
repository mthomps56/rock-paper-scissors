function getComputerChoice() {
  let compChoice;
  
  //Get 0, 1, or 2 and convert to Computer's choice.
  let convertChoice = Math.floor(Math.random() * 3);
  
  switch (convertChoice) {
    case 0:
      compChoice = 'rock';
      break;
    case 1:
      compChoice = 'paper';
      break;
    case 2:
      compChoice = 'scissors';
      break;
  }
  return compChoice;
}

function getHumanChoice() {
  let flag = true;  //Keep while loop going until rock, paper, or scissors chosen.
  let humanChoice;
  while (flag === true) {
    humanChoice = prompt("Player, type rock, paper, or scissors and press [Enter].");
    humanChoice = humanChoice.toLowerCase();  //convert input to lowercase.

    //Check for proper input
    if (humanChoice === 'rock') {
      flag = false;
    } else if (humanChoice === 'paper') {
      flag = false;
    } else if (humanChoice === 'scissors') {
      flag = false;
    } else {
      alert("Must choose rock, paper, or scissors");
    }
  }
  return humanChoice;
}

//Capitalize the choices for beauty's sake.
function toTitleCase(titled) {
  let capStart = titled[0].toUpperCase();
  titled = capStart + titled.slice(1).toLowerCase();
  return titled;
}

function playRound(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === 'paper') {
    switch (computerChoice) {
      case 'paper':
        winner = 'tie';
        break;
      case 'rock':
        winner = 'player';
        break;
      case 'scissors':
        winner = 'computer'
        break;
    }
  } else if (humanChoice === 'rock') {
    switch (computerChoice) {
      case 'rock':
        winner = 'tie';
        break;
      case 'paper':
        winner = 'computer';
        break;
      case 'scissors':
        winner = 'player';
        break;
    }
  } else if (humanChoice === 'scissors') {
    switch (computerChoice) {
      case 'scissors':
        winner = 'tie';
        break;
      case 'rock':
        winner = 'computer';
        break;
      case 'paper':
        winner = 'player';
        break;
    }
  }
  return winner;
}


// Initialize and start the game.
let winner;
let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

let counter = 0;
// Main game loop.
while (counter < 5) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  winner = playRound(humanChoice, computerChoice);

  if(winner === 'player') {
    humanScore += 1;
    alert(`${toTitleCase(humanChoice)} beats ${toTitleCase(computerChoice)}!\n\n>>>You Win!<<<`);
  } else if (winner === 'computer') {
    computerScore += 1;
    alert(`${toTitleCase(computerChoice)} beats ${toTitleCase(humanChoice)}!\n\n>>>You Lose!<<<`);
  } else { // Result is a tie.
    alert(`This round was a ${toTitleCase(winner)}!\n\n`);
  }
  counter += 1;
  alert(`Player Score: [${humanScore}]\nComputer Score: [${computerScore}]`);
}

// Show final outcome.
humanScore > computerScore ? alert(`You beat the computer ${humanScore} to ${computerScore}`)
                           : computerScore > humanScore ? alert(`The Computer wins ${computerScore} to ${humanScore}`)
                           : alert('The game ends in a Tie');
