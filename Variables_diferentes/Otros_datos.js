/*let variableAny : any; //se declara la variable y se le asigna el tipo any
variableAny = "Hello"; //se le asigna un valor
//variableAny = 42; //se le asigna un valor
//variableAny = true; //se le asigna un valor
console.log("Valor de variable any " + variableAny); //se imprime el valor de la variable*/
var variableDesconocida; //se declara la variable y se le asigna el tipo unknown
variableDesconocida = "Holaa"; //se le asigna un valor
//variableDesconocida = 77; //se le asigna un valor
//variableDesconocida = false; //se le asigna un valor
if (typeof variableDesconocida === "string") { //se comprueba si la variable es de tipo string
    console.log("Variable unknown is a string:", variableDesconocida); //se imprime el valor de la variable
}
