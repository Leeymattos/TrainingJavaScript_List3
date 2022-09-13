const prompt = require('prompt-sync')()

let countOdds = 0
let countEvens = 0
let number


for (let i = 0; i < 10; i++) {
    number = parseInt(prompt('Digite um número qualquer '))

    if (number % 2 == 0) {
        countEvens++
    } else {
        countOdds++
    }
}

console.log(`Quantidade de números pares foi: ${countEvens} e a quantidade de números impares foi: ${countOdds}`)