/*# Hacer el siguiente patron

                    1
                2   2   2
            3   3   3   3   3
        4   4   4   4   4   4   4
    5   5   5   5   5   5   5   5   5
6   6   6   6   6   6   6   6   6   6   6

## Mostarlo en la consola */

console.log ('                0')
function pyramid(numPisos) {
    for (let i = 1; i < numPisos; i++) {
        let piso = '';
        for (let j = 0; j <= numPisos - i; j++) {
            piso = piso + '  ';
        }

        for (let j = 0; j < i; j++) {
            piso = piso + ' ' + i;
        }
        console.log(piso + ' ' + reverseString(piso));
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

pyramid(7)