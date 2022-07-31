let noparar = true;
let contador = 0;
let primos = [];
let sizeCoincidences = 50000;
for (let j = 2; noparar; j++) {
    try {
        for (let i = 2; i < j; i++) {
            if (j % i === 0) throw false;
        }
        primos.push(j);
        contador++;
        if (contador == sizeCoincidences) noparar = false;
    } catch(e){}
}

let num1 = 1
let num2 = 1
let fibonacci = [];

for (let i = 0; i < sizeCoincidences; i++) {
    let num3 = num1 + num2
    fibonacci.push(num3)
    num1 = num2
    num2 = num3
}

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo));

console.log(result)