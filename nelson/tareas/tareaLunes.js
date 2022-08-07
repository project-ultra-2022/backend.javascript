/*
var aleatorio = Math.floor(Math.random()*1000);
console.log(aleatorio)
var long = aleatorio.toString().length
console.log(long)
*/

// Ejercicio Lunes

// Dado los siguientes arrays

// Mostrar el nombre de la canción con su respectivo artista

// Ejemplo:
// Let it be - The beatles,
// I want to break free - Queen,

let songs = [
    "Let it be",
    "I want to break free",
    "I bet you look good on the dancefloor",
    "Paint It, Black"
];

let artists = [
    "The beatles",
    "Queen",
    "Arctic Monkeys",
    "The Rolling Stones"
];

for(let i = 0; i < songs.length; i++){
    const resultado = songs.find(song => song == songs[i])
    const resultado2 = artists.find(artist => artist == artists[i])
    console.log(resultado + " - " + resultado2)
}


