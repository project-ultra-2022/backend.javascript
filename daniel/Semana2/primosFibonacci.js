let noparar = true;
let contador = 0;
let num1 = 1
let num2 = 1
let fibonacciPrimos = [];

for (let j = 2; noparar; j++) {
    try {
        let num3 = num1 + num2
        num1 = num2
        num2 = num3
        for (let i = 2; i < j; i++) {
            if (j % i === 0) throw false;
        }
        console.log("primo", j)
        console.log("fibo", num3)

        if(num3 == j){
            contador++;
            fibonacciPrimos.push(j);
            if (contador == 2) noparar = false;
        }
    } catch(e){}
}

console.log("Resultado: ", fibonacciPrimos.join(', '))