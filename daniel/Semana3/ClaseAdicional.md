## ForEach

1. Forma reducida
artists.forEach((a, index) => {
    console.log(a, songs[index])
})

2. Forma normal
songs.forEach(function(elem, index) {
    console.log(elem + ' - ' + artists[index])
})

3. Forma minima - Solo aplica para una sentencia de código
songs.forEach( elem => console.log(elem) )

## Find & Filter

let response = cats.find((cat) => {
    return cat.age < 5 && cat.color == 'Yellow'
})

let response = cats.filter(cat => {
    return cat.age < 5 && cat.color == 'Black-White'
})

## some

let response = '';

cats.some(cat => {
    if(cat.age < 5 && cat.color == 'Yellow'){
        response = cat.name;
        return true
    }
})

console.log('El nombre del gato es: ' + response)

## Pseudocódigo

Bucle 1 a 5, mostrando los asteriscos.
1
2 2
3 3 3
Bucle de 5 a 1, mostrando los asteriscos
for(let i = 5; i <= 0; i--) Bucle hacia atras
3 3 3
2 2
1