const prompt = require('prompt-sync')()

let count21 = 0
let count50 = 0

let age

do {
    age = parseInt(prompt('Diga qual é sua idade: '))

    if (age < 21) {
        count21++
    } else if (age > 50) {
        count50++
    }

} while (age != -99)

console.log(`A quantidade de pessoas com idade menor que 21 anos foi: ${count21}\n`)
console.log(`E a quantidade de pessoas com idade maiores que 50 anos foi de ${count50}\n`)