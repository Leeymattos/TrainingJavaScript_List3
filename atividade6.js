const prompt = require('prompt-sync')()

let sum = 0
let number = 0
let count = 0



do {
    number = parseInt(prompt('Digite um número qualquer: '))

    if (number % 3 == 0) {
        sum += number
        if (number == 0) {
            break;
        }
        count++
    }


} while (number != 0)

console.log(`A média dos números digitados é : ${sum / count}`)