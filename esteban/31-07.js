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

/**
 * funciones
 * sintaxis con ejemplo
 * function sum(a,b) {
    return a+b
}
let result = sum(5,8)
console.log(result)
 */

//ejercicio funciones: hacer bucle de 10 vueltas

/*
function sumarNumeros(num1,num2) {
    return num1+num2
}
let otra = 0
for (let i = 0; i < 10; i++) {
    console.log(sumarNumeros(i,otra))
    otra = otra+3
    
}
*/

/**
 * ForEach, ejemplo
let numbers = [2,5,7]
numbers.forEach(
    function (element) {
        console.log (element)
    }
)
 */

/**
 * Some
 * para some, true significa que termine
 let numbers = [2,5,6,3,1]
 numbers.some(
    function (element) {
        console.log(element)
        if (element == 6) return true
    }
 ) 
 */

 //Filter: crear un array con los valores que cumplan la condicion
  
/*
let numbers = [2,5,6,3,1]

let newNumbers = numbers.filter(
    function (num) {
        return num%2 == 0
    }
)
console.log(newNumbers)
*/

//find
/*
let numbers = [2,5,6,3,1]

let newNumbers = numbers.find(
    function (num) {
        return num%2 == 0
    }
)
console.log(newNumbers)
*/

//map
/*
let numbers = [2,5,6,3,1]

let newNumbers = numbers.map(
    function (num) {
        return num*num
    }
)
console.log(newNumbers)
*/
//join convierte el array en un texto para imprimirlos separados por una coma, o separado por lo que queramos.
/*
let numbers = [2,5,6,3,1]
console.log('Num: '+numbers.join(', Num: ')) 
*/

/**
 * buscar en internet
 * poner palabras clave
 * poner al final la tecnologia utilizada
 * no usar conectores ni palabras de pregunta
 * copiar la primera linea del error o palabras clave
 */

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}