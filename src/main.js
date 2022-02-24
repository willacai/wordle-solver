const fs = require('fs');
const { exit } = require('process');

let found = false;
let validWords = [];
let answer = '';

// imports the word list and chooses an answer. Future improvement: WithCache
async function importWords() {
  // TODO
  // var wordsFile = '../assets/5-letter-words.txt';
  // var fs;
  // try {
  //     if(fs.access(wordsFile)){
  //         validWords = fs.readFile(wordsFile).split('/r/n\n/');
  //     }
  // } catch (error) {
  //     console.log('Couldn\'t open file!');
  //     exit;
  // }

  // dummy variable
  validWords = [
    'there',
    'their',
    'trays',
    'claps',
    'super',
    'troop',
    'hoist',
    'black',
  ];
  var pos = Math.random() * validWords.length;
  answer = validWords.at(pos);
  console.log('answer is: %s', answer);
}

function match(guessPos, answer) {
  let guess = validWords.at(guessPos);
  console.log("guessing '%s'...", guess);

  if (guess == answer) {
    console.log("congratulations! you guessed the answer, '%s'", guess);
    return true;
  }

  // remove guess from list
  validWords.splice(guessPos, 1);
  return false;
}

function solve(ans) {
  while (!found) {
    found = match(Math.random() * validWords.length, answer);
  }
}

//////////// MAIN ////////////
importWords();
solve(answer);
