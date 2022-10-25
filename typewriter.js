const sentence = "hello there from lighthouse labs";
const sentenceWithNewLine = sentence + "\n"

let counter = 0;
for (const char of sentenceWithNewLine) {
    setTimeout(() => {
        process.stdout.write(char);
    }, counter) // <= 1s delay to make it noticeable. Can dial it down later
    counter += 50
}


