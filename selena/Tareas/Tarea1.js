/*TAREA: Ponerle un comentario en cada linea, explicando que hace*/
let noparar = true;/*Declaramos una variable que nos diga que no parar es igual a verdadero*/
let contador = 0;/*Declaramos una variable de contador que sea igual a 0*/
for (let j = 2; noparar; j++) {/*Creamos un bucle que incluya una variable (J) que empiece desde 2 porque sabemos que los numeros primos son mayores de 1, ponemos el condicional declarado anteriormente llamado no parar y tambien declaramos que el bucle se va a repetir y para eso usamos ++*/
    let esPrimo = true;/*Aqui declaramos una variable que dice que esprimo es verdadero*/
    for (let i = 2; i < j; i++) {/*En este caso ponemos una condicion que declaro la variable (i) que sea igual a 2 y declara que (i) sea mayor a (j), ademas se declara que (i) se repita usando ++*/
        if (j % i == 0) {/*Creamos un if que dice que si el resto de j entre i es igual a 0 entonces la variable esPrimo es falso*/

            esPrimo = false/*, Esto quiere decir que si el resto de j entre i es igual a 0 el numero no es primo y el bucle pasa a la siguiente linea*/
        }
    }
    if (esPrimo){/*En esta parte creamos un if en el que incluimos la variable declarada anteriormente esPrimo, lo cual significa que si el numero si es primo debe entrar a esta linea*/
        console.log(j)/* Ponemos un console.log que significa que queremos que se visualice j en la terminal lo cual para este punto j seria el numero primo*/
    contador = contador + 1/*En esta parte ponemos que el contador sea contador mas 1 para que no cuente las casillas desde 0 sino desde 1*/
    if (contador == 100) {/*Aqui declaramos que si el contador es igual a 100 o sea que si llega a 100 debe parar*/
        noparar = false/*Aqui ponemos que el no parar cuando llegue a 100 sea falso o sea que pare cuando llegue a 100 casillas de numeros primos*/
    }/*Cerramos corchetes*/
}/*Cerramos corchetes*/
}/*Cerramos corchetes*/

/**
 * Retroalimentación: 10/10
 * Correcto, ese es el funcionamiento!
*/