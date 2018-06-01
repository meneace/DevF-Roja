var curp = {
    nombre: 'Ken',
    apellido_paterno: 'Marquez',
    apellido_materno: 'Alvarado',
    sexo: 'H',
    estado: 'DF',
    fecha_nacimiento: [21, 2, 1993]
};

//MAAK9302221hf

console.log(curp.apellido_paterno.substring(0, 2), curp.apellido_materno.substring(0, 2), curp.nombre.substring(0, 1), curp.fecha_nacimiento[2].toString().substring(2, 4), curp.fecha_nacimiento[1], curp.fecha_nacimiento[0], curp.sexo, curp.estado.substring(1, 2));