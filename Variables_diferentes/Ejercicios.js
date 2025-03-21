//Declara una variable de tipo any, asígnale distintos valores (string, número, booleano) y usa console.log 
// para imprimir su tipo y contenido después de cada asignación.
var variableCuaqluiera;
variableCuaqluiera = "Hola, ¿Como estas?";
//variableCuaqluiera = 777
//variableCuaqluiera = true
console.log(variableCuaqluiera);
//Declara una variable de tipo unknown, asígnale un valor y luego verifica su tipo con typeof 
// antes de operar con ella. Si es un string, conviértelo a mayúsculas; si es un número, multiplícalo por 2.
var variableUnknow;
variableCuaqluiera = true;
if (typeof variableCuaqluiera === "string") {
    console.log(variableCuaqluiera);
}
else {
    console.log("".concat(variableUnknow, ", no es un strig"));
}
//Crea una función que siempre lance un error con un mensaje personalizado y usa never 
// como su tipo de retorno. Luego, llama a la función y maneja el error con un try...catch.
function throwErrorTwo(message) {
    throw new Error(message); //se lanza un error
}
try {
    throwErrorTwo("Estes es un error fatal!");
}
catch (error) {
    console.log("Error atrapado", error);
}
//Define una función que reciba un mensaje como argumento y lo imprima en consola sin retornar ningún valor. 
// Usa void como su tipo de retorno.
function valor(message) {
    console.log("Mensaje:", message);
}
valor("Hola ");
//Crea una función que reciba un parámetro de tipo unknown, verifique si es un string y lo devuelva en mayúsculas. 
// Si el dato no es un string, lanza un error usando never. Luego, llama a la función con distintos tipos de datos y maneja posibles errores con un try...catch.
function ejercicio(dato) {
    if (typeof dato === "string") {
        return "el dato es un string: ".concat(dato.toUpperCase());
    }
    else {
        throw new Error("No es un string");
    }
}
try {
    console.log(ejercicio("typescript"));
    console.log(ejercicio(42)); // Esto lanzará un error
}
catch (error) {
    console.log("Error atrapado:", error);
}
