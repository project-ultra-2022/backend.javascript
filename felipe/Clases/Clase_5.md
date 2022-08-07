# split
let s = 'Hola mundo es' 
console.log(s.split (' '))

Terminal:
[ 'Hola', 'mundo', 'es' ]

split nos muestra por separado la palabra del let, ejemplo.
le pedimos que nos muetre 'hola mundo' 

# map 
let students =[
    {id: 1, name: 'santi'},
    {id: 2, name: 'pipe'},
    {id: 3, name: 'sele'},
]
let newResult = students.map (student => {
    return student.name 
})
console.log(newResult);

Terminal:
[ 'santi', 'pipe', 'sele' ]

# lindex of
let texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sapiente perspiciatis. Voluptates distinctio veritatis minus suscipit reiciendis nostrum non animi, eaque harum nesciunt illum sequi neque deleniti dolorem nemo vitae!'

console.log (texto.indexOf('L'))

TERMINAL
1

el lindexOf encuentra la primera conincidencia y pone el sitio en la que se encuentra 

# lastIndexOf
let texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sapiente perspiciatis. Voluptates distinctio veritatis minus suscipit reiciendis nostrum non animi, eaque harum nesciunt illum sequi neque deleniti dolorem nemo vitae!'

console.log (texto.lastIndexOf('do'))

TERMINAL
214

el lastIndexOf encuentra la ultima coincidencia y poner el sitio en el que se encuentra 

si no encuentra ninguna coincidencia pone -1

# includes
let mejoresEstudiantes = [
    'santi', 'Nelson', 'selena', 'pipe', 'esteban'
]
console.log(mejoresEstudiantes.includes('pedro') )

Terminal:
False
// Includes sirve para buscar un nombre,elemento o numero (depende de lo que busquemos dentro de una array) y pone true o false, si no encuentra dentro de la array el nombre pedro manda un false, si le ponemos ('pipe') nos va a mostrar true porque esta dentro de la array 

# slice 
let m = 'Petro > duque'
console.log(m.slice (6, -6))
 
 Terminal 
 >

Slice sirve para recortar, en el codigo pusimos petro > duque, y si le ponemos 6 nos va a recortar toda la palabra petro, el slice tambien recorta espacios, y el -6 sirve para ir de atras hacia delante, entonces si le ponemos solo -6 nos va a recortar duque 

# Sort
var frutas=[
    'manzana',
    'pera',
    'limon'
]
console.log(frutas.sort())
Terminal
[ 'limon', 'manzana', 'pera' ]

Sort sirve para ordenar alfabeticamente los elemetnos del array y si ponemos numeros nos lo pone lo siguiente 
Terminal: 
[ -5, 19, 2, 54, 6, 8 ]
nos pone eso porque es como si al 19 le pusieramos un . enotnce sseria algo asi. -5, 1.9, 2, 5.4 pero ahi una forma para organizarlo numericamente 

## Numericamente
var frutas=[
    6,
    8,
    19,
    54,
    -5,
    2,
]
console.log(frutas.sort(function (a,b){
    return a-b
}))

Terminal
[ -5, 2, 6, 8, 19, 54 ]

# Principio solid 

Primer principio solid: cada cosa tiene una funcion unica 
segundo principio solid: Las funciones y las clases o los codigos deben estar abiertos a la expansion y cerrados a la modificacion 

# cambelkays
Camblekays Funciones y nombres variables primera en minuscula 
Cambelkays fases e interfaces primera en mayusculas

# Class
class Car {

        constructor(color,model){ // construcor hace la primera funcion que queremos que inicialise 
        this.color = color // this Es la clase en si misma 
        this.model = model //
    }
}
let litleCar = new Car('red', '2015');
console.log(litleCar.color) 

Terminal
red 


Una clase sirve para agrupar un codigo, las clases guardan propiedades y funciones, 
Las propiedades son lo que lleva la clase 
Las funciones son para lo que sirve la clase

// As una clase con libros 

class book {
    constructor(color, frontpages, pages){
    this.color = color
    this.frontpages = frontpages
    this.pages = pages
    }
}
let Books = new book('orange','Saquenme de latam', '100');
console.log(Books.frontpages)

# getter
class Rectangulo { 
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;     
    }
    get area() {----------------
        return this.alto * this.ancho-----------get area es igual al alto y ancho del rectangulo
    }
} 
const cuadrado = new Rectangulo(10,10)
console.log (cuadrado.area);

class Rectangulo { 
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;     
    }
        areaRectangulo () {
        return this.alto * this.ancho
    }
} 
const cuadrado = new Rectangulo(10,10)
console.log (cuadrado.areaRectangulo());

# NPM

Gestionador de librerias