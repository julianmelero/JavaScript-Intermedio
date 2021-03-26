var nombre = "Julián";

// General
function imprimirNombreMayus() {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

// Alcance Local
// Parámetros por valor
function imprimirNombreMayusLocal(n) {
    n = n.toUpperCase();
    console.log(n);
}


// Local con let
function imprimirNombreLet() {
    let nom = nombre.toUpperCase();
    console.log(nom);
}

imprimirNombreMayus();
imprimirNombreMayusLocal(nombre);
imprimirNombreLet();