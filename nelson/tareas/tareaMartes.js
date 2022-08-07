// Ejercicio Martes

// Dado el siguiente array

// Encontrar el gato que tenga menos de 5 años y su color sea Yellow

// Condición, apenas se encuentre, no seguir buscando, devolver el nombre del gato y se finaliza el programa

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

//  forma para imprimir un solo dato del arra
const catResult = cats.find(cat => cat.age < 5 && cat.color == 'Yellow')

console.log(catResult)




// forma para imprimir resultados hasta encontar el el resultado que cumple la condicion 

const catsResults = cats.some(
    function(cat){
        console.log(cat)
        if(cat.age < 5 && cat.color == "Yellow")
        return true
    }
)

