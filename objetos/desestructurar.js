var nombreJulian = "Julián";
var nombrePepe = "Pepe";

var juan = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 28
}

/*
Podemos pasar parte de los objetos con {property} 
*/
function imprimirNombreMayusLocal(persona) {
    // var nombre = persona.nombre;
    var {nombre} = persona;
    var nombre = nombre.toUpperCase();
    console.log(nombre);
}

function imprimirNombreYEdad(persona) {
    var {nombre,edad}  = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad}`);

}

imprimirNombreYEdad(juan);

imprimirNombreMayusLocal(juan);
imprimirNombreMayusLocal({nombre: 'Pepito'});