let noparar = true   //declarando una variable que se llame noparar y que inicialize su valor a true o verdadero
let contador = 0   //declarando una variable que se llame contador y que inice desde cero
for (let j = 2; noparar; j++) {   //se inicia un bucle for y declaro la variable j y que empiece desde 2, tambien rectificando que noparar sea verdadero y que j vaya incrementando y abro llaves
    let esprimo = true   //declarando una variable que se llame esprimo y que sea verdadero o true
    for (let i = 2; i < j; i++) {   //anido un bucle for al principal luego declaro la variable i y que empieze desde 2 luego que i sea menor que j y que i vaya incrementando y abro llaves
        if (j % i == 0) {   //pongo un condicional if que va a comprobar si j modoulo de i sea igual 0 y abro llaves
            esprimo = false   //si j modulo de i es igual a 0 entonces va a cambiar la variable esprimo a falso
        }   //cierro condicional if
    }   //cierro bucle for anidado al bucle for principal
    if (esprimo) {   //pongo un condicional que rectifique que si es esprimo sigue siendo true entonces puede seguir si esprimo es false entonces no entrara en el condicional y abro llaves
        console.log(j)   //aqui pido que me muestre o imprima el numero que lleva j
        contador = contador + 1   //la variable contador sumara de 1 en 1 si la condicion se cumple
        if (contador == 100) {   //pongo un condicional if que compare que contador sea igual a 100
            noparar = false   //la variable noparar cambio su valor a false ya que si contador no es igual 100 entonces el bucle seguira
        }   //cierro condicional if
    }   //cierro condicional if
}   //cierro bucle for principal

/**
 * Retroalimentación:
 * Correcto, ese es el funcionamiento! muy bien, algo que hubiera hecho entender mejor el código es
 * explicar el por qué de esa sentencia, por ejemplo: El condicional (esPrimo) sirve para imprimir el número que encontramos
 * e internamente se incrementa el contador que dice cuantos números primos hemos encontrado.
 */