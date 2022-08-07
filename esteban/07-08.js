/**
 * Aprender TypeScript
 * repaso funciones
 */

//Split, separar 
/*

let s = 'hello world'

let arraye = s.split('h','o');

console.log(arraye)

*/

// array de objetos con map

/*
let students = [
    {id:1, name: 'santi'},
    {id:2, name: 'esteban'},
    {id:3, name: 'pipe'}

]

let NameEstudents = students.map(student => {
    return student.name
})

console.log('Los estudiantes son: ',NameEstudents.join())
*/

// IndexOf: devuelve la posicion donde encontro esa coincidencia
/*
b = 'ballena azul'
b.indexOf('azul') // devolveria 8. Si no encuentra nada, devuelve -1
*/

/**
 * LastIndexOf encuentra la ultima posicion donde encuentre la coincidencia 

let texto = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati fugit quod nostrum quam vero repellendus inventore dolorem qui, ad quae quia temporibus rem ex consectetur officiis dignissimos, voluptatem aliquid! Dolores.'
console.log(texto.lastIndexOf('dolor'))

*/

// includes: solor sirve para arrays sencillos
/*
let mejoresEstudiantes = [
    'santi', 'nelson', 'selena', 'pipe', 'esteban'
]

console.log(
    mejoresEstudiantes.includes('santi') //devuelve true si está, sino está, pues false
)
*/

//Slice: sacar la rebanada del string. tambien acepta un solo parametro

/*
let pizza = 'rebanada'
console.log(pizza.slice(1, -3)) //Devuelve eban porque si le ponemos un numero negativo empieza a contar desde la ultima
*/

// sort: devuelve el array ordenado alfabeticamente o numericamente de menor a mayor

/*
var frutas =[
    'manzana',
    'pera',
    'limon'
]

console.log(
    frutas.sort() //devuelve [ 'limon', 'manzana', 'pera' ]
)

let numbers = [
    1,5,25,6534,234,7645,675,-3242,10 //los ordena con referencia de la lista ASI
]

console.log(
    numbers.sort(function (a,b){ //con esta funcion si los devuelve de menor a mayor, sino, los devuelve con lista ASI
        return a-b
    })
)
*/

/**
 * *principios solid, los dos primeros.
 * Historia: Desde la arquitectura, a lo largo de los años, se dieron cuenta de patrones para optimizar
 * y hacer las cosas mejor. En la programación también detectaron 5 principios con base en patrones de códigos
 * ya hechos para que programes mejor.
 * 
 * * Solid 1: todo tiene una funcionalidad única, solo una responsabilidad.
 * ejemplo: Una olla para cada cosa para que quede la comida mejor.
 * ejemplo en codigo: cada función tiene su objetivo, no sobrecargarla.
 *
 * * Solid 2 las funciones o las clases tienes que estar abiertas a la expansión y cerradas a la modificación. Que sea escalable.
 * 

 * */ 

/**
 * *Clases
 * ^sirve para guardar propiedades(variables) y métodos (funciones)
 * el constructor 
 */

// ! clases e interfases en camelCase pero la primera en mayuscula
/*
*ejemplo con propiedades y constructor
class Car {
    color
    model
    constructor (color, model){ // es lo primero que va a hacer la clase. Toma los parametros y selo asigna a las propiedades
        this.color = color // this se refiere a sí misma la clase
        this.model = model
    }
}

let littleCar = new Car ('red', '2001')
console.log(littleCar.color)
*/

//* Crear clase comida

/*
class Food {
    smell
    taste
    size
    country
    constructor(smell,taste,size,country){
        this.smell= smell
        this.taste= taste
        this.size= size
        this.country= country
    }

}
let foodCountry = new Food ('empalagoso','dulce','pequeno','pais')
console.log(foodCountry.country)

*/

/*

*class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto
        this.ancho = ancho
    }
    area(){
        return this.alto *this.ancho
    }
    
}
const cuadrado = new Rectangulo(10,10)
console.log(cuadrado.area())

*/
/*
*class Triangulo {
    constructor(alto, base){
        this.alto = alto
        this.base = base
    }
    area(){
        return (this.alto *this.base)/2
    }
    
}
const areaTrian = new Triangulo (10,10)
console.log(areaTrian.area())
*/
/*
*class Circulo {
    constructor(radio){
        this.radio = radio
    }
    area(){
        return Math.round((this.radio*this.radio)*Math.PI)
    }
}

const areaCir = new Circulo (5)
console.log(areaCir.area())
*/

//*Herencia

/*
class Animal{
    constructor(name){
        this.name = name
    }
    sonido (){
        return this.name + ' hace un ruido'
    }
}

class Perro extends Animal{
    sonido (){
        return this.name + ' ladra'
    }
}

class Gato extends Animal{
    sonido (){
        return this.name + ' maulla'
    }
}

class Vaca extends Animal{
    sonido (){
        return this.name + ' hace muu'
    }
}

class Loro extends Animal{
    sonido (){
        return this.name + ' habla'
    }
}

class Rata extends Animal{
    sonido (){
        return this.name + ' ronronea'
    }
}

const gato = new Gato('garfield')
console.log(gato.sonido())

const perro = new Perro('Doggy')
console.log(perro.sonido())

const vaca = new Vaca('manchitas la vaca')
console.log(vaca.sonido())

const loro = new Loro('Lorenzo')
console.log(loro.sonido())

const rata = new Rata ('Chefsito')
console.log(rata.sonido())
*/


// *INTRODUCCIÓN A NPM Y TYPESCRIPT
// NPM gestiona las librerias