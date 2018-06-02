class Persona {

    //Definir las propiedades iniciales del ojeto
    constructor(name, edad, telefono, email) {
        this.nombre = name;
        this.age = edad;
        this.phone = telefono;
        this.email = email;
    }

    presentarse() {
        console.log(`Hola me Llamo ${this.nombre} y tengo ${this.age}`)
    }
}

const Jose = new Persona("Jose", 32, 2323232323, "a@a.com");

const Daniel = new Persona("Daniel", 17, 9876986, "b@a.com");

Jose.presentarse();
Daniel.presentarse();


class cajero extends Persona {
    constructor(name, edad, telefono, email, id) {
        super(name, edad, telefono, email);
        this.id = id;

    }
    recibirDinero(dinero) {
        this.presentarse();
        console.log(`y estoy recibiendo $ ${dinero} Pesos MNX`);
    }
}


const Laura = new cajero("Laura", 31, 879076, "e@o.com", 12);
Laura.recibirDinero(190000);