let jugador1 = {
    name: 'messi',
    age: 34,
    nameTeam: 'PSG',
    level: 10,
    nickName: 'La pulga',
    trophy: 7,
    Champions: 4,
    goldenBoats: 6,
    goals: 766,
    numberOftournaments:30
}

let jugador2 = {
    name: 'cristiano',
    age: 37,
    nameTeam: 'ManchesterUnited',
    level: 9,
    nickName: 'El bicho',
    trophy: 51,
    Champions: 5,
    goldenBoats: 1,
    goals: 815,
    numberOftournaments:35
}

let jugador3 = {
    name: 'pele',
    age: 80,
    nameTeam: 'brasil',
    level: 8,
    nickName: 'rey pele',
    trophy: 1,
    Champions: 0,
    goldenBoats: 0,
    goals: 767,
    numberOftournaments:40
}


if(jugador3.goals < jugador1.goals){
    console.log(jugador3.nickName + ' tiene una cantidad de goles de = '+ jugador3.goals +' mientras que los de ' 
    +jugador1.nickName + ' son de' + ' : ' + jugador1.goals)
}else{
    console.log(jugador1.nickName + ' tiene una cantidad de goles de : '+ jugador1.goals + ' mientras que los de '
    +jugador3.nickName +' son de'+ ':' + jugador1.goals) 
}










/*
 if (jugador1.age < jugador2.age) {
    console.log(jugador1.name + ' es mas Joven')
} else {
    console.log(jugador2.name + ' es mas Joven')
}


if (jugador1.level > jugador2.level) {
    console.log(jugador1.name + ' tiene mas nivel ')
} else {
    console.log(jugador2.name + ' tiene mas nivel '  )
} 



if (jugador1.goldenBoats > jugador2.goldenBoats && jugador1.trophy > jugador2.trophy) {
    
        console.log(jugador1.nickName + ' tiene mas botas de oro ' + jugador1.goldenBoats + ' y' + 
        ' tiene mas balones de oro ' + jugador1.trophy)
    
} else if(jugador1.goldenBoats < jugador2.goldenBoats && jugador1.trophy < jugador2.trophy) {
    console.log(jugador2.nickName + ' tiene mas botas de oro ' + jugador2.goldenBoats + ' y' + 
        ' tiene mas balones de oro ' + jugador2.trophy)
}else {
    console.log("Ningun de los dos cumple las dos condiciones")
} 

let est1 = jugador1.goals / jugador1.numberOftournaments
let est2 = jugador2.goals / jugador2.numberOftournaments
let est3 = jugador3.goals / jugador3.numberOftournaments
    

if (est1 > est2 && est1 > est3) {
    console.log (jugador1.name + ' conocido como '  + jugador1.nickName + ' tiene la mejor estadistica de goles: ' + est1)

} else if (est2 < est1 && est2 < est3) {
    console.log (jugador1.name + 'conocido como' + jugador2.nickName + ' tiene la mejor estadistica de goles: ' + est2)

} else if (est3 < est1 && est3 < est2) {
    console.log(jugador1.name + 'conocido como' + jugador3.nickName + ' tiene la mejor estadistica de goles: ' + est3)
} 
*/



let noParar = true;
let contador = 0;
for(let j = 2; noParar; j++){
    let esPrimo= true;
    for (let i = 2; i < j; i ++){
        if(j % i == 0){
            esPrimo=false
        }
    }
    if (esPrimo) {
        console.log(j)
        contador = contador + 1
        if(contador == 100){
            noParar = false
        }
    }
    
}





