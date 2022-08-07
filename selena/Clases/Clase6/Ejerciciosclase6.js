class Animal{
    constructor(name) {
        this.name=name
    }
    sonido() {
        return this.name + 'hace ruido'
    }
}
let myAnimal = new Animal('doggy')
console.log( myAnimal.sonido() + ' hace ruido')

class Perro extends Animal {
    sonido ( ) {
        return this.name + ' ladra'
    }
}
