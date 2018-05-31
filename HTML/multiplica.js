//Seccion donde se crea variable a solicitar por consola

const readline = require('readline');

//Se habilita la captura y la salida de un valor
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Se hace uso del valor capturado
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
    //Se cierra conexion. Es muy importante cerrar las conexiones porque de lo contrario se quedaran abiertas epserando siempre un valor
    rl.close();
})