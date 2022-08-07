let noparar = true // Declaramos una variable que se llame noparar y que sea true. La variable sirve para ponerle fin al ciclo 
let primos = []; // Declaramos otra variable que se llama primos y le abrimos un arrays vacio 
let sizeCoincidences = 150000; // Declaramos otra variable que se llama sizecoincidences y le damos un valor de 15000
for (let j = 2; noparar; j++) {// Abrimos un bucle for en el que declaramos una variable que se llame j y que valga 2, luego el bucle mira si noparar es true, si es asi va  sumar a j en 1, abrimos llaves "1"
    try { // Abrimos una condicion try - catch / try sirve para intentar mostrar un resultado cunado lo encuentra, entra catch para atraparlo, abrimos llaves "2"
        for (let i = 2; i < j; i++) {  // anidamos un bucle for en el que declaramos una variable que se llame i y que valga 2, luego decimos que i es menor a j esto quiere decir que cada que se reinicie el bucle i si o si tendra que ser menor a j, y cada que se cumpla esta condicion a i se le sumara 1, abrimos llaves "3"
            if (j % i === 0) throw false; // abrimos un condicional if en el que le decimos que 
        }// cerramos llaves "2"



Esto es lo que devuelve:
        [
     2,     3,      5,
    13,    89,    233,
  1597, 28657, 514229
]


noparar = true; // Se declara variable booleana noparar con valor true

let primos = []; // Se declara array vacio primos primos para después meter valores con push

let sizeCoincidences = 150000; //se declara variable sizeCoincidences en 150.000, que son las vueltas que va a dar si encuentra primos

for (let j = 2; noparar; j++) {// bucle for que inicia j en 2 (porque si empieza con uno dañaría la lógica de encontrar primos), si noparar es true entonces entra y se va sumando j en uno
    
    Entra al bucle
    try { // try si dentro del bucle encuentra algun error
        for (let i = 2; i < j; i++) {// bucle for anidado con lparte inicial de lógica para encontrar primos

            if (j % i === 0) throw false;// condicion if que comprueba si los numeros a buscar tienen mas divisores (desde el dos y uno antes de sí mismo) y un throw que envia el error al catch
        }// se cierra condicional if
        
        primos.push(j); // .push para ir agregando los primos que encuentra al array
        if(primos.length == sizeCoincidences) noparar = false;// condicional if para verificar si la longitud del 
        array primos es igual a sizeCoincidences
    } catch(e){} // muestra el error encontrado
} // se cierra bucle for principal

let num1 = 1 // se declara num1 con el primer numero de la serie fibonacci
let num2 = 1 // se declara num2 con el segundo numero de la serie fibonacci
let fibonacci = []; // se declara array vacio para ir almacenando
noparar = true; // noparar se devuelve true ya que en el anterior codigo ya era false al encontrar todos los numeros primos solicitados
for (let i = 0; noparar; i++) { // bucle for que no va a parar hasta cumplir una condicion
    let num3 = num1 + num2                                          // se declara variable num3 que es la suma 
    fibonacci.push(num3)                                            // metodo .push para ingresar los numeros al array
    if(fibonacci.length == sizeCoincidences) noparar = false        // condicional if que comprueba que la longitud del array
    num1 = num2                                                     // dentro del bucle cada vez que se repita num1 va a tomar el valor de num2
    num2 = num3                                                     // dentro del bucle cada vez que se repita num2 va a tomar el valor de num3
}                                                                   // se cierra bucle for

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo));   // se declara una constante result y se iguala realizando un filtro al array fibonacci y dentro la funcion fibo se busca con el metodo find la coincidencia dentro del array de primos

console.log(result)                                                 // se inprime el resultado