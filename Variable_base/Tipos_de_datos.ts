let nombre: string = "Santiago"; //string
let edad: number = 39;//number
let esDesarrollador: boolean = true;//boolean
let mes: string | undefined; //string o undefined
let variableNull: null = null; //null

console.log("Mes inicial:", mes); // imprime undefined porque no se ha inicializado

mes = "Enero"; //inicializamos la variable mes con el valor "Enero"
console.log("Mes actualizado:", mes); // imprime "Enero"

console.log(`Hola, ${nombre}`); // imprime "Hola, Amin"
