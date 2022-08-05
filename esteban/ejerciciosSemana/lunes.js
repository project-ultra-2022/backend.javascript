/**
 * # Ejercicio Lunes

## Dado los siguientes arrays

let songs = [
    "Let it be",
    "I want to break free",
    "I bet you look good on the dancefloor",
    "Paint It Black"
];

let artists = [
    "The beatles",
    "Queen",
    "Arctic Monkeys",
    "The Rolling Stones"
];

## Mostrar el nombre de la canción con su respectivo artista

Ejemplo:
Let it be - The beatles,
I want to break free - Queen,
...
 */

// Solution

let songs = [
    "Let it be",
    "I want to break free",
    "I bet you look good on the dancefloor",
    "Paint It Black"
];

let artists = [
    "The beatles",
    "Queen",
    "Arctic Monkeys",
    "The Rolling Stones"
];

let songArtist = [];

for (let i = 0; i <= songs.length; i++) {
    songArtist.push(songs[i] +" by "+ artists[i])
}

console.log(songArtist)

    