# temas de hoy
1. arrays+ bucles+trycatch
2. For each,some,filter,length, fiod, map
3. set timeout
4. buscar en internet
5. funciones, parametros y salidas
6. utilizar 2 primeros principios solid
# Arrays
se hacen con llaves cerradas[], un array solo puede guardar un valor tras otro y son puntuales
a diferencia de los objetos que pueden guardar cosas mas mas complejos. Los arrays se usan para tener las consultas mas organizadas. 
permite guardar mucha informacion que se va encontrando y lo guarda en un array con ayuda de los push
## Push 
es para ponerle un valor mas a la casilla del array 
se pone el nombre del array.push y entre parentesis ponemos lo que queremos meter
## Length/ longitud en español
cuenta cuantas posiciones hay dentro de un array 
primos= [1,2,3,4]
primos.length (4)
# TryCatsh
form
try {
    if (form.name.length=''){
        throw 'nombre no existe'
    }
}

catch (e/ aqui se recibe el numero de los parametros){
    alert(e);
}
# condicionales terciarios
1. si en el if despues de los parentesis solo necesito poner una linea de codigo la puedo poner sin corchetes
if (j==3) no parar = false
2. se hace el if y el else en una sola linea
noparar = (j==3) ? false=true; 
3. si el condicional es verdadero siga la sentencia, si no lo es pase a la siguiente linea
(j==3) ? no parar= false: 
    noparar=true 
El join en este caso lo usamos para pasar el array a texto 
# function 
function findPrimos(parametros){
    let f = 1
    let h= 2
    let r= f+h
    return r
    }
    let resultado = findPrimos ()//  se usa para mostrar el resultado 
    findPrimos// llamamos a la funcion sin necesidad de que se muestre

funcion para sumar// declarar ponemos la logica dentro de la funcion
function sum (a,b){
return a+b

}
let result = sum (5,8);
internamente a= 5 y b=8 llamar o invoca la función
## funciones en linea
let numbers = [2,5,4]
numbers. forEach(
        function (element){
            console.log(element)
        }
)
# forEach
El método forEach() ejecuta la función indicada una vez por cada elemento del array

let ejercicio1 = ['a', 'b', 'c'];

ejercicio1.forEach(element => console.log(element));
# some 
para some return true es terminar el bucle y salir de la función. Rompe el bucle
let numbers = [2, 5, 6, 3, 1]
numbers.some(
    function (element) {
        log(element)
        if (element == 6)
            return true
    }
)
# filter
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. muestra todas las coincidencias 
let numbers = [2, 5, 6, 3, 1]
let newNumbers= numbers.filter(
    function (num){
        return num %2==0
    }
)
console.log (newNumbers)
# no encontro nada 
undefined, null y isnan
# MAP
crea todo con la condicion que le estamos poniendo 
let numbers = [2, 5, 6, 3, 1]
let newNumbers= numbers.map(
    function (num){
        return num * num 
    }
)
console.log (newNumbers)
# Find
filtra los elementos que cumplan la condicion implementada pero a diferencua de filter solo me muestra la primera coincidencia
# join 
es la manera en la que convertimos un array en un texto y le ponemos un separador el cual se pued especificar. si no tiene nada adentro por defecto pone una (,) y si ponemos 'text' es lo que imprime
let numbers = [2, 5, 6, 3, 1]
console.log (',num: ' + numbers.join(', num:'))
# buscar en internet
Usamos palabras clave. Sin necesidad de usar conectores ni palabras de pregunta