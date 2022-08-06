/*# Parte 1
## Encontrar todos los gatos que sean de color Black-White

# Parte 2
## Encontrar todos los gatos que sean mayores a 5 años

# Parte 3
## Encontrar todos los gatos que sean menores a 5 años */
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
let response = cats.filter(cat => {
    return cat.age < 5
})
console.log (response )