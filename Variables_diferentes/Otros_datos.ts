let variableAny : any; //se declara la variable y se le asigna el tipo any
variableAny = "Hello"; //se le asigna un valor
//variableAny = 42; //se le asigna un valor
//variableAny = true; //se le asigna un valor
console.log("Valor de variable any " + variableAny); //se imprime el valor de la variable


let variableDesconocida: unknown; //se declara la variable y se le asigna el tipo unknown

variableDesconocida = "Holaa"; //se le asigna un valor
//variableDesconocida = 77; //se le asigna un valor
//variableDesconocida = false; //se le asigna un valor

if (typeof variableDesconocida === "string") { //se comprueba si la variable es de tipo string
    console.log("Variable unknown is a string:", variableDesconocida); //se imprime el valor de la variable
}

function throwError(message: string): never { //se declara la función y se le asigna el tipo never
    throw new Error(message); //se lanza un error
}
throwError("Este es un error"); //se lanza un error

function logMessage(message: string): void { //se declara la función y se le asigna el tipo void para indicar que no devuelve nada
    console.log("Log message:", message); //se imprime el mensaje
}
logMessage("Este es un mensaje de log");//se llama a la función y se le pasa el mensaje
//no se puede ejecutar la funcion logMessage("Este es un mensaje de log") porque arriba tengo un throwError