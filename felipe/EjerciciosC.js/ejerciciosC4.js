/* bucle de 10 vueltas

function sumNumbers(num1,num2){
    return num1 + num2
}

for(let i = 0; i<10; i++){
    console.log(sumNumbers(i,5))
}
*/

/* ForEach 
let numbers =[2,4,5];

numbers.forEach(
    function(element){
        console.log(element);
    } 
);
*/

//join
//sirve para convertir una arrays en un texto como en el siguiente codigo 

let numbers = [2, 5, 6, 3, 1]

console.log ('num: ' + numbers.join(', num: '))