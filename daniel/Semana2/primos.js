let noparar = true;
let primos = [];
for (let j = 2; noparar; j++) {
    try {
        for (let i = 2; i < j; i++) {
            if (j % i === 0) throw false;
        }
        primos.push(j);
        if (primos.length == 100) noparar = false;
    } catch(e){}
}

console.log("Los números primos son: ", primos.join(', '))