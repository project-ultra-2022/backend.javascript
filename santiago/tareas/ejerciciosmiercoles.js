let noparar = true; //Declaro una variable que se llame noparar y que sea igual a true
let primos = []; //Declaro un arrays  que se llame primos y que no tenga nada
let sizeCoincidences = 150000; //Declaro una variable que se llame sizeCoincidences y que sea igual a 150000 ese 150000 esque dentro del arrays van a haber 150000 resultados
for (let j = 2; noparar; j++) { //Abro un bucle y declaro una variable que se llame j y que sea igual a 2 luego que noparar siga siendo true y que j vaya incrementando
    try { //Abro un try catch
        for (let i = 2; i < j; i++) { //Abro el bucle for anidado y declaro una variable que se llame i y que sea igual a 2 luego que i sea menor a j y que i vaya incrementando
            if (j % i === 0) throw false; //Se crea una condicion if que compruebe que el numero no tenga ningun divisor y que sea exacta
        } //Cierro bucle for anidado
        primos.push(j); //Aqui le estamos diciendo que meta todos los numeros primos encontrados en la arrays primos para eso sirve el push
        if(primos.length == sizeCoincidences) noparar = false; //Se crea una condicion que compare la longitud de la arrays primos con la variable sizeCoincidences y que noparar sea false para que pare
    } catch(e){} //Cierro el try catch y que me imprima e que es igual a error
} //Cierro bucle principal

let num1 = 1 //Declaro una variable que se llame num1 y que sea igual a 1
let num2 = 1 //Declaro una variable que se llame num2 y que sea igual a 1
let fibonacci = []; //Declaro una arrays que se llame fibonacci y que este vacia
noparar = true; //Decimos que no parar sea igual a true
for (let i = 0; noparar; i++) { //Abro un bucle for y declaro i y que sea igual a 0 luego que noparar siga siendo true y que i vaya incrementando
    let num3 = num1 + num2 //Declaro num3 y que sea igual a la suma de num1 y num2
    fibonacci.push(num3) //Aqui hacemos un push que es empujar los resultados o guardar los resultados obtenidos en el arrays fibonacci
    if(fibonacci.length == sizeCoincidences) noparar = false //Se crea una condicion que compare la longitud del arrays fibonacci con sizeCoincidences y que noparar sea false para que pare
    num1 = num2 //Aqui que num1 sea igual a num2 para que tome el valor de num2 y asi seguir la secuencia 
    num2 = num3 //Aqui que num2 sea igual a num3 para que tome el valor de num3 y seguir la secuencia
} //Cierro bucle for principal

const result = fibonacci.filter(fibo => fibo == primos.find(primo => primo == fibo)); /*declaro una variable que se llame result y filtro los resultados de fibonacci declaro una funcion en linea que se llame fibo 
y que lo que este dentro de fibo se compare con los primos y buscando un resultado luego declaro una funcion en linea que se llame primo y me compre con fibo*/

console.log(result) //Y por ultimo un console log de resultado para que me muestre las coincidencias