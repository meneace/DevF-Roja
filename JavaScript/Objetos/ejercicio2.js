class persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;

    }
    name() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellidoPaterno}  ${this.apellidoMaterno}`);
    }
    imc() {
        console.log(`Mi peso es de ${this.peso} Kg y  mi altura es de ${this.altura} M por lo tanto mi IMC es de ${this.peso/(this.altura * this.altura)}`)
    }

    mayor() {
        if (this.edad < 18) {
            console.log(`Tengo ${this.edad} años, aun no soy mayor de edad!!!`)
        } else {
            console.log(`Tengo ${this.edad} años, ya soy mayor de edad`)
        }
    }
}

//Falta crear la funcion de RFC en donde se soicite mes dia y año
class nacionalidad extends persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura, pais) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura);
        this.pais = pais;
    }
    country() {
        console.log(`Soy de ${this.pais}`)
    }
}

class datos extends nacionalidad {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura, pais) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura, pais);


    }
    rfc(dia, mes, año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
        this.name();
        this.country();
        this.imc();
        this.mayor();
        console.log(`Mi RFC es ${this.apellidoPaterno.substring(0, 2).toUpperCase()}${this.apellidoMaterno.toUpperCase().substring(0, 1)}${this.nombre.toUpperCase().substring(0, 1)}${año.toString().substring(2, 4)}${mes}${dia}`);
    }
}

const Laura = new datos("Laura", "Luna", "Lopez", 31, 879076, 65, 1.75, "México");
Laura.rfc(21, 05, 1990);