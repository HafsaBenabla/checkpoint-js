function capitalWords(sentence) {
    let result = "";
    let capital = true;

    for (let i = 0; i < sentence.length; i++) {
        if (capital && sentence[i] !== ' ') {
            result += sentence[i].toUpperCase();
            capital = false;
        } else {
            result += sentence[i];
        }

        if (sentence[i] === ' ') {
            capital = true;
        }
    }

    return result;
}

console.log(capitalWords("hello hafsa benabla"));
