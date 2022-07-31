# temas de hoy
1. arrays+ bucles+trycatch
2. For each,some,filter,length, fiod, map
3. set timeout
4. buscar en internet
5. funciones, parametros y salidas
6. utilizar 2 primeros principios solid
# Arrays
se hacen con llaves cerradas[], un array solo puede guardar un valor tras otro y son puntuales
a diferencia de los objetos que pueden guardar cosas mas mas complejos. Los arrays se usan para tener las consultas mas organizadas. 
permite guardar mucha informacion que se va encontrando y lo guarda en un array con ayuda de los push
## Push 
es para ponerle un valor mas a la casilla del array 
se pone el nombre del array.push y entre parentesis ponemos lo que queremos meter
## Length/ longitud en español
cuenta cuantas posiciones hay dentro de un array 
primos= [1,2,3,4]
primos.length (4)
# TryCatsh
form
try {
    if (form.name.length=''){
        throw 'nombre no existe'
    }
}

catch (e/ aqui se recibe el numero de los parametros){
    alert(e);
}
# condicionales terciarios
1. si en el if despues de los parentesis solo necesito poner una linea de codigo la puedo poner sin corchetes
if (j==3) no parar = false
2. se hace el if y el else en una sola linea
noparar = (j==3) ? false=true; 
3. si el condicional es verdadero siga la sentencia, si no lo es pase a la siguiente linea
(j==3) ? no parar= false: 
    noparar=true 
El join en este caso lo usamos para pasar el array a texto 
