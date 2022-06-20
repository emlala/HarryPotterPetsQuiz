const questions = {
    1: "What is the name of Harry's owl?",
    2: "What is the name of Ron's rat?",
    3: "What is the name of Hermione's cat?",
    4: "What is the name of Hagrid's three headed dog?"
}

const answers = {
    1: "Hedwig",
    2: "Scabbers",
    3: "Crookshanks",
    4: "Fluffy"
}

console.log(questions[1])
console.log(answers[1])

process.stdout.write("Welcome to the Harry Potter Pet quiz! Press q to quit.\n")

let score = 0

while (true) {
    let input2 = userInput.toString().trim()
    if (input2 === "q") {
        process.stdout.write(`Thanks for playing!\n Here is your score: ${score}`)
        return
    }
}