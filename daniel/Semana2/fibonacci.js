let num1 = 1
let num2 = 1
let fibonacci = [];

for (let i = 0; i < 98; i++) {
    let num3 = num1 + num2
    fibonacci.push(num3)
    num1 = num2
    num2 = num3
}

console.log("Los primeros 100 números de la secuencia de fibonacci son: ", fibonacci.join(', '))