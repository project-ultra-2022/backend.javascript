# 1 
arrays + bucles + try catch / numeros primos = fibonacci
# 2 
forEach, some, filter, length, find, map 
# 3 
set timeout 
# 4
Buscar en Internet 
# 5 
funciones, parametros, salidas
# 6 
Utilizar 2 primeros principios SOLID
#
EXAMEN 2 HORAS

////////////////////////////////////////////////

# arrays
let primos = [5,3,10] - [] = sirve para declarar una arrays 

for(i = 2; no parar; i++)}
let.push (j) // push significa que empuje otro numero o otro dato 
}
console.log (primos)
-------------------------------
arrays permite guardar 

# lenght 
primos = [5,3,10,7];
primos.length
'Terminal = 4'
sirve para saber cuantos objetos tengo dentro de un arrays
-----------------------
primos = [3,4,5,8]

for(let i = 0; i< primos.length; i++)
primos [i]

# formulario
try 'intente'{
    if(from.name=='')/if(form.name.length == 0){      
'ya fallaste' throw 'nombre no existe' 
}'atrapar'catch(e){
alert(e);
}

try{
    if(form.name.length == 0){
        throw 'nombre
        }
        if (form.lastname.length == 0){

        }


# condicional ternario
(1)
if (j==3) noparar = false // si j es igual a 3 entonces noparar es false
(2)
noparar = (j==3)? false:true; // preguntar si noparar es igual a j==3, si es asi enonces noparar es false si no es asi no parar es true 
(3)
(j == 3)? noparar=false:noparar = false : noparar = true 


# funetion / funcion 
                parametros
                    |
function findprimos( ){
    let f =1
    let h =2
    let r = f + h 
}

findprimos           /
                     /
function sum (a.b){  /  Este es el esqueleto de la funcion 
    return a+b       /
}                    /

let resutl = sum (5,8); > aqui llamamos a la funcion

# ejemplos funciones
function callStudent (name){
    let estudent = []
    return result
}

let result = callStudent('santi');

# ejercicio funciones 
// bucle de 10 vueltas

function sumNumbers(num1,num2){
    return num1 + num2
}

for(let i = 0; i<10; i++){
    console.log(sumNumbers(i,5))
}

# funciones e linea 
=> {

}


# some 
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada / o srive para romper el bucle

let numbers=[2,5,6,3,1]
numbers.some(
    function(element){
        console.log(element);
        if(element == 6)
            return true;// para some return significa terminar
    }
)

# filter
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada / sirve para encontrar todas las posibles coincidencias que nosotros queramos que muestre

let numbers = [2, 5, 6, 3, 1]     // Aqui declaramos una variable y creamos una arrays 
let newNumbers = numbers.filter( //aqui ponemos numbers.filter que quiere decir que numbers los vamos a filtrar
    function (num) {
        return true  num % 2 == 0
    }
)
console.log(newNumbers)

consola/terminal:
2,5,6

# find
sirve para encontrar la primera conincidencia que le declaremos: en el siguiente codigo ponemos que queremos que find nos encuentre la primera coinciedencia de los elementos dentro de la arrays 

let numbers = [2, 5, 6, 3, 1]
let newNumbers = numbers.find(
    function (num) {
        return num == 5
    }
)
console.log(newNumbers)

console/terminal:
5

# formas de null
undefined
null
isnan

# map
transforma toda la array con la transformacion que le estamos dando por ejemplo en el siguiente codigo vamos a decir que multiplique los elemtnos que estan dentro del array

let numbers = [2, 5, 6, 3, 1]
let newNumbers = numbers.map(
    function (num) {
        return num * num
    }
)
console.log(newNumbers)

terminal:


# join
sirve para convertir una arrays en un texto como en el siguiente codigo 

let numbers = [2, 5, 6, 3, 1]

console.log ('num: ' + numbers.join(', num: '))

Terminal:
num: 2, num: 5, num: 6, num: 3, num: 1

# como buscar e internet 

ponemos el problemas que queremos buscar y al final el motor o lenguaje que estas usas 

cuando nos salga un error copia el error y pegalo en google

# index 
artists.forEach((a, index) => { 
console.log(a, songs,[index])
})
terminal:}


Codigo sacado de Tarea_lunes.js


# Foreach

[1,2,5] forEach (
    (elem,i) =>{
    console.log (elem) // Terminal = 1,2,5 *si ponemos elem nos va a imprimir los elementos de la array 
    console.log (i) // Terminal = 0,1,2 *si ponemos i nos va a mostrar la posicion de los elementos de la array 

});
