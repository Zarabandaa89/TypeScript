// Declarar un array de nombres y el tipado es un arreglo de string
var nombres = ["Amin", "Marce", "Miranda"];
console.log("Nombres:", nombres);
console.log("----------------");
// Declarar un array de edades y el tipado es un arreglo de number
var edades = [39, 25, 30];
console.log("Edades:", edades);
console.log("----------------");
// Declarar un array mixto y el tipado es un arreglo de any(cualquier cosa)
var mixto = ["Amin", 39, true];
console.log("Mixto:", mixto);
console.log("----------------");
// Declarar un array de personas
var personas = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];
// Agregar una nueva persona
personas.push({ nombre: "Miranda", edad: 30, esDesarrollador: true });
// Imprimir el array
console.log("Personas:", personas);
console.log("----------------");
//Tupla
var persona;
persona = ["Amin", 39, true];
console.log("Persona:", persona);
console.log("----------------");
//Tupla
var personasTupla = [];
personasTupla.push(["Juan", 77, true]);
personasTupla.push(["Camilo", 10, true]);
personasTupla.push(["Santiago", 11, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});
// Enumeradores 
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Lunes;
console.log("Dia:", DiaDeLaSemana[dia]);
