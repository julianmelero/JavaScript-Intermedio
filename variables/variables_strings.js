var nombre = 'Julián';
var apellido = 'Melero'
var nombreMayusculas = nombre.toUpperCase();

console.log(nombreMayusculas);
console.log(nombre.toLowerCase());

// Primera letra

var primeraLetra = nombre.charAt(0);

// Longitud

var longitudNombre = nombre.length;
console.log(longitudNombre);

// Concatenación

var nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

// Substr

var str = nombre.substr(0,2);
console.log(str);