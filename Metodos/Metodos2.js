function saludar(nombre, saludo) {
    if (saludo) { //se comprueba si se pasa un saludo
        return "".concat(saludo, ", ").concat(nombre, "!"); //se devuelve el saludo y el nombre
    }
    else { //si no se pasa un saludo
        return "Hola, ".concat(nombre, "!"); //se devuelve un saludo por defecto
    }
}
// Llamadas a la función
console.log(saludar("Santiago")); // Sin saludo
console.log(saludar("Santiago", "Buenos días")); // Con saludo
//Parámetros múltiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0); //se devuelve el resultado
}
console.log("Resultado de sumar todos:", sumarTodos(1, 2, 3, 4, 5)); //se llama a la función y se le pasa los argumentos
console.log("Resultado de sumar todos:", sumarTodos(1, 2, 3)); //se llama a la función y se le pasa los argumentos
//Valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adiós"; }
    return "".concat(despedida, ", ").concat(nombre, "!"); //se devuelve el saludo y el nombre
}
console.log(despedir("Santiago")); //se llama a la función y se le pasa el nombre
console.log(despedir("Santiago", "Hasta luego")); //se llama a la función y se le pasa el nombre
