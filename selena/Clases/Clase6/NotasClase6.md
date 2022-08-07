## forEach 
[1,2,3].forEach(
(elem,i)=>{
console.log()
}
)
## SPLIT// cada vez que encuentre la letra o lo que pusimos dentro del split entonces parte y crea un espacio
let s= 'hola mundo d ' 
console.log(s.split('o'))
## MAP// coge de los strings lo que queremos y lo une en un resultado. 
let students = [
    { id: 1, name: 'santi' },
    { id: 2, name: 'pipe' },
    { id: 3, name: 'sele' },
]
let newResult = students.map(student => {
    return student.name
});
console.log(newResult)
## ejemplo 2// en este ejemplo solo saca el nombre del gato o los gatos que tienen color amarillo 
let cats = [
    {
        name: 'Motas',
        age: 3,
        color: 'black'
    },{
        name: 'Luna',
        age: 4,
        color: 'Yellow'
    },{
        name: 'Negris',
        age: 5,
        color: 'Yellow'
    },{
        name: 'Mua',
        age: 6,
        color: 'Black-White'
    },{
        name: 'Pelusa',
        age: 3,
        color: 'Black-White'
    },{
        name: 'moticas',
        age: 2,
        color: 'Black'
    },{
        name: 'Burbuja',
        age: 1,
        color: 'white'
    },{
        name: 'Noe',
        age: 4,
        color: 'Black-White'
    },{
        name: 'Michi',
        age: 5,
        color: 'Yellow'
    },
]
let filterCats = cats.filter(cat => cat.color == 'Yellow')
let newResult = filterCats.map(cat => {
    return cat.name 
});
console.log(newResult)
## INDEX OF// encuentra la posicion de la palabra que queremos, cuando no encuentra nada en la palabra pone -1
let texto= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore adipisci architecto odit numquam iste at, sequi perferendis recusandae deleniti culpa aspernatur assumenda nisi dolores consequatur veniam facere quaerat! Hic, natus?'; 

console.log(texto.indexOf('sit'))
}
## LAST INDEX OF// muestra la ultima posicion en la se encuentra la coincidencia que pusimos
let texto= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore adipisci architecto odit numquam iste at, sequi perferendis recusandae deleniti culpa aspernatur assumenda nisi dolores consequatur veniam facere quaerat! Hic, natus?'; 
console.log(texto.lastIndexOf('t'))
## INCLUDES// busca dentro del array. Si encuentra la coincidencia pone true, si no lo encuentra pone false. Solo puede encontrar una coincidencia.  
let mejoresEstudiantes = [
    'santi','nelson','selena','pipe','esteban'
]
console.log(mejoresEstudiantes.includes('esteban'))
# ejemplo 2// en este caso podemos buscar la cantidad de mejores estudiantes (los que son verdaderos)
let mejoresEstudiantes = [
    'santi','nelson','selena','pipe','esteban'
]
console.log(mejoresEstudiantes.includes('esteban')+mejoresEstudiantes.includes('pipe')+mejoresEstudiantes.includes('nelson') )
## SLICE// saqueme el pedacito que le estoy indicando 
# ejericio 1// corta lo solo lo que queremos, corta solo la coincidencia entre 1 y 5 (cuenta desde 1 y no desde 0)
let texto= 'la mañana es hermosa'
console.log( texto.slice(1,5))
# ejercicio 2 // corta la posicion numero 1 y cuando llega al final se devuelve dos posiciones y las corta
let texto= 'la mañana es hermosa'
console.log( texto.slice(1,-2))
## SORT// ordena el array en orden alfabetico en este caso
var frutas = [ 
    'manzana',
    'pera',
    'limon'
]
console.log( frutas.sort())
## ejemplo 2// con numeros funciona diferente y no los ordena correctamente entonces lo que se hace es que se hace lo siguiente
var numeros = [ 
    5,22,56,12,1
]
console.log( numeros.sort(function (a,b){
    return a-b
}))
# PRINCIPIOS SOLID 
1. TODAS LAS COSAS TIENEN UNA RESPONSABILIDAD UNICA 
2. LAS FUNCIONES Y LAS CLASES TIENEN QUE ESTAR ABIERTAS A LA EXPANSION Y CERRADAS A LA MODIFICACIÓN. 

# NORMAS DE GRUPO 
funciones y nombres de variables con la primera en minuscula
clases y interfases la primera en mayuscula 
camelcasem= si se van a agregar mas palabras se pone la otra en mayuscula 
# CLASES 
Es una bolsa grande donde podemos poner otras bolsitas. Las clases guardan propiedades y funciones.

Las propiedades son variables (let tipe, let size) es el tamaño del rectangulo y el tipo de rectangulo (en el ejemplo del rectangulo).
Las propiedades son como las caracteristicas que tiene el objeto y las funciones pues para que funciona. 
## ejemplo// de clase, constructor, propiedades y funciones fuera de la clase
class Triangulo {
    constructor(altura, base) {
        this.altura = altura
        this.base = base

    }
    area() {
        return (this.base * this.altura)/2
    }
}
let triangulo = new Triangulo(10, 10)
console.log(triangulo.area())
## ejemplo 2// cuadrado
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto
        this.ancho = ancho
    }
    area() {
        return this.alto * this.ancho
    }
}
let cuadrado = new Rectangulo(10, 10)
console.log(cuadrado.area())
## class Circulo {
    constructor(radio) {
        this.radio=radio
    }
    area() {
        return Math.round( this.radio * this.radio * Math.PI)
    }
}
let circulo = new Circulo(10)
console.log(circulo.area())
## class heriencia// hereda los conceptos de animal con ayuda de la palabra extends
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonido() {
        return this.nombre + ' hace un ruido';
    }
}

class Perro extends Animal {
    sonido() {
        return this.nombre + ' ladra.';
    }
}

class Gato extends Animal {
    sonido (){
        return this.nombre + 'maulla'
    }
}

class Vaca extends Animal {
    sonido (){
        return this.nombre + 'hace muu'
    }
}

class Pollito extends Animal {
    sonido (){
        return this.nombre + 'hace pio pio'
    }
}


class Conejo extends Animal {
    sonido (){
        return this.nombre + ' ronronea'
    }
}
console.log(new Conejo(' manchitas ').sonido())
# INTRODUCCIÓN A NPM TypeScript// npm es un gestionador de librerias, crea una carpeta llamada node modles y ahí mete todas las librerias. 


