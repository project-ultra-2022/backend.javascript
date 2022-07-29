let noparar = true;
let contador = 0;
for (let j = 2; noparar; j++) {
    let esPrimo = true
    for (let i = 2; i < j; i++) {
        if (j % i === 0){
            esPrimo = false;
            break;
        }
    }
    if (esPrimo){
        console.log(j)
        contador++;
        if (contador == 100) {
            noparar = false;
        }
    }
}