const words = [
  "Programmering",
  "Stockholm",
  "Studenter",
  "Javascript",
  "Afterwork",
];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let chosenWordHigh = chosenWord.toUpperCase();

let lives = 5;
let rightGuesses = chosenWord.length;
let hiddenWord = chosenWord.split("");
let guessMade = [];

function secretWord() {
  for (let i = 0; i < chosenWord.length; i++) {
    hiddenWord[i] = "_";
  }
}

secretWord();
console.log(chosenWord); 

do {
  let guessInput = prompt(`${hiddenWord.join(" ")}\n Lives left: ${lives}\n Guesses made: ${guessMade}`);

  if (guessInput === null) {
    alert("You have canceled");
    break;
  }
  guessInput = guessInput.toUpperCase();

  if (!guessInput.search(/[^a-zA-Z]+/) || guessInput.length !== 1) {
    alert("You have to use a single letter between a-z !");
  } else if (chosenWordHigh.includes(guessInput)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (guessInput === chosenWordHigh[i]) {
        hiddenWord[i] = chosenWord[i];
        rightGuesses--;
      }
    }
  } else {
    lives--;
  }

  if (guessInput.search(/[^a-zA-Z]+/)) {
    if (!chosenWordHigh.includes(guessInput)) {
      guessMade.push(guessInput.toLowerCase());
    }
  }

  if (lives === 0) {
    alert(`You have lost! The correct word was ${chosenWord} `);
  } else if (hiddenWord.join("") === chosenWord) {
    alert("You have won, congratulations!");
  }
} while (lives > 0 && rightGuesses > 0);

