let noparar = true;
let primos = [];
let sizeCoincidences = 150000; /*declaramos las variables*/
for (let j = 2; noparar; j++)/* creamos el bucle e incluimos la condicion de no parar*/ {
    try { /*creamos un try que nos sirve para probar si el numero es primo el numero primo */
        for (let i = 2; i < j; i++) {
            if (j % i === 0) throw false;/* si j resto de i es igual a 0 entonces lanza que no es primo*/
        }
        primos.push(j);/*Cuando encuentre un numero primo entonces lo empuja a (j) */
        if(primos.length == sizeCoincidences) noparar = false;/* Si la cantidad de numeros primos son iguales al numero de coincidencias entonces para el bucle*/
    } catch(e){} /*En esta parte pedimos que agarre el numero de los parametros */
}

let num1 = 1
let num2 = 1/* declaramos las variables*/
let fibonacci = [];/*creamos el array */
noparar = true;/* ponemos nuevamente que la variable no parar sea verdadera para usarla en el bucle */
for (let i = 0; noparar; i++) /*creamos el bucle para la secuencia de fibo e incluimos la variable de no parar */ {
    let num3 = num1 + num2/*declaramos la variable 3 que es la suma de las variables (num 1) y (num 2) */
    fibonacci.push(num3)/*empujamos el resultado de (num 3) al array fibonacci */
    if(fibonacci.length == sizeCoincidences) noparar = false/* si el numero de caracteres de fibonacci es igual al numero de coincidencias entonces parar el bucle */
    num1 = num2/* num 1 es igual a num 2*/
    num2 = num3/*(num 2)= a la suma de num 1 y num 2 o sea (num 3)*/
}

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo));/*primero filtramos fibonacci y luego decimos que nos muestre unicamente el resultado el cual será la coincidencia entre los numeros primos y los numeros fibonacci*/

console.log(result)/*finalmente pedimos que nos muestre en la consola el resultado declarado anteriormente*/