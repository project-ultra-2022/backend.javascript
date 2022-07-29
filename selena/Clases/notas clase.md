declarar una variable 
let ejemplo = 5
console.log(ejemplo)
## ambito// todo lo que este dentro de los corchetes es el ambito 
function Hola (){

esto es el ambito de function
if
let
}

if y let estan dentro de function y funcionan solo ahí
var aunque se ponga fuera o dentro del ambito se  funciona en todo el codigo
dentro de un if se puede meter otro if infinitamente se suelen llamar if anidados
 ## suma 
let num1 = 5
let num2 = 8
let result = num1+num2
console.log (result)
# condicionales
si el codigo hace esto, reaccione de una forma. Si se comporta de otra manera reacciona de otra
## operadores logicos
== igual
!= diferente
> mayor que
< menor que
> mayor igual
< menor igual
&& es el y es estricto y se deben cumplir ambas condiciones
|| es o una o la otra condicion 
ejemplo
let num1 = 8
let num2 = 8
if(num1>=num2){
console.log('entre')
}
# switch
es cambiar 
switch (aqui se mete el numero a evaluar){
    case '1'
    break 

}
## ejemplo 
switch (num3){
    case 5: console.log ('yo soy 5')
    break; 

    case 8: console.log ('yo soy 8')
    break;

    default: console.log ('soy un numero cualquiera')
    break;
}

## para organizar el codigo
alt+shift+f
## estadistica de goles
goles/cantidad de torneos
# bucles
for (let i=0; i<10; i++)
cuenta hasta 9 desde 0 
## ejemplo
let aux = 1
for (let i=0;i<10; i++) {
aux= aux - i
    console.log(aux);
}
aux + = i
## ejemplo 2
let colors = [
    'amarillo',
    'azul',
    'rojo',
    'verde',
    'blanco'];
for (let i=0; i<3; i++){
    console.log (colors[i]);
}
# numeros primos
el numero que se divide por uno y por si mismo 
## ejericio encontrar el numero primo
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

