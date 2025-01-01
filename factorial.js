function Factorial(n) {
    if (n < 0) {
        return "La factorielle n'est pas définie pour les nombres négatifs"
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(Factorial(6));