/*Dado un número aleatorio entre 100 y 1000, cuente el número total de dígitos
Por ejemplo, el número es 75869, por lo que la salida debería ser 5*/

//SOLUCION

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

longRan = aleatorio(100,1000)
console.log(longRan)
console.log(longRan.toString().length)
