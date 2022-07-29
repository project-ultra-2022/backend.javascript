/*ambito es lo que está dentro de la función, condicional, bucles, etc.,lo que está dentro de la sentencia en donde la creemos,
dentro de la sentencia. Las variables Let ocupan menos espacion porque funcionan solo dentro
de la sentencia*/
/*
let num1 = 85
let num2 = 8
let num3 = 5
let num4 = 8
*/
/*
== comparación si son iguales
< menor que
> mayor que
!= negación. Diferente de
>= mayor o igual
<= menor o igual
 && si se cumple esta condición Y esta otra
 || si se cumple esta condición O esta otra
*/

/*Sentencia if, ejemplo
if (!num1 == num2 || num3 > num4) {
    console.log('entré al doble condicional')
}else{
    console.log('no entré al doble condicional')
}else if{
    console.log('otro caso')
}
*/
/*
switch (num1){
    case 5: console.log("i'm 5")
    break;
    case 8: console.log('im 8')
    break;
    default: console.log('soy Marco')

}
*/

let jugador1 = {
    name: 'Messi',
    age: 34,
    teamName: 'PSG',
    level: 10,
    nickName: 'La pulga',
    trophies: 7,
    champions: 4,
    goldenBoats: 6,
    goals: 766,
    tournamentsAmount: 30

}
let jugador2 = {
    name: 'Cristiano Ronaldo',
    age: 36,
    teamName: 'Manchester United',
    level: 9,
    nickName: 'El bicho',
    trophies: 5,
    champions: 5,
    goldenBoats: 4,
    goals: 815,
    tournamentsAmount: 35
}
let jugador3 = {
    name: 'Elson',
    age: 80,
    teamName: 'Brasil',
    level: 8,
    nickName: 'Pele',
    trophies: 1,
    champions: 0,
    goldenBoats: 0,
    goals: 767,
    tournamentsAmount: 40

}
/* ejercicio1
if (jugador1.age < jugador2.age) {
    console.log(jugador1.name + ' es el más joven')
} else {
    console.log(jugador2.name + ' es el más joven')
}

if (jugador1.level > jugador2.level) {
    console.log(jugador1.nickName + ' tiene más nivel que ' + jugador2.nickName)
} else {
    console.log(jugador2.nickName + ' tiene más nivel que ' + jugador1.nickName)
}*/


/*Ejercicio2
if (jugador1.goldenBoats > jugador2.goldenBoats && jugador1.trophies > jugador2.trophies) {
    console.log(jugador1.nickName + ' tiene mas botas de oro: ' + jugador1.goldenBoats + ' y tiene mas balones de oro: ' + jugador1.trophies)
} else if (jugador2.goldenBoats > jugador1.goldenBoats && jugador2.trophies > jugador1.trophies){
    console.log(jugador2.nickName + ' tiene mas botas de oro: ' + jugador2.goldenBoats + ' y tiene mas balones de oro: ' + jugador2.trophies)
}else{
    console.log('ni ' + jugador1.nickName +' ni ' + jugador2.nickName + ' cumplen las dos condiciones')
}
*/

/*Ejercicio3

let est1 = jugador1.goals / jugador1.tournamentsAmount
let est2 = jugador2.goals / jugador2.tournamentsAmount
let est3 = jugador3.goals / jugador3.tournamentsAmount


if (est1 > est2 && est1 > est3) {

    console.log (jugador1.name +', ' +jugador1.nickName + ' tiene la mayor estadistica: ' + est1)

} else if (est2 > est1 && est2 > est3){

    console.log (jugador2.name +', ' +jugador2.nickName + ' tiene la mayor estadistica: ' + est2)

}else{
    console.log (jugador3.name +', ' +jugador3.nickName + ' tiene la mayor estadistica: ' + est3)
}
*/

/*Bucles, sentencias for

for (let i = 0; i < 10; i++) {

}
*/

/*
for (let i = 10; i >= 1; i--) {
    console.log('vuelta numero '+ i)
}
*/

let colors = [
    'yellow',
    'blue',
    'red',
    'green',
    'white'
];

/*
for (let i = 0; i < 3; i++) {
    console.log(colors[i]);

}
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);

}
*/

/*
let num = 3
let esprimo = true
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        esprimo = false
    }

}
if (esprimo){
    console.log(num)
}else {
    console.log('no es primo')
}
*/
//imprmir los 100 primeros numeros primos

let noparar = true
let contador = 0
/*creamos dos variables:
1. noparar sirve para poner fin al bucle principal
2. */

for (let j=3; noparar; j++){
    /*  un bucle for donde: creamos la variable j = 3 (el número desde donde empieza a contar los números primos, y
    tambien sería el númerador). Después, evalua si noparar es igual a true para entrar al bucle, y si entra suma 1
    a j  */

        // entró al bucle, entonces:
    let esPrimo = true // crea y le asigna a la variable esPrimo = true

    for (let i = 2; i<j; i++){ /*Bucle donde primero crea variable i = 2 (debe ser mayor a 1 porque es una condición
        de los números primos). El segundo parametro es para la condición, en donde i debe ser menor que j para entrar.
        Esto para que no se repita infinitamente el bucle. Por último le suma 1 a j */

        if(j % i == 0){ /*Teniendo en cuenta que si el resto de una división es 0 el número no es primo. Entonces,
        en la condición se hace la operación entre j (el numerador) %(resto de) i (denominador) y se commpara el
        resultado con cero para saber si NO es primo */

        //si no es primo, entonces esPrimo = false

            esPrimo = false
        }
    }
}
// Antes de seguir con el bucle se hace la siguiente condición:

if (esPrimo){ // si esPrimo es = true, entonces entre, si no, pues siga con el bucle y no se imprime el número noprimo
    console.log(j) // se imprime en  consola j, que fue el número con el que se hizo la operación
    contador = contador++ // la variable contador se le suma 1
    if (contador == 100){ /* recordemos que contador es la variable que le da la instruccion (si es = 100) a noparar
        de cambiar a false y si es false, entonces se detiene el bucle*/
        noparar = false
    }
}

/**
 * Retroalimentación:
 * Muy bien! Excelente trabajo 10/10
 */