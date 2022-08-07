# ==
igualdad

# > 
mayor que

# <
menor que 

# !=
diferente de 

# >=
mayor igual que

# <=
menor igual que

# &&
que se cumpla esta condicion y la otra

# ||
significa 'o'

# Bucle for

for (let i = 0; i<=10; i++){
    1
    2
    3
    10
}

///////////////// NUEVOS TEMAS //////////////////////

# arrays + bucles + try catch

# try catch
La declaración (try) señala un bloque de instrucciones a intentar y (catch) especifica una respuesta si se produce una excepción.

ejemplo:

try{
    if(form.name.length == 0){
    throw 'Nombre no existe'
}
}catch(e){
    
alert (e)

}

# arrays

El arrays sirve como un conjunto para poner muchas variables ahi den
let nombre del array = {} - llaves abiertas para objetos [] - llaves cerradas para arrays
para agregar otro objeto en el arrays es = nombre del array.push = [lo que quiere agregar] y lo agregado siempre va a ponerse de ultimas:

Ejemplo:

let nombre del arrays = [los parametros que queramos];

# For each
El método forEach() ejecuta la función indicada una vez por cada elemento del array

Ejemplo:

let numbers = [2, 5, 4]
numbers.forEach(
    function(element){
        console.log(element)
    }
)

# Some
El método some sirve para recorrer una arrays y que despues se rompa el bucle y para romper el bucle se 
utiliza return true porque para some es salgase del bucle

Ejemplo:

let numbers = [2, 5, 6, 3, 1]
numbers.some(
    function(element){
        console.log(element)
        if(element == 6)
        return true
    }
)

# filter
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

Ejemplo:

let numbers = [2, 5, 6, 3, 1]
let newNumbers = 
numbers.filter(
    function(num){
        return (num % 2 == 0)
    }
)
console.log(newNumbers)

# length
Muestra la longitud que tiene el arrays osea muestra cuantas cosas hay dentro del arrays

Ejemplo:

nombre del arrays.length == a la cantidad de cosas que hay en el arrays

# find
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

Ejemplo:

let numbers = [2, 5, 6, 3, 1]
let newNumbers = 
numbers.find(
    function(num){
        return num == 5
    }
)
console.log(newNumbers)

# map
El método map() crea un nuevo array y afecta a todo el arrays y como se ve en el ejemplo estamos multiplicando
la funcion

Ejemplo:

let numbers = [2, 5, 6, 3, 1]
let nuwNumbers = 
numbers.map(
    function(num){
        return num * num
    }
)
console.log(newNumbers)

# como buscar en internet
Para buscar en internet tenemos que poner las palabras claves que queremos buscar y al final siempre poner 
el motor el que estamos usando y nunca usar conectores por ejemplo como encontrar coincidencias entonces lo recortamos a solo encontrar coincidencias arrays js.

# Funciones
Para hacer una funcion tenemos que hacer lo siguiente function nombre de la funcion(parametros){} y para
llamar a la a funcion tenemos que hacer lo siguiente let result = nombre de la funcion(parametros):

Ejemplo:

function(element)

# join en javascript
El join pone un separador y dentro de los parentesis podemos poner lo que uno quiera que le separe entre los arrays:

Ejemplo:

let numbers = [2,5,6,3,1]

console.log(numbers.join(' - '))

# Parametros
Son los que estan dentro del parentesis y con los que se opera segun la funcion

Ejemplo:

let numbers = [2,5,6,3,1] los parametros serian los que estan dentro de las llaves cerradas

# Salidas
Es return o lo que queremos que nos devuelva:

# condicionales ternarios
  Condicionales que son de una linea:

  Ejemplo 1:
   
   if (j == 3) noparar = false

   Ejemplo 2:

   noparar = (j == 3)? false : true
   
   Ejemplo 3:
   (j == 3)? noparar = false : noparar = true

   # 2 Primeros principios SOLID

   # set timeout