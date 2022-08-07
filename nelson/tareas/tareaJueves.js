// Dato el siguiente array

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

// Parte 1
// Encontrar todos los gatos que sean de color Black-White

console.log("\n gatos de color Black-White \n")

const resultCats = cats.filter(cat => cat.color == "Black-White")
console.log(resultCats)
// Parte 2
// Encontrar todos los gatos que sean mayores a 5 años
console.log("\n gatos mayores de 5 años \n")

const resultCats2 = cats.filter(cat => cat.age > 5)
console.log(resultCats2)
// Parte 3
// Encontrar todos los gatos que sean menores a 5 años
console.log("\n gatos menores de 5 años \n" )

const resultCats3 = cats.filter(cat => cat.age < 5)
console.log(resultCats3)


