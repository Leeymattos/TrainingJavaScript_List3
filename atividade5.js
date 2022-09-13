const prompt = require('prompt-sync')()

let sum = 0
let number = 0



do {
    number = parseInt(prompt('Digite um número qualquer: '))
    sum += number

} while (number != 0)

console.log(`A soma dos números digitados é: ${sum}`)