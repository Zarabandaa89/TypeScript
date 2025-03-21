// Declarar un array de nombres y el tipado es un arreglo de string
let nombres: string[] = ["Amin", "Marce", "Miranda"];
console.log("Nombres:", nombres);
// imprime "Nombres: [ 'Amin', 'Marce', 'Miranda' ]" 
console.log("----------------");



// Declarar un array de edades y el tipado es un arreglo de number
let edades: number[] = [39, 25, 30];
console.log("Edades:", edades);
console.log("----------------");



// Declarar un array mixto y el tipado es un arreglo de any(cualquier cosa)
let mixto: any[] = ["Amin", 39, true];
console.log("Mixto:", mixto);
console.log("----------------");



// Declarar un array de personas y el tipado es un arreglo de objetos
interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}
// Declarar un array de personas
let personas: Persona[] = [
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
let persona: [string, number, boolean]; //tipado
persona = ["Amin", 39, true]; //asignacion

console.log("Persona:", persona); //imprime "Persona: [ 'Amin', 39, true ]"
console.log("----------------");


//Tupla
let personasTupla: [string, number, boolean][] = []; //tipado

personasTupla.push(["Juan", 77, true]);//asignacion
personasTupla.push(["Camilo", 10, true]);//asignacion
personasTupla.push(["Santiago", 11, false]);//asignacion

personasTupla.forEach(persona => { //recorrer
    console.log("Persona:", persona);//imprime "Persona: [ 'santiago', 11, false ]

    let nombre: string = persona[0];//asignacion
    let edad: number = persona[1];//asignacion
    let esDesarrollador: boolean = persona[2];//asignacion

    console.log("Nombre:", nombre);//imprime "Persona: [ 'santiago']
    console.log("Edad:", edad); //imprime "Persona: [ 39 ]
    console.log("Es desarrollador:", esDesarrollador); //imprime "Persona: [ true ]
}); 


// Enumeradores 
enum DiaDeLaSemana { //tipado
    Lunes, //asignacion
    Martes, //asignacion
    Miercoles, //asignacion
    Jueves, //asignacion
    Viernes, //asignacion
    Sabado, //asignacion
    Domingo //asignacion
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Lunes; //asignacion
console.log("Dia:", DiaDeLaSemana[dia]); //imprime "Dia: Lunes"
