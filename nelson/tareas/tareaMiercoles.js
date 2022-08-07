let noparar = true;                                                 // Se declara variable noparar en true
let primos = [];                                                    // Se declara array vacio primos para guardar los numeros primos que va encontrando
let sizeCoincidences = 150000;                                      // se Declara variable sizeCoincidences con inicializacion en 150.000
for (let j = 2; noparar; j++) {                                     // bucle for con condicion noparar en true hasta que sizeCoincidences y longitod del array sea 150.000
    try {                                                           // try si dentro del bucle encuentra algun error
        for (let i = 2; i < j; i++) {                               // bucle for con una condicion if para ir buscancan numeros primos
            if (j % i === 0) throw false;                           // condicion if que comprueba si los numeros a buscar tienen mas divisores y un throw que envia el error al catch
        }                                                           // se cierra condicional if
        primos.push(j);                                             // metodo .push para ir agregando los primos que encuentra al array
        if(primos.length == sizeCoincidences) noparar = false;      // condicional if para verificar si la longitud del array primos es igual a sizeCoincidences
    } catch(e){}                                                    // muestra el error encontrado
}                                                                   // se cierra bucle for principal

let num1 = 1                                                        // se declara variable num1 con el primer numero de la serir
let num2 = 1                                                        // se declara num2 con el segundo numero de la serie fibonacci
let fibonacci = [];                                                 // se declara array vacio
noparar = true;                                                     // noparar se devuelve atrue ya que en el anterior codigo ya era false al encontrar todos los numeros primos solicitados
for (let i = 0; noparar; i++) {                                     // bucle for que no va a parar hasta cumplir una condicion
    let num3 = num1 + num2                                          // se declara variable num3 que es la suma 
    fibonacci.push(num3)                                            // metodo .push para ingresar los numeros al array
    if(fibonacci.length == sizeCoincidences) noparar = false        // condicional if que comprueba que la longitud del array
    num1 = num2                                                     // dentro del bucle cada vez que se repita num1 va a tomar el valor de num2
    num2 = num3                                                     // dentro del bucle cada vez que se repita num2 va a tomar el valor de num3
}                                                                   // se cierra bucle for

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo));   // se declara una constante result y se iguala realizando un filtro al array fibonacci y dentro la funcion fibo se busca con el metodo find la coincidencia dentro del array de primos

console.log(result)                                                 // se inprime el resultado

// Comentar linea por linea el ejercicio

// daniel/Semana2/primoFibonacci2.js

//  Explicar con lujo de detalles la linea 26