/*
let num1 = 8
let num2 = 8
let num3 = 22
let num4 = 8
if(num1>=num2){
console.log('entre al if')
}
else { console.log('entre al else')
}


if(!num3){
    console.log('num3 no existe')
    }
    else { console.log('num3 si existe')
    }

if(num1>num2 && num3==num4){
    console.log('entre doble condicional')
    }
     else { console.log('no entre a doble condicional')
    }

if (num1==num2||num3==num4){
    console.log('entre doble condicional')
    }
    else { console.log('no entre a doble condicional')
    }

switch (num3){
    case 5: console.log ('yo soy 5')
    break; 

    case 8: console.log ('yo soy 8')
    break;

    default: console.log ('soy un numero cualquiera')
    break;
}
*/
/*
if (jugador1.age < jugador2.age) {
    console.log(' el mas joven ' + jugador1.name)
}
else {
    console.log(' es el mas joven ' + jugador2.name)
}
if (jugador1.level > jugador2.level) {
    console.log(' este jugador es el mejor ' + jugador1.name)
}
else {
    console.log(' este jugador es el mejor ' + jugador2.name)
}
*/
/*
let jugador1 = {
    name: 'messi',
    age: 34,
    nameTeam: 'PSG',
    level: '10',
    nickname: 'la pulga',
    trophy: 7,
    champions: 4,
    balls: 6,
    goals: 766,
    tournaments: 30
}

let jugador2 = {
    name: 'Cristiano Ronaldo',
    age: 37,
    nameTeam: 'Manchester Junaits',
    level: 9,
    nickname: 'el bicho',
    trophy: 5,
    champions: 5,
    balls: 4,
    goals: 815,
    tournaments: 35
}
 
let jugador3= {
    name: 'pele',
    age: 80,
    nameTeam: 'Brasil',
    level: 8,
    nickname: 'el rey pele',
    trophy: 0,
    champions:0,
    balls: 1,
    goals:767,
    tournaments: 40
}
let result1 = jugador1.goals/jugador1.tournaments
let result2 = jugador2.goals/jugador2.tournaments
let result3 = jugador3.goals/jugador3.tournaments



if (result1>result2 && result1>result3) {
    console.log(jugador1.name +  '  tiene la mejor estadistica de goles '+ jugador1.nickname )
}
else if (result2>result1 && result2>result3) {
    console.log(jugador2.name + jugador2.nickname + '  tiene la mejor estadistica de goles ')
}
else {
    console.log(jugador3.name + jugador3.nickname +  '  tiene la mejor estadistica de goles ')
}
*/

let noparar = true;
let contador = 0;
for (let j = 2; noparar; j++) {
    let esPrimo = true;
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {

            esPrimo = false
        }
    }
    if (esPrimo){
        console.log(j)
    contador = contador + 1
    if (contador == 100) {
        noparar = false
    }
}
}

