# # JAVA SCRIPT
## correr el codigo 
node felipe/ejercicio.js


# condicionales

# all raid

# else if 

# if dentro de if

# < > / <>=
Let num = 5
let num = 8
if (num <> num2){
    console.log('entre');

# ej
let num1=8
let num2=8
let num3=null
if (!num3){
      console.log('no existe')
    
}else{ 
    console.log('si existe')
}     

# ej
let num1=8
let num2=8
let num3=5
let num4=8
if (num1 == num2 || num3==num4){
      console.log('entré doble condicional')
    
}else{ 
    console.log('no entré doble condicional')
}


# todos los operadores 

== que es igual  
> mayor que
< menor que 
!= negacion
>= mayor o igual 
<= mayor o igual 
&& 'and' si ambas condiciones cumplen entran en if si ninguna cumple ambos entra en else
|| 'o'  si una condicion de dos no cumple entra en if 

# switch y break
switch sirve para evaluar valores y el break para que no siga corriendo el codigo
let num1=8
let num2=8
let num3=13
let num4=8

switch (num3) {
    case 5: console.log('Yo soy 5')
    break;
    case 8: console.log('Yo soy 8')
    break;
    default: console.log('soy un numero cualquiera')
    break;
}

# para hacer un espacio 
Por ejemplo name team 
nameTeam

mas botas de oro 
mas balones de oro

# sumar/dividir o multiplicar etc
let est1 = jugador1.goals / jugador1.numberOftournaments
    console.log ( est1 )

# actividad 
ver cual jugador tiene la mejor estadistica de gol luego poner el nombre y apodo de quien tiene la mejor estadistica de goles

let est1 = jugador1.goals / jugador1.numberOftournaments
    console.log (est1)
let est2 = jugador2.goals / jugador2.numberOftournaments
let est3 = jugador3.goals / jugador3.numberOftournaments
    

if (est1 > est2 && est1 > est3) {
    console.log (jugador1.name + ' conocido como '  + jugador1.nickName + ' tiene la mejor estadistica de goles: ' + est1)

} else if (est2 < est1 && est2 < est3) {
    console.log (jugador1.name + 'conocido como' + jugador2.nickName + ' tiene la mejor estadistica de goles: ' + est2)

} else if (est3 < est1 && est3 < est2) {
    console.log(jugador1.name + 'conocido como' + jugador3.nickName + ' tiene la mejor estadistica de goles: ' + est3)
}

## Bucle
Para que un codigo se repite y el codigo es:

        3 parametros 
        el ; sirve para separar
for (let i = 0;i < 10; i++ ){

}

# EJ:
#index nos avisa en que vuelta vamos 

let jugador = (jugador1,jugador2,jugador3);

jugadores for Each (function ( elem, index  )){
                            elemen.name
}

# EJ2
for (let i = 0; i < 10; i++ ){
    console.log('Vuelta #' + (i+1));
    console.log('me estoy imprimiendo 10 veces')
    
}

# Suma/multiplicacion etc
let aux = 1;
for (let i = 0; i < 10; i++ ){
   aux += + i
   console.log (aux);
    
}

# cunaod llegue al 4 te va a decir 
let aux = 1;
for (let i = 0; i < 10; i++ ){
    if(i == 4){
        console.log('soy el 4')
    }else {
        console.log('soy un numero cualquiera')
    }
    
}

# Actividad : ejecuta un bucle del 10 al 1
let aux = 1;
for (let i = 10; i >= 1; i-- ){
    console.log('soy el numero :' + i)
    
}

##
let colors = ['amarillo', 
     'azul', 
     'rojo',
     'verde',
     'blanco'];
console.log(colors[2]);

## 
let colors = ['amarillo', 
     'azul', 
     'rojo',
     'verde',
     'blanco'];
//console.log(colors[4]);
for (let i = 0; i < 4; i++ ){
    console.log(colors[i]);
}

# 
let num = 5
let esprimo = true
let i = 2
for ( i; i< num; i++){
    if (num % i == 0){
        esprimo=false
    }
}
if (esprimo){
    console.log ('si es primo')
}else{ 
    console.log ('no es primo')
} 


# los primeros 100 numeros primos