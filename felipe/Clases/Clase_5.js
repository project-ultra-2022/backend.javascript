// Split
/*
let s = 'Hola mundo es' 
console.log(s.split (' '))
*/

//map 
/*
let students =[
    {id: 1, name: 'santi'},
    {id: 2, name: 'pipe'},
    {id: 3, name: 'sele'},
]
let newResult = students.map (student => {
    return student.name 
})
console.log(newResult) */

/*indexOf
//'ballena azul'.indexOf('Azul')

let texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sapiente perspiciatis. Voluptates distinctio veritatis minus suscipit reiciendis nostrum non animi, eaque harum nesciunt illum sequi neque deleniti dolorem nemo vitae!'

console.log (texto.indexOf('L'))
*/

/* includes
let mejoresEstudiantes = [
    'santi', 'Nelson', 'selena', 'pipe', 'esteban'
]
console.log(mejoresEstudiantes.includes('pipe') )
*/

/* slice 
let m = 'Petro > duque'
console.log(m.slice (6, -6))
*/

/*sort

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
*/

/* class

class Car {

        constructor(color,model){
        this.color = color
        this.model = model  
    }
}
let litleCar = new Car('red', '2015');
console.log(litleCar.model) 

class book {
    constructor(color, frontpages, pages){
    this.color = color
    this.frontpages = frontpages
    this.pages = pages
    }
}
let Books = new book('orange','Saquenme de latam', '100');
console.log(Books.frontpages)
*/

/*class Rectangulo { 
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


/* class Triangulo {
    constructor(alto, base){
        this.alto = alto 
        this.base = base
    }
area (){
    return (this.alto * this.base) / 2
    }
}
const triangulo = new Triangulo(10, 10)  
console.log (triangulo.area())*/

/*class Circulo {
    constructor(radio){
        this.radio = radio 
    }
    area (){
        return Math.round (this.radio * this.radio * Math.PI)
    }
}
let circulo = new Circulo(10)
console.log (circulo.area())*/

 /*class Animal {
    constructor(name){
        this.name = name 
    }
    sonido(){
        return this.name + ' Hace ruido'
    }
}
let animal = new Animal('Samy')
console.log( animal.sonido()) 
*/

/*class Animal {
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

console.log(new Perro('Doggy').sonido());

class gato extends Animal {
    sonido(){
        return this.nombre + ' Maulla.';
    }
}
console.log(new gato('Michi').sonido());

class vaca extends Animal {
    sonido(){
        return this.nombre + ' Vaca hace mu';
    }
}
console.log(new vaca('fuchicaca la').sonido());

class gallo extends Animal {
    sonido(){
        return this.nombre + 'gallo hace cocoro co'
    }
}
console.log(new gallo('willy el ').sonido());

class pavo extends Animal {
    sonido(){
        return this.nombre + 'Pavo hace glu glu glu'
    }
}
console.log(new pavo('alberto el ').sonido());*/

new clas