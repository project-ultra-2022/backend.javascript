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
];

let Michis = cats.filter ((cat) => {
    return cat.color == 'Black-White'
    }
) 
 console.log('\n Los gatos que son Black-White son: \n', Michis);

 console.log ('\n -------------------------------------------------\n')

 let Michis2 = cats.filter ((cat2) => {
    return cat2.age > 5
 })
 console.log('Los gatos mayoes a 5 años son : ', Michis2)

console.log ('\n ------------------------------------------------- \n')

 let Michis3 = cats.filter ((cat3) => {
 return cat3.age < 5
 })
 console.log('\n Los gatos que son menores a 5 años son: \n', Michis3)
