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

let gatosHallados = cats.find (Michis => Michis.age < 5 && Michis.color == 'Yellow')

console.log(gatosHallados);