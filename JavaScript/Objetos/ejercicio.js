class triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    definir() {
        console.log(`Soy un TRIANGULO: Si mi base es de ${this.base} M y mi altura es de ${this.altura} M. Entonces mi perimetro es de ${this.base*3} M y mi area es de ${(this.altura*this.base)/2} M Cuadrados`)
    }
}

const uno = new triangulo(5, 8);

uno.definir();

class cuadrado {
    constructor(base) {
        this.base = base;
    }
    definir() {
        console.log(`Soy un CUADRADO: Si mis lados miden ${this.base} M. Entonces mi perimetro es de ${this.base*4} M y mi area es de ${(this.base*this.base*this.base*this.base)} M Cuadrados`)
    }
}

const dos = new cuadrado(4);

dos.definir();


class rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    definir() {
        console.log(`Soy un RECTANGULO: Si mi base es de ${this.base} M y mi altura es de ${this.altura} M. Entonces mi perimetro es de ${(this.base*2) + (this.altura*2)} M y mi area es de ${(this.altura*this.base)} M Cuadrados`)
    }
}

const tres = new rectangulo(5, 3);

tres.definir();


class persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;

    }

    imc() {
        console.log(`Mi nombre es ${this.nombre}, mi peso es de ${this.peso}, mi altura es de ${this.altura} por lo tanto mi IMC es de ${this.peso/(this.altura * this.altura)}`)
    }

    mayor() {
        if (this.edad < 18) {
            console.log("Soy menor de edad")
        } else {
            console.log("Soy mayor de edad")
        }
    }
}

//Falta crear la funcion de RFC en donde se soicite mes dia y año

const cuatro = new persona("Ilse", 21, "Fem", 60, 1.40);

cuatro.imc();
cuatro.mayor();