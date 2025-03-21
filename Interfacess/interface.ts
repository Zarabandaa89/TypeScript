//Declarar una interface
interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

//Usar la interface
let personaOne: Persona = {
    nombre: "Amin",
    edad: 39,
    esDesarrollador: true
};
//salida : Persona { nombre: 'Amin', edad: 39, esDesarrollador: true }


//Imprimir la persona
console.log("Persona:", personaOne);

//Declarar un array de personas
let personasTwo: Persona[] = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];
//salida : Personas: [ { nombre: 'Amin', edad: 39, esDesarrollador: true }, 
// { nombre: 'Juan', edad: 25, esDesarrollador: false }, 
// { nombre: 'Maria', edad: 30, esDesarrollador: true } ]

//Imprimir el array
console.log("Personas:", personasTwo);

//Declarar una función
interface Sumar {
    (a: number, b: number): number;
}

//Usar la función
let sumarTwo: Sumar = (a: number, b: number): number => {
    return a + b;
};
//salida : Resultado de sumar: 8

//Imprimir el resultado
console.log("Resultado de sumar:", sumarTwo(5, 3));