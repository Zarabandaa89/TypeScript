//Declara una variable de tipo any, asígnale distintos valores (string, número, booleano) y usa console.log 
// para imprimir su tipo y contenido después de cada asignación.

let variableCuaqluiera: any;
variableCuaqluiera = "Hola, ¿Como estas?"
//variableCuaqluiera = 777
//variableCuaqluiera = true

console.log(variableCuaqluiera) //imprime "Hola, ¿Como estas?"

//Declara una variable de tipo unknown, asígnale un valor y luego verifica su tipo con typeof 
// antes de operar con ella. Si es un string, conviértelo a mayúsculas; si es un número, multiplícalo por 2.
let variableUnknow: unknown;
variableCuaqluiera = true

if (typeof variableCuaqluiera === "string") {
    console.log(variableCuaqluiera)
} else {
    console.log(`${variableUnknow}, no es un strig`) //imprime "true, no es un strig"
}



//Crea una función que siempre lance un error con un mensaje personalizado y usa never 
// como su tipo de retorno. Luego, llama a la función y maneja el error con un try...catch.
function throwErrorTwo(message: string): never { //se declara la función y se le asigna el tipo never
    throw new Error(message); //se lanza un error
}
try {
    throwErrorTwo("Estes es un error fatal!");
} catch (error) {
    console.log("Error atrapado", error);
} //imprime "Error atrapado Error: Estes es un error fatal!"



//Define una función que reciba un mensaje como argumento y lo imprima en consola sin retornar ningún valor. 
// Usa void como su tipo de retorno.
function valor(message: string): void {
    console.log("Mensaje:", message);
}
valor("Hola"); //imprime "Mensaje: Hola"



//Crea una función que reciba un parámetro de tipo unknown, verifique si es un string y lo devuelva en mayúsculas. 
// Si el dato no es un string, lanza un error usando never. Luego, llama a la función con distintos tipos de datos y maneja posibles errores con un try...catch.
function ejercicio(dato: unknown): string {
    if (typeof dato === "string") {
        return `el dato es un string: ${dato.toUpperCase()}`;
    } else {
        throw new Error("No es un string");
    }

}

try {
    console.log(ejercicio("typescript")); //imprime "el dato es un string: TYPESCRIPT"
    console.log(ejercicio(42));  // Esto lanzará un error
} catch (error) {
    console.log("Error atrapado:", error);
} //imprime "Error atrapado: No es un string"