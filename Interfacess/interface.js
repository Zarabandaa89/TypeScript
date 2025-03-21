//Usar la interface
var personaOne = {
    nombre: "Amin",
    edad: 39,
    esDesarrollador: true
};
//salida : Persona { nombre: 'Amin', edad: 39, esDesarrollador: true }
//Imprimir la persona
console.log("Persona:", personaOne);
//Declarar un array de personas
var personasTwo = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];
//salida : Personas: [ { nombre: 'Amin', edad: 39, esDesarrollador: true }, 
// { nombre: 'Juan', edad: 25, esDesarrollador: false }, 
// { nombre: 'Maria', edad: 30, esDesarrollador: true } ]
//Imprimir el array
console.log("Personas:", personasTwo);
//Usar la función
var sumarTwo = function (a, b) {
    return a + b;
};
//salida : Resultado de sumar: 8
//Imprimir el resultado
console.log("Resultado de sumar:", sumarTwo(5, 3));
