// Buscar como hacer un numero aleatorio y luego decir cunado digitos tiene Ej: 10 tiene solo dos digitos

 let main = 1
let max = 1000
let aleatorio = Math.floor(Math.random()*1000);

 console.log(aleatorio) 


let numero = [aleatorio]
numero.length
console.log(numero + ' - ' + 'tiene los siguientes digitos: ' + numero.toString().length)

//ferEach
//, index