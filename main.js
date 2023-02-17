'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  let solutionArray = solution.split('');    //['a','b','c','d']
  let guessArray = guess.split('');         //['a','d','b','c']
  let correctLettersLocations = 0 ;         // how many correct "letter-locations" were guessed
  let correctLetters = 0 ;                  //  how many correct "letters" not in the correct location
// compare the values at each index with a for loop
for ( let i=0; i < solutionArray.length; i++) {

  if (solutionArray[i]=== guessArray[i]) {
    correctLettersLocations++; 
    solutionArray[i] = null;
  }
}
  // check for correct letters in the wrong location
for ( let i=0; i < solutionArray.length; i++) {
  // returns the first index at which a given 
  // elememt can be found in the array, or -1 if it is not present
  let targetIndex =  solutionArray.indexOf(guessArray[i])
  if(targetIndex > -1) {
    correctLetters++;
    solutionArray[targetIndex] = null;
  }
}
  console.log('You have' + correctLettersLocations + ' letters in the right place, and ' 
  + correctLetters + 'correct letters in the wrong place' )
  return correctLettersLocations + '-' + correctLetters;
}


const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
 let hint = generateHint(guess);
  
  // Place hint and guess together
  let guessHint = 'guess' + 'hint';

  // Place guess to the board 
  board.push(guessHint);
  if(guess === solution){ 
    console.log("You guessed it!");
    return 'You guessed it!';
  }else{ 
    return false;}
} 


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}