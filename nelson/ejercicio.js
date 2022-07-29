let noparar = true                      // se declara y se inicializa variable
let contador = 0                        // se declara y se inicializa variable
for (let j = 2; noparar; j++) {         // bucle for que incrementa cada vez que noparar en true
    let i = 2                           // se declara y se inicializa variable para bucle for anidado
    let primos = true                   // se declara y se inicializa variable en true para comprar cada numero que ingresa al bucle
    for (i; i < j; i++) {               // bucle for anidado para ir incrementando el valor de cada divizor de j
        if (j % i == 0) {               // condicional para comprobar si j es modulo exacto de i y determinar si no es numero primo
            primos = false              // si se cumple el condicional la variable primos es false ya j no es primo y sale del bucle for anidado
        }                               // se cierra condicional if
    }                                   // se cierra bucle for anidado
    if (primos) {                       // si numero j salio del condicional if anteror quiere decir que j si es primo y entra en este condicional
        console.log(j)                  // se imprime j (numero primo encontrado)
        contador += 1                   // variable contador incrementara su valor en una unidad cada vez que se encuentre un numero primo
    } if (contador == 100) {            // se declara condicional para comprovar si contador contador es igual a 100
        noparar = false                 // se cumplira que no parar es false cuando contador sea igual a 100
    }                                   // se cierra condicional if para contador
}                                       // se cierra bucle for principal


/**
 * Retroalimentación:
 * Muy bien! Excelente trabajo 10/10
 */