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
//Con la funcion substring estamos obteniendo parte del contenido de la variable, se debe definir el inicio y el final del contenido que queremos obtener. Para desglosar la fecha de nacimiento, se debe acceder al arreglo de la variabe y definir la posicion en donde se encuentran los datoos que queremos obtener, la primer sección siempre sera la 0. Para obtener las 2 cifras del año, primero debemos convertir la variabe a tipo string ya que es numerico y la funcion substring no puede procesar datos que no sean cadenas.