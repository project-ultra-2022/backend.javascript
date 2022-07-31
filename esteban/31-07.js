// mostrar loos 10 numeros que sean primos y que estén en la secuencia de fibonacci

/* No pudeeeeeeeeee
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
*/
/* Lo que se va a explicar hoy
arrays 
bucles
try catch
utilizar las tres para mejores soluciones

Aprender forEach, some, filter, lenght, find, map, join

Set timeout: tiempo

Cómo buscar en internet

Funciones, parametros y salidas

Entender los dos primeros Principios Solid

*/


/**
 * un array es muy util para los bucles porque permite guardar mucha informacion que vamos
 * encontrando en un solo array. 
 * Agregar elementos a un array con push
 * Let primos = [1,3,5,];
 * primos.push(7);
 * console.log(primos)
 * 
 * Length.
 * primos.length
 * mostraria cuantos numeros hay en el array: 4
 * 
 * try catch
 * para hacer validaciones formulario
 
ejemplo
try {
    if (form.name.length == 0) {
        throw 'el campo Nombre esta vacio'
    }
    if (form.lastaname.length == 0) {
        throw 'el campo esta vacio'
    }
} catch (error) {
    return error,
}
 */

/**
 * condicinal ternario: formas de optimizar los if, if else
 * 1. para optimizar if, con solo una orden
 * if (condicion) haga esto
 * 2. optimizar if else si la var es booleana
 * variable = (condicion)? false(si la condicion es verdadera):true (si la condicion no es verdader);
(condicion)? variable = false: variable = true;
*/