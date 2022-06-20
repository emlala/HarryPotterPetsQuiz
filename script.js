"use strict";

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
