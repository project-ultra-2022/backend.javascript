/* Imprima el siguiente patrón con el ciclo for:
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/

//SOLUCION

let repetirse = '*'
console.log(repetirse)
for(let i = 1; i<=5; i++){
    var asterisco = '*'
    repetirse = repetirse.concat(asterisco)
    console.log(asterisco)
}