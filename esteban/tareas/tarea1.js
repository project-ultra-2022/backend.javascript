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