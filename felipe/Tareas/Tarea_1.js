
let noParar = true;                 // Aqui estamos declarando una variable que se llame noParar y que su valor sea igual a true que significa verdadero 
let contador = 0;                   // Aqui estamos declarando una variable que se llame contador y que su valor inicial sea igual a 0
for(let j = 2; noParar; j++){       // Aqui iniciamos un bucle con for, tambien declaramos que j inicie en 2, luego rectificamos que noParar cuando este en j sea verdadero, por ultimo que cada que se repita el codigo j se valla incrementando por 1 y abrimos llaves    
    let esPrimo= true;              // Aqui declaramos que esPrimo es true o verdadero
    for (let i = 2; i < j; i ++){   // Aqui anidamos otro bulce for declarando que i inicie en 2, comparamos i con j, cada que se repita el codigo i se incremente a 1
        if(j % i == 0){             // Aqui ponemos una condicional if que va a comprobar si j modulo de i es igual a 0 y abro llaves
            esPrimo=false           // si j modulo de i es igual a 0 se cambie la condicion esPrimo de true a false
        }                           // Aqui cerramos llaves de if 
    }                               // Aqui cerramos llaves del bucle anidado for del for principal 
    if (esPrimo) {                  // Aqui ponemos un condicional if que rectifique que esPrimo siga siendo true entonces puede seguir si es false no podra entrar en el condicional y abrimos llaves
        console.log(j)              // Aqui ponemos un console.log para que nos imprima j en la consola   
        contador = contador + 1     // Aqui ponemos que cuando se cumpla la condicional if contador sume 1 
        if(contador == 100){        // En esta linea de codigo agregamos otro if que nos indique que si contador es igual a 100 pare con todo el codigo de lo contrario que siga corriendo
            noParar = false         // En esta parte declaramos que si contador es igual a 100 noParar sea false y que frene todo el codigo
        }                           // Aqui cerramos las llaves del if anidado
    }                               // Aqui cerramos las llaves del if principal
}                                   // Aqui cerramos las llaves del bulce for principal


