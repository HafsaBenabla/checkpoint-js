function CountCharacter(str) {
    let comp = 0;
    for (let i = 0; i < str.length; i++) {
        comp++;
    }
    return comp;
}

console.log(CountCharacter("Hello"));