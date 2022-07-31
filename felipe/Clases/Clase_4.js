// los primeros 10 numeros fibonacci y primos 

let num1 = 1
let num2 = 0
let i = 0
let j = 4
let noparar=true
let contador = 2
for(j; i<j; i++){
    num3 = num1 + num2
        num1 = num2
        num2 = num3
    for(let y = 2; noparar; y++){
        let esprimo= true; 
        for(let f = 2; f<j; f++){
            if(y % f == 0){
             esprimo=false
             contador = contador + 1
             if (contador == 4){
                noparar = false
                console.log(num3, contador)
             }
            }
        }
    }
} 

// fibonacci = 2,3,5,13,89,233,1597
// primos =    2,3,5,13,89,233,1597