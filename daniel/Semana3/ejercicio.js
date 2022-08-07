class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonido() {
        return this.nombre + ' hace un ruido';
    }
}

class Perro extends Animal {}

console.log(new Perro('Doggy').sonido());
