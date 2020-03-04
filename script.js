// Start game.
const game = document.querySelector('.container');  
const startBtn = document.querySelector('#start-game');    
const rules = document.querySelector('.rules');

startBtn.addEventListener('click', () => {
  let playerName = prompt('Please enter your name');
  game.classList.toggle('hidden');
  startBtn.classList.toggle('hidden');
  resetBtn.classList.toggle('hidden');
  rules.classList.add('hidden');
  result.innerText = '';
  result.classList.add('hidden');
  score.player = 0;
  score.computer = 0;
  document.getElementById('name').innerText = playerName; 
  document.getElementById('user-score').innerText = 0;
  document.getElementById('computer-score').innerText = 0;
  document.getElementById('commentary').innerText = 'Make your selection!';      
});

// Reset game.
const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', () => {
  score.player = 0;
  score.computer = 0;
  document.getElementById('user-score').innerText = 0;
  document.getElementById('computer-score').innerText = 0;
  document.getElementById('commentary').innerText = 'Game reset. Make your selection!';    
});

  

// Generates a random selection for the computer.
let possibleChoice = [
  'Rock', 
  'Paper', 
  'Scissors'
]  

function computerPlay() {
  return possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
}

// Player choices.
const userRockBtn = document.querySelector('.rock');
userRockBtn.addEventListener('click', () => {
  let playerSelection = "Rock";
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

const userPaperBtn = document.querySelector('.paper');
userPaperBtn.addEventListener('click', () => {
  let playerSelection = "Paper";
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

const userScissorsBtn = document.querySelector('.scissors');
userScissorsBtn.addEventListener('click', () => {
  let playerSelection = "Scissors";
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});



// Counts the scores
let score = {
  player: 0,
  computer: 0
}

const result = document.querySelector('.result');
function updateScore(name) {
  score[name] += 1;
  if (score.player == 5 || score.computer == 5) {
    game.classList.toggle('hidden');
    result.classList.toggle('hidden');
    startBtn.classList.toggle('hidden');
    resetBtn.classList.toggle('hidden');
    const resultText = document.createElement('p');
    if (score.player > score.computer) {
    resultText.textContent = 'Congrats! You won the game.';
    result.appendChild(resultText); 
    } else {
      resultText.textContent = 'Sorry you lost the game :( Better luck next time!';
      result.appendChild(resultText); 
    }
  }
}


// A single round.
function playRound(playerSelection, computerSelection) {     
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    document.getElementById('commentary').innerText = `Draw, you both selected ${playerSelection}`;        
  } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection.toLowerCase() == 'paper')) {
    updateScore('computer');
    document.getElementById('computer-score').innerText = score['computer'];
    document.getElementById('commentary').innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`; 
  } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection.toLowerCase() == 'scissors')) {
    updateScore('player');
    document.getElementById('user-score').innerText = score['player'];
    document.getElementById('commentary').innerText = `You win this round! ${playerSelection} beats ${computerSelection}`;
  } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection.toLowerCase() == 'scissors')) {
    updateScore('computer');
    document.getElementById('computer-score').innerText = score['computer'];
    document.getElementById('commentary').innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`; 
  } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection.toLowerCase() == 'rock')) {
    updateScore('player');
    document.getElementById('user-score').innerText = score['player'];
    document.getElementById('commentary').innerText = `You win this round! ${playerSelection} beats ${computerSelection}`; 
  } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection.toLowerCase() == 'rock')) {
    updateScore('computer');
    document.getElementById('computer-score').innerText = score['computer'];
    document.getElementById('commentary').innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`; 
  } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection.toLowerCase() == 'paper')) {
    updateScore('player');
    document.getElementById('user-score').innerText = score['player'];
    document.getElementById('commentary').innerText = `You win this round! ${playerSelection} beats ${computerSelection}`; 
  }
}