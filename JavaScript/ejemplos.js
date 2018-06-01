//Sincrono
/*
var a = "hello world";

function b() {
    console.log("Called B");
}

b();
console.log(a);
*/

function a() {
    b();
    console.log(myVar);
    var myVar = 11;
    //myVar devuelve undefined porque la variable esta declara despues de haberla llamado
}

function b() {
    var myVar = 2;
    console.log(myVar);

}

var myVar = 10;
console.log(10);
a();





function c() {
    var myVar = 11;
    d();
    //Imprime 10 en el valor, porque se esta tratando de declarar la variable nuevamente. Si se quiere modificar el valor, entonces se debe declara el nombre reservdado y asignarle un valor(myVar = 20;)
}

function d() {
    console.log(myVar);
}

var myVar = 10;
console.log(10);
c();



function e() {
    var myVar = 20;

    function f() {
        console.log(myVar);
    }
    f();
}
var myVar = 10;
console.log(myVar);
e();