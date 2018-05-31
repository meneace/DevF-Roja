const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Dame un valor a multiplicar ', (valor) => {

    if (valor < 0) {
        console.log("No se puede multiplicar por numeros negativos");
    } else if (valor === 0) {
        console.log("Todos los valores dan cero");
    } else {
        for (let i = 1; i <= 1; i++) {
            for (let o = i; o <= 10; o++) {
                console.log(o + " x", valor, "=", valor * o);
            }
        };
    }

    rl.close();
})