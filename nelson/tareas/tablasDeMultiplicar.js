var i = 2
for (i; i <= 20; i++){
    console.log('\n')
    console.log("tabla del " + i, '\n')
    for (var j = 1; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i*j))
    }
}