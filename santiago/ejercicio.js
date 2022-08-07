/*
let num1 = 13
let num2 = 8
let num3 = 5
let num4 = 8

if(!num1 == num2 || num3 == num4){
console.log('entre doble condicional')
}else{
console.log('no entre doble condicional')
}


switch ( num1 ){
    case 5:
        console.log ('yo soy 5')
        break;
    case 8:
        console.log ('yo soy 8')
        break;
    default:
        console.log ('yo soy un numero cualquiera')
        break;
}


let jugador1 = {
    name: 'Messi',
    age: 34,
    nameTeam: 'PSG',
    level: 10,
    nickName: 'the goat',
    trophy: 7,
    champions: 4,
    goldenboats: 6,
    goals: 766,
    amounttournaments: 30
}

let jugador2 = {
    name: 'Cristiano',
    age: 37,
    nameTeam: 'manchester united',
    level: 9,
    nickName: 'el bicho siuuuuuuuuuuu',
    trophy: 5,
    champions: 5,
    goldenboats: 4,
    goals: 815,
    amounttournaments: 35
}

let jugador3 = {
    name: 'Elson',
    age: 80,
    nameTeam: 'Brasil',
    level: 8,
    nickName: 'El rey pele',
    trophy: 1,
    champions: 0,
    goldenboats: 0,
    goals: 767,
    amounttournaments: 40
}

let num1 = jugador1.goals/jugador1.amounttournaments
let num2 = jugador2.goals/jugador2.amounttournaments
let num3 = jugador3.goals/jugador3.amounttournaments

 if (num1 > num2 && num1 > num3){
console.log (jugador1.name + ' ' + jugador1.nickName + ' ' + 'estadistica de goles: ' + num1)

 }else if (num2 > num1 && num2 > num3){
console.log (jugador2.name + ' ' + jugador2.nickName + ' ' + 'estadistica de goles: ' + num2)

 }else if (num3 > num1 && num3 > num2){
console.log (jugador3.name + ' ' + jugador3.nickName + ' ' + 'estadistica de goles: ' + num3)

 }else{
    console.log ('ninguno de los jugadores tiene la mejor estadistica')
 }




if (jugador1.goldenboats > jugador2.goldenboats && jugador1.trophy > jugador2.trophy) {
    console.log(jugador1.nickName + ' ' + 'botas de oro: ' + jugador1.goldenboats + ' ' + 'balones de oro: ' + jugador1.trophy)

} else if (jugador1.goldenboats < jugador2.goldenboats && jugador1.trophy < jugador2.trophy) {
    console.log(jugador2.nickName + ' ' + 'botas de oro: ' + jugador2.goldenboats + ' ' + 'balones de oro: ' + jugador2.trophy)

} else {
    console.log('ningun jugador es mejor que otro')
}




if (jugador1.age < jugador2.age) {
    console.log('el jugador mas joven es: ' + jugador1.name + ' su alias es: ' + jugador1.nickName)
} else {
    console.log('el jugador mas viejo es: ' + jugador2.name + jugador1.nickName)
}

if (jugador1.level > jugador2.level) {
    console.log('el jugador con mas nivel: ' + jugador1.name + ' su alias es: ' + jugador1.nickName)
} else {
    console.log('el jugador con menos nivel: ' + jugador2.name + jugador2.nickName)
}




let num = 11
let esprimo = true
let i = 2
for(i; i<num; i++){
    if(num % i == 0){
        esprimo=false
    }
}
if(esprimo){
    console.log('si es primo')
}else{
    console.log('no es primo')
}




let noparar = true
let contador = 0
for (let j = 2; noparar; j++) {
    let esprimo = true
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {
            esprimo = false
        }
    }
    if (esprimo) {
        console.log(j)
        contador = contador + 1
        if (contador == 100) {
            noparar = false
        }
    }
}



//bucle de 10 v

function numbers (num1, num2){
    return num1 + num2
}
for(let i = 0; i<10; i++){
    console.log(numbers (i,5))
}



let numbers = [2, 5, 4]
numbers.forEach(
    function(element){
        console.log(element)
    }
)


let numbers = [2, 5, 6, 3, 1]
numbers.some(
    function(element){
        console.log(element)
        if(element == 6)
        return true
    }
)



let s = 'Hola Mundo'
console.log(s.split(' '))



let students = [
 {id: 1, name: 'santi'},
 {id: 2, name: 'pipe'},
 {id: 3, name: 'selena'},
]

let newStudents = 
students.map(student =>{
    return  'El id del estudiante es: ' + student.id + ' - ' + 'El nombre del estudiante es: ' + student.name
})
console.log(newStudents)


let texto = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum qui doloribus autem veritatis expedita iusto,quod excepturi nisi quasi deserunt quia quam nulla suscipit nihil omnis, nostrum sed? Non, magni.'
console.log(texto.lastIndexOf('s'))



let mejoresEstudiantes = [
    'santi', 'Nelson', 'Selena',
    'pipe', 'Esteban'
]
console.log(mejoresEstudiantes.includes('santi'))



let texto1 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(14,16)
let texto2 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(17,23)
let texto3 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(3,5)
let texto4 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(3,5)
let texto5 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(10,13)
let texto6 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(23,32)
let texto7 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(32,35)
let texto8 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(35,39)
let texto9 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(39,44)
let texto10 = 'La mañana das no digas meriyein tu nis hijos tienes'.slice(45,52)
console.log(texto1)
console.log(texto2) 
console.log(texto3)
console.log(texto4)
console.log(texto5)
console.log(texto6)
console.log(texto7)
console.log(texto8)
console.log(texto9)
console.log(texto10)



var frutas = [4,8,12,0,3,-5]
console.log(
    frutas.sort(function(a,b){
      return a-b
    })
)



class Carro {
    color
    model
    constructor(color,model){
        this.color = color
        this.model = model
    }
}
let carrito = new Carro('red', '2015');
console.log(carrito.color)




class person {
    constructor(manos,pies,cabeza){
        this.manos = manos
        this.pies = pies
        this.cabeza = cabeza
    }
}
let personita = new person('fingers','sole foot','hair')
console.log(personita.manos)



class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }
      area(){
        return this.alto * this.ancho
    }
}

const cuadrado = new Rectangulo(10,10)
console.log(cuadrado.area())



class Triangulo {
    constructor(alto,base){
        this.alto = alto
        this.base = base
    }
      area(){
        return (this.alto * this.base)/2
    }
}

const cuadrado = new Triangulo(10,10)
console.log(cuadrado.area())



class Circulo {
    constructor(radio){
        this.radio =radio
    }
    area(){
            return Math.round(Math.PI * this.radio * this.radio)
        }
    }
const circulo = new Circulo(10)
console.log(circulo.area())



class Animal {
    constructor(name){
        this.name = name
    }
    sonido(){
        return this.name + 'hace ruido'
    }
}
const animal = new Animal('Leon')
console.log(animal.name + ' hace ruido');


class Perro extends Animal {
sonido(){
    return this.name + ' ladra'
   }
}



class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    sonido() {
        return this.nombre + ' hace un ruido'
    }
}

class Perro extends Animal {
    sonido() {
        return this.nombre + ' ladra'
    }
}

console.log(new Perro('Doggy').sonido())

class Gato extends Animal {
     sonido() {
        return this.nombre + ' maulla'
     }
}

console.log(new Gato('Motas').sonido())

class Vaca extends Animal {
    sonido() {
        return this.nombre + ' hace leche'
    }
}

console.log(new Vaca('Paquita').sonido())

class Perico extends Animal {
    sonido(){
        return this.nombre + ' sniffea'
    }
}

console.log(new Perico('Chimuelo').sonido())

*/