/*
let num1 = 13
let num2 = 8
let num3 = 5
let num4 = 8

if(!num1 == num2 || num3 == num4){
console.log('entre doble condicional')
}else{
console.log('no entre doble condicional')
}


switch ( num1 ){
    case 5:
        console.log ('yo soy 5')
        break;
    case 8:
        console.log ('yo soy 8')
        break;
    default:
        console.log ('yo soy un numero cualquiera')
        break;
}


let jugador1 = {
    name: 'Messi',
    age: 34,
    nameTeam: 'PSG',
    level: 10,
    nickName: 'the goat',
    trophy: 7,
    champions: 4,
    goldenboats: 6,
    goals: 766,
    amounttournaments: 30
}

let jugador2 = {
    name: 'Cristiano',
    age: 37,
    nameTeam: 'manchester united',
    level: 9,
    nickName: 'el bicho siuuuuuuuuuuu',
    trophy: 5,
    champions: 5,
    goldenboats: 4,
    goals: 815,
    amounttournaments: 35
}

let jugador3 = {
    name: 'Elson',
    age: 80,
    nameTeam: 'Brasil',
    level: 8,
    nickName: 'El rey pele',
    trophy: 1,
    champions: 0,
    goldenboats: 0,
    goals: 767,
    amounttournaments: 40
}

let num1 = jugador1.goals/jugador1.amounttournaments
let num2 = jugador2.goals/jugador2.amounttournaments
let num3 = jugador3.goals/jugador3.amounttournaments

 if (num1 > num2 && num1 > num3){
console.log (jugador1.name + ' ' + jugador1.nickName + ' ' + 'estadistica de goles: ' + num1)

 }else if (num2 > num1 && num2 > num3){
console.log (jugador2.name + ' ' + jugador2.nickName + ' ' + 'estadistica de goles: ' + num2)

 }else if (num3 > num1 && num3 > num2){
console.log (jugador3.name + ' ' + jugador3.nickName + ' ' + 'estadistica de goles: ' + num3)

 }else{
    console.log ('ninguno de los jugadores tiene la mejor estadistica')
 }




if (jugador1.goldenboats > jugador2.goldenboats && jugador1.trophy > jugador2.trophy) {
    console.log(jugador1.nickName + ' ' + 'botas de oro: ' + jugador1.goldenboats + ' ' + 'balones de oro: ' + jugador1.trophy)

} else if (jugador1.goldenboats < jugador2.goldenboats && jugador1.trophy < jugador2.trophy) {
    console.log(jugador2.nickName + ' ' + 'botas de oro: ' + jugador2.goldenboats + ' ' + 'balones de oro: ' + jugador2.trophy)

} else {
    console.log('ningun jugador es mejor que otro')
}




if (jugador1.age < jugador2.age) {
    console.log('el jugador mas joven es: ' + jugador1.name + ' su alias es: ' + jugador1.nickName)
} else {
    console.log('el jugador mas viejo es: ' + jugador2.name + jugador1.nickName)
}

if (jugador1.level > jugador2.level) {
    console.log('el jugador con mas nivel: ' + jugador1.name + ' su alias es: ' + jugador1.nickName)
} else {
    console.log('el jugador con menos nivel: ' + jugador2.name + jugador2.nickName)
}




let num = 11
let esprimo = true
let i = 2
for(i; i<num; i++){
    if(num % i == 0){
        esprimo=false
    }
}
if(esprimo){
    console.log('si es primo')
}else{
    console.log('no es primo')
}



let noparar = true
let contador = 0
for (let j = 2; noparar; j++) {
    let esprimo = true
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {
            esprimo = false
        }
    }
    if (esprimo) {
        console.log(j)
        contador = contador + 1
        if (contador == 100) {
            noparar = false
        }
    }
}

*/