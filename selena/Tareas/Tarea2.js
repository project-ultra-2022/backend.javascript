/*let noparar = true;
let contador = 0;
for (let j = 2; noparar; j++) {
    let esPrimo = true;
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {

            esPrimo = false
        }
    }
    if (esPrimo){
        console.log(j)
    contador = contador + 1
    if (contador == 100) {
        noparar = false
    }
}
}
*/
let num1 = 1
let num2 = 1
for (let j = 0; j <= 100; j++) {
    let result = num1 + num2
    console.log(result)
    num1= num2
    num2 = result
}

