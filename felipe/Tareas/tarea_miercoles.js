let noparar = true // Declaramos una variable que se llame noparar y que sea true. La variable sirve para ponerle fin al ciclo 
let primos = []; // Declaramos otra variable que se llama primos y le abrimos un arrays vacio 
let sizeCoincidences = 150000; // Declaramos otra variable que se llama sizecoincidences y que dentro del arrays van a aver 150000 resultados 
for (let j = 2; noparar; j++) {// Abrimos un bucle for en el que declaramos una variable que se llame j y que valga 2, luego el bucle mira si noparar es true, si es asi va  sumar a j en 1, abrimos llaves "1"
    try { // Abrimos una condicion try - catch / try sirve para intentar mostrar un error cunado lo encuentra, entra catch para atraparlo, abrimos llaves "2"
        for (let i = 2; i < j; i++) {  // anidamos un bucle for en el que declaramos una variable que se llame i y que valga 2, luego decimos que i es menor a j esto quiere decir que cada que se reinicie el bucle i si o si tendra que ser menor a j, y cada que se cumpla esta condicion a i se le sumara 1, abrimos llaves "3"
            if (j % i === 0) throw false; // abrimos un condicional if en el que le decimos que cuando haga la operacion j modulo de i, los dos iguales sirven para comprobar que el resultado sea cero y que sea int. EL trhow false sirve para decir que si el numero no es primo sea falso y no lo manda a la array 
        }// cerramos llaves "3"
        primos.push(j);// aqui decimos que empuje todos los numeros primos al array vacio de primos  
        if(primos.length == sizeCoincidences) noparar = false;// abrimos un condicional if en el que le decimos que compare la longitud de primos con sizeCoincidences y que si el resultado de primos llega a 15000 que pare el bucle 
    } catch(e){} //Cerramos llaves "2". Si try llega a ver un error, catch lo atrapa y lo saca del array, abrimos y cerramos llaves 
}// Cerramos llaves "1"

let num1 = 1 // Declaramos una variable que se llame num1 y que tenga como valor 1
let num2 = 1 // Declaramos una variable que se llame num2 y que tenga como valor 1
let fibonacci = [];// Declaramos una variable que se llame fibonacci y que tenga una arrays vacia  
noparar = true; //  Declaramos una variable que se llame noparar y que sea true. La variable sirve para ponerle fin al ciclo 
for (let i = 0; noparar; i++) { //Abrimos un bucle for en el que declaramos la variable i y que tenga un valor de 0, luego el bucle mira si noparar es true, si es asi va a sumar a i en 1, brimos llaves "1"
    let num3 = num1 + num2 // Declaramos otra variable que se llame num 3 y que el valor de este sea la suma de num1 y num2
    fibonacci.push(num3) // Aqui le decimos que empuje todos los numeros fibonacci al array vacio de fibonacci
    if(fibonacci.length == sizeCoincidences) noparar = false // abrimos un condicional if en el que le decimos que compare la longitud de fibonacci con sizeCoincidences y que si el resultado de fibonacci llega a 15000 que pare el bucle
    num1 = num2 // Aqui estamos remplazando el valor de num1 a num2 
    num2 = num3 // Aqui estamos remplazando el valor de num 2 a num3. Esto sirve para que se pueda cuplir la secuencia fibonacci 
} // Cerramos llaves "1"

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo)); //Declaramos una variable que se llame result, luego decimos que nos filtre todos los resultados de la array de fibonacci con filter (filter sirve para buscar todos los numeros de fibonacci), abrimos parentesis y le ponemos como un alias a fibonacci 
// que se llame fibo luego agregamos una funcion flecha que es como una alternativa mas corta para una expresion de funcion, luego le pedimos que nos compare los resultado del array primos con los de fibonacci.  

console.log(result) // Aqui pedimos que nos imprima en terminal "result"