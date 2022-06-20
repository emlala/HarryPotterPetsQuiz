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

let game = (input) => {
  process.stdout.write("> Let's play! To exit the game press q\n");
  process.stdout.write(questions[1]);
  if (input === "q") {
    process.stdout.write(`Thanks for playing!\nHere is your score: ${score}`);
    process.exit();
  }

  if (input === answers[1]) {
    score++;
    process.stdout.write("> Correct!\n");
    process.exit();
  }
};

let play = (userInput) => {
  let input = userInput.toString().trim();

  if (input === "no") {
    process.stdout.write("> Game over!\n");
    process.exit();
  } else {
    game(input);
  }
};

// starting the game
process.stdout.write(
  "Welcome to the Harry Potter Pet quiz! \nDo you want to play? Write 'yes' or 'no'\n"
);

process.stdin.on("data", play);
