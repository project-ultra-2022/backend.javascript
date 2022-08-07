const piramide = document.getElementById("piramide");
const altura = 5;// <-- La cantidad de líneas sera el doble

for (let i = 0; i <= altura*2; i++) {

    let cant = (i <= altura) ? i : altura*2 - i; //<-- aumenta o se reduce

    for (let x = 0; x <= cant; x++) {
        piramide.innerHTML += cant;
    }

    piramide.innerHTML += "<br>"; //<-- Termina el segundo ciclo
}
 console.log(piramide)
