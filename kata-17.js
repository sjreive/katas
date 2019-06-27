const getRandomNumber = function() {
  return Math.ceil(Math.random() * 10);
};

let randomNum = getRandomNumber();

let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = "";
let guesses = [];
do {
  answer = prompt("Guess a number between 1 and 10: ");
  answer = parseInt(answer);
  for (let guess of guesses) {
    if (guess === answer) {
      console.log("Already guessed!");
      break;
    }
  }
  guesses.push(answer);
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
  } else if (answer > randomNum) {
    console.log("Too High! Try again!");
  } else if (answer < randomNum) {
    console.log("Too Low! Try again!");
  } else {
    console.log(`You got it! You took ${guesses.length} attempts.`);
  }
}
while (answer !== randomNum);

