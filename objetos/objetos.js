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
function imprimirNombreMayusLocal({nombre}) {
    var nombre = nombre.toUpperCase();
    console.log(nombre);
}



imprimirNombreMayusLocal(juan);
imprimirNombreMayusLocal({nombre: 'Pepito'});