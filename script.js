process.stdout.write("Welcome to the Harry Potter Pet quiz!");

var score = 0

while (true) {
    let input = userInput.toString().trim()
    if (input === "q") {
        process.stdout.write(`Thanks for playing!\n Here is your score: ${score}`)
        return
    }
}
