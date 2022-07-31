//Ejercicio 1

let num1 = 0
let num2 = 1
let num3 
let contador = 0
let vecesqueserepite = 98
console.log(num1,num2)
for(contador; contador<vecesqueserepite; contador++){
    num3 = num1 + num2
    num1 = num2
    num2 = num3
    console.log(num3)
}

//Ejercicio 2

let i = 2
for(i; i<=20; i++){
    console.log(i)
    for(let j = 1; j<=10; j++){
        console.log(i + ' x ' + j +  ' = ' + (i * j))
    }
}