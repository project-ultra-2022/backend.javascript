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