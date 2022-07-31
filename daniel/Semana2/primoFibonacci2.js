let noparar = true;
let primos = [];
let sizeCoincidences = 150000;
for (let j = 2; noparar; j++) {
    try {
        for (let i = 2; i < j; i++) {
            if (j % i === 0) throw false;
        }
        primos.push(j);
        if(primos.length == sizeCoincidences) noparar = false;
    } catch(e){}
}

let num1 = 1
let num2 = 1
let fibonacci = [];
noparar = true;
for (let i = 0; noparar; i++) {
    let num3 = num1 + num2
    fibonacci.push(num3)
    if(fibonacci.length == sizeCoincidences) noparar = false
    num1 = num2
    num2 = num3
}

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo));

console.log(result)