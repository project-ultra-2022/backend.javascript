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


let newCats = 
cats.filter(
    function(cat){
        return cat.color == 'Black-White'
    }
)
console.log('Gatos de color Black-White son: ')
console.log(newCats)


let new2Cats = 
cats.filter(
    function(cat2){
        return cat2.age > 5
    }
)
console.log('Gatos mayores a 5 años son: ')
console.log(new2Cats)

let new3Cats =
cats.filter(
    function(cat3){
        return cat3.age < 5
    }
)
console.log('Gatos menores a 5 años son: ')
console.log(new3Cats)