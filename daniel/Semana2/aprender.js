// FOREACH
// El método forEach() ejecuta la función indicada una vez por cada elemento del array

let ejercicio1 = ['a', 'b', 'c'];

ejercicio1.forEach(element => console.log(element));

// FILTER
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

let ejercicio2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = ejercicio2.filter(word => word.length > 6);

console.log(result);

// FIND
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const ejercicio3 = [5, 12, 8, 130, 44];

let result = ejercicio3.find(element => element > 10);

console.log(result);

// MAP
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var ejercicio4 = [1, 5, 10, 15];

var result = ejercicio4.map(function(x) {
   return x * 2;
});

console.log(result)

// SOME
//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada
let ejercicio5 = [3, 10, 18, 20];
ejercicio5.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

// JOIN
// El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
let ejercicio6 = ['Fire', 'Air', 'Water'];
console.log(ejercicio6.join());
// expected output: "Fire,Air,Water"
console.log(ejercicio6.join(''));
// expected output: "FireAirWater"
console.log(ejercicio6.join('-'));
// expected output: "Fire-Air-Water"