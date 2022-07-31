//Ejercicio 1

let num1 = 0
let num2 = 1
let num3
let contador = 0
let vecesqueserepite = 98
console.log(num1, num2)
for (contador; contador < vecesqueserepite; contador++) {
    num3 = num1 + num2
    num1 = num2
    num2 = num3
    console.log(num3)
}

/**
 * Retroalimentación 10/10
 * Excelente trabajo
 */