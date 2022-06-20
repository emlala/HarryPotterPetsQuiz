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

console.log(questions[1]);
console.log(answers[1]);

let game = (userInput) => {
  process.stdout.write("Welcome to the Harry Potter Pet quiz! \n");

  let score = 0;

  process.stdout.write("Do you want to play? Write 'yes' or 'no'");
  let input = userInput.toString().trim();

  if (input === "no") {
    process.stdout.write("> Game over!\n");
    process.exit();
  }

  if (input === "yes") {
    while (true) {
      let input = userInput.toString().trim();

      if (input === "q") {
        process.stdout.write(
          `Thanks for playing!\n Here is your score: ${score}`
        );
        process.exit();
      }
    }
  }
};

process.stdin.on("data", game);
