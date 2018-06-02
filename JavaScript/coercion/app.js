console.log("2+4*5=" + (2 + 4 * 5));
//Aqui primero multiplica y despues suma


let a = 2;
let b = 3;
let c = 4;

a = b = c;
console.log("a = b = c ->");
console.log(a);
console.log(b);
console.log(c);


//Coercion es convertir un tipo de valor a otro tipo

let f = '1' + 2;
console.log(f);
// el resultado es 12 por el 2 se convierte en cadena por lo cual se suman 2 cadenas lo que resulta en la concatenacion de ambos.

console.log(1 < 2 < 3);
console.log(3 < 2 < 1);