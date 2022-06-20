"use strict";
const questions = {
  1: "What is the name of Harry's owl?",
  2: "What is the name of Ron's rat?",
  3: "What is the name of Hermione's cat?",
  4: "What is the name of Hagrid's three headed dog?",
};

const answers = {
  1: "Hedwig",
  2: "Scabbers",
  3: "Crookshanks",
  4: "Fluffy",
};

let score = 0;

let play = (userInput) => {
    let input = userInput.toString().trim();
    game(input);
  };

let game = (input) => {
  if (input === "q") {
    process.stdout.write(`Thanks for playing!\nHere is your score: ${score}`);
    process.exit();
  } else {
    process.stdout.write(questions[1]);
    if (input === answers[1]) {
      score++;
      process.stdout.write("> Correct!\n");
      process.exit();
    }
  }
};

// starting the game
process.stdout.write(
  "Welcome to the Harry Potter Pet quiz! \nIf you want to play, press p. If not, press q.\n"
);

process.stdin.on("data", play);
